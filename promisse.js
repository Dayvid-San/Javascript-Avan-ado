const umaPromessa = new Promise((resolve, reject) => {
    let soma = 1 + 3
    if (soma === 2*2) {
        resolve('tudo certo')
    }
    else {
        reject('deu ruim')
    }
})

console.log('esperando promisse')


// tratando a promise
umaPromessa.then((resultado) => { 
    console.log(`Valor do then: ${resultado}`)
})
.catch((err) => {
    console.log(`Valor de catch: ${err}`)
})
.finally(() => {
    console.log(`Independente do resultado eu sempre estarei aqui`)
})


console.log('Isso vai ser logado antes da promisse')