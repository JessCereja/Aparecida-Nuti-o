//AJAX requisições no javascript de modo assincrono

var btnBuscarPaciente = document.querySelector("#buscar-pacientes");

btnBuscarPaciente.addEventListener("click", function () {
  var xhr = new XMLHttpRequest(); //requisições http (não esquecer do new.)

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      var erroAjax = document.querySelector("#erro-ajax");
      erroAjax.classList.remove("invisivel");
    }
  });
  xhr.send();
});
