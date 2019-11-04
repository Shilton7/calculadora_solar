$(document).ready(function () {

  function showIncidencia() {
    $('#cidades').change(function (event) {
      $('#incidencia').show();
    });
  }
  showIncidencia()

  function clicaValor() {
    $('#valor-conta').keyup(function (event) {
      $('#valor-input').show();
    });
  }
  clicaValor()

  function clicaConsumo() {
    $('#consumo-conta').keyup(function (event) {
      $('#consumo-input').show();
    });
  }
  clicaConsumo()

});
