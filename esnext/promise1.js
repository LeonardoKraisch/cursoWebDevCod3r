let a = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3) // Promise recebe apenas um parâmetro por vez.
})

a.then(function(valor) {
    console.log(valor)
})

let b = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    }) // um meio de passar mais valores é através de um objeto.
})

b.then(function(valor) {
    console.log(valor)
})

let c = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']) 
})

c.then(valor => valor[0]) // deixa o código mais enxuto por não exigir callbacks
 .then(primeiro => primeiro[0])
 .then(letra => letra.toLowerCase())
 .then(console.log)