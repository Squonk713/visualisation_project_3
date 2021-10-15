function init() {
  // load the JSON data from the database
      d3.json("http://127.0.0.1:5000/data").then((data) => {
          console.log(data);
  // get years and assign to selector 2
          var selector = d3.select("#selDataset2");
          var years = data.year;
          console.log(years);
          years.forEach((year) => {
            selector
              .append("option")
              .text(year)
              .property("value", year);
            })
  // get countries and assign to selector 1
          var selector2 = d3.select("#selDataset");
          var countries = data.countries;
          console.log(countries);
          countries.forEach((country) => {
            selector2
              .append("option")
              .text(country)
              .property("value", country);
          })
  // create plots using values of the first row of data
  chartplot();
  });
  };
  init(null);
  //***** This function plots the bar plot with new data for the selected Country *********************/
  function CountryChanged(newcountry) {
      // Fetch new data each time a new sample is selected
      barplot(newcountry);
  };
  function YearChanged(newyear) {
    // Fetch new data each time a new sample is selected
    bubbleplot(newyear);
  };
  function barplot(newcountry) {
    d3.json("http://127.0.0.1:5000/data").then((data) => {
        var plotdata_array = data.plotdata;
        var samples = plotdata_array.filter(object => object.country == newcountry);
        console.log(samples);
        console.log(samples.length);
        sample_years = [];
        sample_happiness_score = [];
        for (let i = 0; i < samples.length; i++) {
          sample_years.push(samples[i].year)
          sample_happiness_score.push(samples[i].happiness_score)
        };
        console.log(sample_years);
        console.log(sample_happiness_score);
        var bartrace = {
          x: sample_happiness_score,
          y: sample_years,
          hoverinfo: sample_happiness_score,
          type: "bar",
          orientation: "h",
        };
        bardata = [bartrace];
        var barlayout = {
            height: 200,
            width: 800,
                yaxis: {                        
              color: "#0779B2",
              size: 8,
              },
              xaxis: {title: {
              text: "<b>Happiness Score by Year</b>",
              font: {
                  color: "#0779B2",
                  size: 20,
              }},
                      color: "#0779B2",
                      size: 6,
                  },        margin: {
                      l: 100,
                      r: 35,
                      b: 50,
                      t: 5,
                      pad: 4
                    },    
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
        };
        Plotly.newPlot("bar", bardata, barlayout);
  }
  )
  }
  ;
  function bubbleplot(newyear) {
    d3.json("http://127.0.0.1:5000/data").then((data) => {
        var plotdata_array = data.plotdata;
        var samples = plotdata_array.filter(object => object.year == newyear);
        console.log(samples);
        console.log(samples.length);
        sample_region = [];
        sample_country = [];
        sample_happiness_score = [];
        sample_gdp_per_capita = [];
        sample_life_expectancy = [];
        for (let i = 0; i < samples.length; i++) {
          sample_region.push(samples[i].region)
          sample_happiness_score.push(samples[i].happiness_score)
          sample_gdp_per_capita.push(samples[i].gdp_per_capita)
          sample_life_expectancy.push(samples[i].life_expectancy)
          sample_country.push(samples[i].country)
        };
        // Bubble colour = Region
        // Size of Bubble = Happiness Score
        // X Values = GDP per Capita
        // Y Values = Lifetime Expectancy
        // Hover Text = Country and Happiness Score
        region_numeric = [];
        console.log(region_numeric);
        region_numeric = [];
        for (let i = 0; i < sample_region.length; i++) {
          if(sample_region[i] == "Australia and New Zealand") {region_numeric.push(0)}
          else if (sample_region[i] == "Central and Eastern Europe") {region_numeric.push(1)}
          else if (sample_region[i] == "Eastern Asia") {region_numeric.push(2)}
          else if (sample_region[i] == "Latin America and Caribbean") {region_numeric.push(3)}
          else if (sample_region[i] == "Middle East and Northern Africa") {region_numeric.push(4)}
          else if (sample_region[i] == "North America") {region_numeric.push(5)}
          else if (sample_region[i] == "Southeastern Asia") {region_numeric.push(6)}
          else if (sample_region[i] == "Southern Asia") {region_numeric.push(7)}
          else if (sample_region[i] == "Sub-Saharan Africa") {region_numeric.push(8)}
          else if (sample_region[i] == "Western Europe") {region_numeric.push(9)}
        };
          console.log(region_numeric);
  var bubbletrace = {
    x: sample_gdp_per_capita,
    y: sample_happiness_score,
    type: "bubble",
    text: sample_country,
    hoverinfo: "x+y+text",
    mode: "markers",
    marker: {size: sample_life_expectancy, color: region_numeric, colorscale: "Earth"}
  };
  data = [bubbletrace];
  var bubblelayout = {
    autosize: true,
    height: 500,
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    margin: {
      l: 100,
      r: 35,
      b: 70,
      t: 70,
      pad: 4
    }, 
    yaxis: {
        title: {
            text: "<b>Happiness Score</b>",
    font: {
        color: "#F8F8FF",
        size: 20,
    }}, color: "#F8F8FF"},
    xaxis: {title: {
    text: "<b>GDP per Capita</b>",
    font: {
        color: "#F8F8FF",
        size: 20,
    }}, color: "#F8F8FF"
  },
  };
  Plotly.newPlot("bubble", data, bubblelayout);
  });
  }
  ;
  function chartplot() {
    d3.json("http://127.0.0.1:5000/data").then((data) => {
      var meanvalues_array = data.meanvalues;
      var samples = meanvalues_array;
        console.log(samples);
        sample_countries = [];
        sample_happiness_score = [];
        for (let i = 0; i < samples.length; i++) {
          if(samples[i].happiness_score > 7.2) {sample_countries.push(samples[i].country), sample_happiness_score.push(samples[i].happiness_score)}
          else if(samples[i].happiness_score < 3.84) {sample_countries.push(samples[i].country), sample_happiness_score.push(samples[i].happiness_score)
        };
        console.log(sample_countries);
        console.log(sample_happiness_score);
      let chart = new frappe.Chart( "#bar-chart", { // or DOM element
    data: {
    labels: sample_countries,
    datasets: [
      {
        name: "Mean Happiness Score by Country 2015-2019", chartType: 'bar',
        values: sample_happiness_score,
      }],
    },
    title: "Mean Happiness Score by Country 2015-2019",
    type: 'bar', // or 'bar', 'line', 'pie', 'percentage'
    height: 300,
    colors: ['#F8F8FF'],
    isNavigable: true,
    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + ' pts',
    }
    });
    chart.export();
  }})};