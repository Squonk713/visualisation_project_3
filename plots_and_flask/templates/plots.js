function buildCharts(sample) {
    d3.json("http://127.0.0.1:5000/data").then((data) => {
        console.log(data);
      })};
  buildCharts(null);