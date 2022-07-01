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
    <li>
        <a href="#try">Try cacth</a>
    </li>
    <li>
        <a href="#special-function">Funções especiais</a>
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



## Asscrono

- Dá para usar o encadeamento mesmo usando o await, mas suja mais o código


## <a href="https://github.com/Dayvid-San/super_JS/blob/main/try_catch.js" name="try">Try e Catch</a>
O try-catch funciona de maneira parecida com o then catch. Tu coloca o que acha que pode dar erro dentro do **try**, caso ocorra realmente um erro, exibimos a mensagem através do **cacth**

````js
const main = () => {
    try {
        codigo
    }
    catch (error) {
        console.error(`deu ruim! Veja aí => \n"${error}"`)
    }
    finally {
        console.info('Este valor sempre será mostrado')
        console.count('teste')
    }
}
````
Para o resto do código continuar, você pode usar o **finally**
<br>
Quando temos um try-catch que esteja dentro de uma função, nós lançamos o error que estiver nela através do **throw** para o catch acima, assim rastreando a origem do erro.<br>
Também podemos forçar um erro lançando através do throw. Exemplo:

````js
try {
    if (valor) {
        // Aqui está forçanodo/lançando o error
        throw new Error("Deu erro no valor")
    }
}
catch (error) {
    console.error(error);
    throw error  
}
````

## <a href="https://github.com/Dayvid-San/super_JS/blob/main/nodePython.js" name="python">Python com NodeJS</a>


## <div name="special-function">Funções especiais</div>
Boas funções para guardar no arcenal. <br> <a href="https://imasters.com.br/front-end/7-funcoes-essenciais-em-javascript">Fonte</a>
### Debounce
- Desempenho impulsonado por eventos
A função debounce não permitirá que um callback seja usado mais de uma vez por um determinado período de tempo. Isso é especialmente importante quando a atribuição de uma função de callback para eventos é utilizada com uma frequência de disparo.
````js
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
````

### Poll
- Verificação do estado em intervalos
- Util caso o evento não exista

````js
function poll(fn, callback, errback, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    (function p() {
            // If the condition is met, we're done! 
            if(fn()) {
                callback();
            }
            // If the condition isn't met but the timeout hasn't elapsed, go again
            else if (Number(new Date()) < endTime) {
                setTimeout(p, interval);
            }
            // Didn't match and too much time, reject!
            else {
                errback(new Error('timed out for ' + fn + ': ' + arguments));
            }
    })();
}
````

### Once
Garante que uma determinada função só pode ser chamada uma vez, evitanto inicialização duplicada, além de fornecer o recurso rapidamente.
````js
function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}
````

### getAbsoluteUrl
- Obter URL absoluta
- Não funciona se não fornecer argumentos necessários
O elemento “burn” do href cria um objeto com a URL, fornecendo uma URL absoluta no retorno.
````js
var getAbsoluteUrl = (function() {
	var a;

	return function(url) {
		if(!a) a = document.createElement('a');
		a.href = url;

		return a.href;
	};
})();
````


### isNative
Saber se a função é nativa
````js
;(function() {

    // Used to resolve the internal `[[Class]]` of values
    var toString = Object.prototype.toString;
    
    // Used to resolve the decompiled source of functions
    var fnToString = Function.prototype.toString;
    
    // Used to detect host constructors (Safari > 4; really typed array specific)
    var reHostCtor = /^\[object .+?Constructor\]$/;
  
    // Compile a regexp using a common native method as a template.
    // We chose `Object#toString` because there's a good chance it is not being mucked with.
    var reNative = RegExp('^' +
      // Coerce `Object#toString` to a string
      String(toString)
      // Escape any special regexp characters
      .replace(/[.*+?^${}()|[\]\/\\]/g, '\\amp;')
      // Replace mentions of `toString` with `.*?` to keep the template generic.
      // Replace thing like `for ...` to support environments like Rhino which add extra info
      // such as method arity.
      .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '#039')
    );
    
    function isNative(value) {
      var type = typeof value;
      return type == 'function'
        // Use `Function#toString` to bypass the value's own `toString` method
        // and avoid being faked out.
        ? reNative.test(fnToString.call(value))
        // Fallback to a host object check because some environments will represent
        // things like typed arrays as DOM methods which may not conform to the
        // normal native pattern.
        : (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
    }
    
    // export however you want
    module.exports = isNative;
  }());
````
## MatchesSelector
- Valida se um elemento é de um determinado jogo de seletores
````js
function matchesSelector(el, selector) {
	var p = Element.prototype;
	var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
		return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
	};
	return f.call(el, selector);
}
````
