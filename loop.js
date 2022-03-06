const lista = ['RJ', 'SP', 'SE'];



for (estado of lista){
    console.log(estado + ' é um estado brasileiro')
}


const toUP = (frase) => {

    for(let s of frase){
        console.log(s.toUpperCase());

    }
}

const o = 'uma frase qualquer'

console.log(toUP(o))
console.log(o.toUpperCase())