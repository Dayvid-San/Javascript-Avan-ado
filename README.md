# super_JS
Caderno com anotações de aulas e de pesquisas sobre a linguagem Javascript ECMA6

### Para se localizar
<ul>
    <li>
        <a href="#prototypes">Prototypes</a>
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

Pega o primeiro objeto (this) e junta com o segundo (newDev), assim simulando um objeto, mas analizando o proto, você vai ver que ele está apontando para o construtor (Object), como vemos no arquivo <a href="https://github.com/Dayvid-San/super_JS/blob/main/herancaSemClasses.js">Herança sem classes</a>. Para resolver isso, podemos usar o *setPrototypeoF*

#### setPrototypeoF
````js
setPrototypeoF(this, newDev)
````