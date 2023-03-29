console.log('ola mundo')

const fundo = document.querySelector('body')
const btnCalcular = document.querySelector('button#calcular')
const selecao = document.querySelector('div.selecao')

const carnes = [
    {
        label: 'Carne 1',
        id: "carne1",
        class: "carne",
        name: "carne1",
    },
    {
        label: 'Carne 2',
        id: "carne2",
        class: "carne",
        name: "carne2"
    },
    {
        label: 'Carne 3',
        id: "carne3",
        class: "carne",
        name: "carne3"
    },
    {
        label: 'Carne 4',
        id: "carne4",
        class: "carne",
        name: "carne4"
    }
]
const vegetais = [
    {
        label: 'Vegetal 1',
        id: "vegetal1",
        class: "vegetal",
        name: "vegetal1"
    },
    {
        label: 'Vegetal 2',
        id: "vegetal2",
        class: "vegetal",
        name: "vegetal2"
    },
    {
        label: 'Vegetal 3',
        id: "vegetal3",
        class: "vegetal",
        name: "vegetal3"
    },
    {
        label: 'Vegetal 4',
        id: "vegetal4",
        class: "vegetal",
        name: "vegetal4"
    }
]

function createInputs(param) {
    const input = document.createElement('input')
    input.type = 'checkbox'
    input.id = param.id
    input.name = param.name

    const label = document.createElement('label')
    label.htmlFor = param.id
    label.textContent = param.label

    const container = document.createElement('div')
    container.className = param.class
    container.appendChild(input)
    container.appendChild(label)

    selecao.appendChild(container)
}

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