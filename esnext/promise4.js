function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
       [max, min] = [min, max] // destructiring o array
    }
    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)    
            resolve(aleatorio)
        }, tempo * 1000);
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4),
        gerarNumerosEntre(1, 60, 0.5),
        gerarNumerosEntre(1, 60, 1),
        gerarNumerosEntre(1, 60, 3),
        gerarNumerosEntre(1, 60, 0.1),
        gerarNumerosEntre(1, 60, 1.5)

    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })
