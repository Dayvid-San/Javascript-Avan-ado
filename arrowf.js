// expressão de função
const minhaF = function() {
    console.log('expressão')
}


// declaração de função
function minhafun(){
    console.log('declarativa')
}


// arrow function
const funcao = () => console.log("Uma expressão de função")

minhaF()
minhafun()
funcao()



// global
const thisGlobal = () =>{
    console.log(this)
}

thisGlobal()


// função encapsulada
const obj = {
    thisLocal: function () {

        // colocando dentro de um IIFE: Uma função que é rápidamente ativada
        const thisLocal = () => console.log(this)()
        console.log(thisLocal)


    }
}

obj.thisLocal()