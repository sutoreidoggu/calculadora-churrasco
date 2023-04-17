console.log('ola mundo')

const fundo = document.querySelector('body')
const btnCalcular = document.querySelector('button#calcular')
const selecao = document.querySelector('div.selecao')
const resultadoFinal = document.getElementById('resultadoFinal')

const carnes = [
    {
        label: 'Carne 1',
        id: "carne1",
        class: "carne",
        name: "carne1",
        weight: 1
    },
    {
        label: 'Carne 2',
        id: "carne2",
        class: "carne",
        name: "carne2",
        weight: 1
    },
    {
        label: 'Carne 3',
        id: "carne3",
        class: "carne",
        name: "carne3",
        weight: 1
    },
    {
        label: 'Carne 4',
        id: "carne4",
        class: "carne",
        name: "carne4",
        weight: 1
    }
]
const vegetais = [
    {
        label: 'Vegetal 1',
        id: "vegetal1",
        class: "vegetal",
        name: "vegetal1",
        weight: 1
    },
    {
        label: 'Vegetal 2',
        id: "vegetal2",
        class: "vegetal",
        name: "vegetal2",
        weight: 1
    },
    {
        label: 'Vegetal 3',
        id: "vegetal3",
        class: "vegetal",
        name: "vegetal3",
        weight: 1
    },
    {
        label: 'Vegetal 4',
        id: "vegetal4",
        class: "vegetal",
        name: "vegetal4",
        weight: 1
    }
]

function createInputs(param) {
    const input = document.createElement('input')
    input.type = 'checkbox'
    input.id = param.id
    input.name = param.name
    input.className = param.class
    input.weight = param.weight

    const label = document.createElement('label')
    label.htmlFor = param.id
    label.textContent = param.label

    const container = document.createElement('div')
    container.className = param.class
    container.appendChild(input)
    container.appendChild(label)

    selecao.appendChild(container)
}

carnes.forEach((carne) => createInputs(carne))

document.addEventListener('click', function (params) {
    const botao = params.target.id

  switch (botao) {
    case 'churrasco-de-carnes':
        fundo.style.backgroundColor = '#F65854'
        btnCalcular.style.backgroundColor = '#F65854'

        selecao.innerHTML = ''

        carnes.forEach((carne) => createInputs(carne))

        break;
    case 'churrasco-vegetariano':
        fundo.style.backgroundColor = '#54f65f'
        btnCalcular.style.backgroundColor = '#54f65f'

        selecao.innerHTML = ''

        vegetais.forEach((vegetal) => createInputs(vegetal))
        break;
  
    default:
        break;
  }
})

function butao() {
    let selecionados = []

    document.querySelectorAll('input.carne').forEach((input) => {
        if (input.checked) {
            selecionados.push(input.weight);
        } 
    })

    document.querySelectorAll('input.vegetal').forEach((input) => {
        if (input.checked) {
            selecionados.push(input.weight);
        }
    })

    let peso = selecionados.reduce((a, b) => {
        return a + b;
    })

    let resultado = 500 / peso 
    
    console.log(resultado);
    resultadoFinal.innerHTML = resultado.toFixed(0) + " g"
    
}