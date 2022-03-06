const saudacao = (nome) => alert('Olá ' + nome)

const processEntradaUsuario = (callback) => {
    // O prompt vai mostrar uma janelinha
    const nome = prompt('Digite seu nome: ')
    callback(nome)

}


processEntradaUsuario(saudacao)

// cole no console do navegador

// ------------------------------------------------------


const arr = [1,2,3,5]
const newArr = arr.map(x => x + x)

console.log(newArr)