class Dev {
    constructor(nome, idade, mainProgrLang, tipoDev){
        this.nome = nome;
        this.idade = idade;
        this.mainProgrLang = mainProgrLang;
        this.tipoDev = tipoDev
    }

    saudacao(){
        console.log(`Olá! Sou um Dev ${this.tipoDev}. Trabalho principalmente com ${this.mainProgrLang} e me chamo ${this.nome}\n\n`)
    }
}


class Frontend extends Dev {
    constructor(nome, idade, mainProgrLang, tipoDev ,framework){
        super(nome, idade, mainProgrLang, tipoDev)
        this.framework = framework
    }

    
}

class Backend extends Dev {
    constructor(nome, idade, mainProgrLang, tipoDev ,bancodedados){
        super(nome, idade, mainProgrLang, tipoDev)
        this.bancodedados = bancodedados;
    }

   
}

const dayvid = new Backend('Dayvid', 21, 'Javascript', 'Back-end', 'MongoDB')
const diogo = new Frontend('Diogo', 23, 'Javascript', 'Front-end', 'ReactJS')



console.log(dayvid)
dayvid.saudacao()
console.log(diogo)
diogo.saudacao()