'use strict'
const GI = {
  createElement(tag, atributes) {
    let element = document
    return document.createElement(tag)
  }
}


const to_do = [
  'Alimentar al perro',
  'Estudiar para prueba escrita',
  'Pagar taxes',
  'Pasear a perro',
  'Comprar entradas para el cine',
]

document.getElementById('to-do').innerHTML = to_do.map((item, index) => `<li>
  <label id="to_do${index}">${item}</label>
  <input type="checkbox" name="to_do${index}" onchange="textoEstilo(event)" />
</li>`).join('')

function textoEstilo(e) {
  document.getElementById(e.target.name).classList.toggle('estilo-todo')
}

