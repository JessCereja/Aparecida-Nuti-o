var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMsgsDeErro(erros);

    return; //vai fazer sair da função e ñ adc na tabela.
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();
  var mensagemErro = document.querySelector("#msg-erro");
  mensagemErro.innerHTML = ""; // limpa a msg de erro ao adc um paciente válido
});

//adc paciente na tabela
function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
}

function exibeMsgsDeErro(erros) {
  var ul = document.querySelector("#msg-erro");
  ul.innerHTML = ""; //apaga a msg de erro anterior.
  // forEach, exercendo a mesma função do for.
  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function validaPaciente(paciente) {
  var erros = []; //cria um array de erros

  //quando o if é simples(ñ tem else), pode ser escrito na mesma linha sem precisar das chaves
  if (paciente.nome.length == 0) erros.push("Insira um nome válido");
  if (!validaPeso(paciente.peso)) erros.push("Peso inválido");
  if (!validaAltura(paciente.altura)) erros.push(" altura inválida");
  if (paciente.gordura.length == 0) erros.push("% de gordura inválido");
  if (paciente.peso.length == 0) erros.push("Insira um peso válido");
  if (paciente.altura.length == 0) erros.push("Insira uma altura válida");

  return erros;
}
