var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("fadeOut");
  //setTimeout serve para dar um tempo entre uma função e outra.
  setTimeout(function () {
    event.target.parentNode.remove();
  }, 500);
});

/*remover paciente, this palavra reseervada que se refere ao dono do evento, nesse caso "paciente"
pacientes.forEach(function (paciente) {
  paciente.addEventListener("dblclick", function () {
    this.remove();
  });
});*/
