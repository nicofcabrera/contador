let div = document.getElementById('result')
let contador = 0
div.innerHTML = `<p>${contador}</p>`

let restar = document.getElementById('restar')
restar.addEventListener('click', function () {
  contador = contador - 1;
div.innerHTML = `<p>${contador}</p>`
})

let resetear = document.getElementById('reset')
resetear.addEventListener('click', function () {
  contador = 0;
div.innerHTML = `<p>${contador}</p>`
})

let sumando = document.getElementById('sumar')
sumando.addEventListener('click', function () {
  contador = contador + 1;
 div.innerHTML = `<p>${contador}</p>`
})



console.log(contador)