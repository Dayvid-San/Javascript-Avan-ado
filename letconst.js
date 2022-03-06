// o "var" pode ser referenciada do lado de fora
if (true){
    var exposta = 'Exposta'
    let naoExposta = 'Não exposta'
}


console.log(exposta)


// é aconcelhavel manter listas e objetos em uma "const"

const arr = [1, 2, 3];

arr.push(4);

console.log(arr)

arr.pop();

console.log(arr)

// ---------------------------

const obj = {
    a: 1,
    b: 3
};

// adicionando o c
obj.c = 3

console.log(obj)

// removendo o c
delete obj.c

console.log(obj)

