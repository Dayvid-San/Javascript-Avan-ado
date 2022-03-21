# super_JS
Caderno com anotações de aulas e de pesquisas sobre a linguagem Javascript ECMA6

### Para se localizar
<ul>
    <li>
        <a href="#prototypes">Prototypes</a>
    </li>
    <li>
        <a href="#promisse">Promisse</a>
    </li>
</ul>



## <a href="https://github.com/Dayvid-San/super_JS/blob/main/prototypes.js" name="prototypes">Prototypes</a> 
É uma tentativa de fazer uma herança usando classe, mas não exatamente igual a herança de classe (Classes em Javascript não existem de verdade).<br>
Javascript é uma linguagem orientada à prototipos e não á classes



### Descrições
#### Assing
````js
Object.assign(this, newDev)
````

Pega o primeiro objeto (this) e junta com o segundo (newDev), assim simulando um objeto, mas analizando o proto, você vai ver que ele está apontando para o construtor (Object), como vemos no arquivo <a href="https://github.com/Dayvid-San/super_JS/blob/main/herancaSemClasses.js">Herança sem classes</a>. Para resolver isso, podemos usar o **setPrototypeoF**

#### setPrototypeoF
````js
setPrototypeoF(this, newDev)
````

## <a href="https://github.com/Dayvid-San/super_JS/blob/main/promisse.js" name="promisse">Promise</a>
Promise é um objeto que vai representar eventual conclusão ou  falha de uma operação assícrona qualquer. A promisse pode estar em PEDING, FULFILLED (ou RESOLVED) ou REJECTED<br>
O objeto promise é instanciado dessa forma:

````js
const umaPromessa = new Promise(()
````

- É opcional usar o **reject**, mas é importante usá-lo para evitar um loop
- O **finally** execultará independente do resultado noo encadeamento


#### Event Loop
Vai ler o codigo uma primeira vez, deixar tudo que não foi resolvid como pendencia, depois vai ler o codigo novamente e vai executar o que ficou pendente.

### promise.all() e promise.race()
Promise é um objeto string que fica pendurado no objeto global que conseguimos acessar metodos disponíveis como o **all()** e o **race**.

````js
Promise.all([promise1, promise2, promise3])
.then((message) => {
    console.log(message)
})

Promise.race([promise1, promise2, promise3])
.then((message) => {
    console.log(message)
})
````

No codigo apresentado, o race() vai mostrar a promise executada primeiro, como que em uma corrida, enquanto que o all() vai mostrar todas as promise executadas numa lista
