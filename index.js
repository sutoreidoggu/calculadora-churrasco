console.log("ola mundo");

const fundo = document.querySelector("body");
const btnCalcular = document.querySelector("button#calcular");
const selecao = document.querySelector("div.selecao");
let tipoDeProteina = "carne";

const carnes = [
  {
    label: "Carne 1",
    id: "carne1",
    name: "carne1",
    weight: 0.8,
  },
  {
    label: "Carne 2",
    id: "carne2",
    name: "carne2",
    weight: 0.6,
  },
  {
    label: "Carne 3",
    id: "carne3",
    name: "carne3",
    weight: 0.45,
  },
  {
    label: "Carne 4",
    id: "carne4",
    name: "carne4",
    weight: 0.9,
  },
];
const vegetais = [
  {
    label: "Vegetal 1",
    id: "vegetal1",
    name: "vegetal1",
    weight: 0.4,
  },
  {
    label: "Vegetal 2",
    id: "vegetal2",
    name: "vegetal2",
    weight: 1,
  },
  {
    label: "Vegetal 3",
    id: "vegetal3",
    name: "vegetal3",
    weight: 1,
  },
  {
    label: "Vegetal 4",
    id: "vegetal4",
    name: "vegetal4",
    weight: 1,
  },
];

function createInputs(param) {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = param.id;
  input.name = param.name;
  input.className = "opcoes";

  const label = document.createElement("label");
  label.htmlFor = param.id;
  label.textContent = param.label;

  const container = document.createElement("div");
  container.className = "opcoes";
  container.appendChild(input);
  container.appendChild(label);

  selecao.appendChild(container);
}

carnes.forEach((carne) => createInputs(carne));

document.addEventListener("click", function (params) {
  const botao = params.target.id;

  switch (botao) {
    case "churrasco-de-carnes":
      fundo.style.backgroundColor = "#F65854";
      btnCalcular.style.backgroundColor = "#F65854";

      selecao.innerHTML = "";

      carnes.forEach((carne) => createInputs(carne));

      tipoDeProteina = "carne";

      break;
    case "churrasco-vegetariano":
      fundo.style.backgroundColor = "#54f65f";
      btnCalcular.style.backgroundColor = "#54f65f";

      selecao.innerHTML = "";

      vegetais.forEach((vegetal) => createInputs(vegetal));

      tipoDeProteina = "vegetal";

      break;

    default:
      break;
  }
});

function calculoDePesoDasProteinas() {
  const selecionados = [];

  document.querySelectorAll("input.opcoes").forEach((input) => {
    if (input.checked) {
      if (tipoDeProteina === "carne") {
        const carne = carnes.find(({ id }) => id === input.id);
        selecionados.push(carne.weight);
      }
      if (tipoDeProteina === "vegetal") {
        const vegetal = vegetais.find(({ id }) => id === input.id);
        selecionados.push(vegetal.weight);
      }
    }
  });

  return selecionados.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

function calculoDePessoas() {
  const qtoHomens = document.querySelector("input#quantidade-homem").value;
  const qtoMulheres = document.querySelector("input#quantidade-mulher").value;
  const qtoCriancas = document.querySelector("input#quantidade-crianca").value;

  return (
    Number(qtoHomens) + Number(qtoMulheres) * 0.75 + Number(qtoCriancas) * 0.67
  );
}

function butao() {
  const pesoDasProteinas = calculoDePesoDasProteinas();
  const totalDePessoas = calculoDePessoas();

  const resultado = 500 * pesoDasProteinas * totalDePessoas;

  const resultadoFinal = document.getElementById("resultadoFinal");
  resultadoFinal.innerHTML = resultado.toFixed(0) + " g";
}
