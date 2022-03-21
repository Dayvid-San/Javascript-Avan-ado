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




//  promise.all() e promise.race()

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 1 resolvida'), 1000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 2 resolvida'), 500)
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('promise 3 resolvida'), 100)
});

Promise.all([promise1, promise2, promise3])
.then((messages) => {
    console.log(messages)
})
Promise.race([promise1, promise2, promise3])
.then((message) => {
    console.log(message)
})