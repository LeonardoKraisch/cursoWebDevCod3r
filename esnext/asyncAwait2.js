function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
       [max, min] = [min, max] // destructiring o array
    }
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min) 
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }   
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {

    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))

     }
     return numeros
    } catch(e) {
        if(tentativas > 100) {
            throw "Não deu certo!"
        } else {
            return  gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}
    

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)