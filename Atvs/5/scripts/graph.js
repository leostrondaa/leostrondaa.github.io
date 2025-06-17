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
      title: "Categoria", 
    },
    vAxis: {
      title: "Quantidade", 
      minValue: 0,
    },
    animation: {
      duration: 1000,
      easing: "out",
    },
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById("barchart")
  );
  chart.draw(data, options);
}

document.addEventListener('DOMContentLoaded', function () {
  drawChart();
});