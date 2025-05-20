google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var assunto = data_subjects.length;
  var regional = data_regionals.length;
  var agent = data_agent.length;

  var data = google.visualization.arrayToDataTable([
    ["Categoria", "Quantidade", { role: "style" }],
    ["Assuntos", assunto, "#4285F4"],
    ["Regionais", regional, "#EA4335"],
    ["Agentes", agent, "#FBBC05"],
  ]);

  var options = {
    title: "Total de Registros",
    legend: { position: "none" },
    hAxis: {
      title: "Quantidade",
      minValue: 0,
    },
    vAxis: {
      title: "Categoria",
    },
    animation: {
      duration: 1000,
      easing: "out",
    },
  };

  var chart = new google.visualization.BarChart(
    document.getElementById("barchart")
  );
  chart.draw(data, options);
}

function updateChart() {
  google.charts.setOnLoadCallback(drawChart);
}

document.addEventListener('DOMContentLoaded', function () {
  drawChart();
});
