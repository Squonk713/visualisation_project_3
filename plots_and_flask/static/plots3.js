function buildCharts(year) {

    d3.json("http://127.0.0.1:5000/data").then((data) => {
        console.log(data);
        var selector = d3.select("#selDataset2");
        var years = data.year;
        console.log(years);
        years.forEach((year) => {
          selector
            .append("option")
            .text(year)
            .property("value", year);
          })

        var selector2 = d3.select("#selDataset");
        var countries = data.countries;
        console.log(countries);
        countries.forEach((country) => {
          selector2
            .append("option")
            .text(country)
            .property("value", country);
        })
        
      });
    
};

  buildCharts(null);

