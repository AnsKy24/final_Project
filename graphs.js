const checkbox = document.getElementById('toggle');

checkbox.addEventListener('change', ()=>{
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    backgroundColor: "#000000",
    title: {
        fontColor: '#FFFFFF',
        text: "Porcentajes de las acciones"
    },
    data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0.00\"%\"",
        indexLabel: "{label} {y}",
        dataPoints: [
            {y: 39, label: "Acciones disponibles",indexLabelFontColor:'white'},
            {y: 10.5, label: "Acciones obtenidas por personas naturales",indexLabelFontColor:'white'},
            {y: 55, label: "Acciones de la empresa",indexLabelFontColor:'white'},
            {y: 5.5, label: "Acciones en manos de personas juridicas",indexLabelFontColor:'white'},
        ]
    }]
  });
  chart.render();
  document.body.classList.toggle('dark');
  var darkModenav= document.getElementById('nav');
  var darkModefoot= document.getElementById('foot');
  var darkModecard1= document.getElementById('card1');
  var darkModecard2= document.getElementById('card2');
  var darkModecard3= document.getElementById('card3');
  darkModefoot.classList.toggle('bg-dark')
  darkModenav.classList.toggle('bg-dark')
  darkModenav.classList.toggle('navbar-dark')
  darkModecard1.classList.toggle('dark-card')
  darkModecard2.classList.toggle('dark-card')
  darkModecard3.classList.toggle('dark-card')
});
window.onload = function() {
  var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
          text: "Porcentajes de las acciones"
      },
      data: [{
          type: "pie",
          startAngle: 240,
          yValueFormatString: "##0.00\"%\"",
          indexLabel: "{label} {y}",
          dataPoints: [
              {y: 39, label: "Acciones disponibles"},
              {y: 10.5, label: "Acciones obtenidas por personas naturales"},
              {y: 55, label: "Acciones de la empresa"},
              {y: 5.5, label: "Acciones en manos de personas juridicas"},
          ]
      }]
  });
  chart.render();
  }
  