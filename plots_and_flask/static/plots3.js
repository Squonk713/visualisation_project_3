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
              yaxis: {                        
            color: "#f8f8ff",
            size: 6,
            },
            xaxis: {title: {

            text: "<b>Happiness Score by Year</b>",
            font: {
                color: "#f8f8ff",
                size: 10,
            }},
                    color: "#f8f8ff",
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
      sample_happiness_score = [];
      sample_gdp_per_capita = [];
      sample_life_expectancy = [];


      for (let i = 0; i < samples.length; i++) {
        sample_region.push(samples[i].region)
        sample_happiness_score.push(samples[i].happiness_score)
        sample_gdp_per_capita.push(samples[i].gdp_per_capita)
        sample_life_expectancy.push(samples[i].life_expectancy)
      };

      // Bubble colour = Region
      // Size of Bubble = Happiness Score
      // X Values = GDP per Capita
      // Y Values = Lifetime Expectancy
      // Hover Text = Region and Happiness Score


var bubbletrace = {
  x: sample_gdp_per_capita,
  y: sample_life_expectancy,
  type: "bubble",
  text: sample_region,sample_happiness_score,
  hoverinfo: "text",
  mode: "markers",
  marker: {size: sample_happiness_score, color: sample_region, colorscale: "Earth"}
};

data = [bubbletrace];

var bubblelayout = {
  autosize: true,
  height: 1000,
  paper_bgcolor: "rgba(0,0,0,0)",
  plot_bgcolor: "rgba(0,0,0,0)",
  yaxis: {
      title: {
          text: "<b>Lifetime Expectancy</b>",
  font: {
      color: "#f8f8ff",
      size: 20,
  }}, color: "#f8f8ff"},
  xaxis: {title: {
  text: "<b>GDP per Capita</b>",
  font: {
      color: "#f8f8ff",
      size: 20,
  }}, color: "#f8f8ff"
},
};

Plotly.newPlot("bubble", data, bubblelayout);
});


}
;