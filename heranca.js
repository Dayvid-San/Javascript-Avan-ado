class Dev {
    constructor(nome, idade, mainProgrLang){
        this.nome = nome;
        this.idade = idade;
        this.mainProgrLang = mainProgrLang;
    }

    saudacao(){
        console.log(`Olá! Sou um Dev. Trabalho principalmente com ${this.mainProgrLang} e me chamo ${this.nome}\n\n`)
    }
}


class Frontend extends Dev {
    constructor(nome, idade, mainProgrLang, framework){
        super()
        this.nome = nome;
        this.idade = idade;
        this.mainProgrLang = mainProgrLang;
        this.framework = framework
    }

    saudacao(){
        console.log(`Olá! Meu nome é ${this.nome}, tenho ${this.idade}. Sou um dev Front-End. Trabalho principalmente com ${this.mainProgrLang} e meu principal framework é o${this.framework}\n\n`)
    }
}

class Backend extends Dev {
    constructor(nome, idade, mainProgrLang, bancodedados){
        super()
        this.nome = nome;
        this.idade = idade;
        this.mainProgrLang = mainProgrLang;
        this.bancodedados = bancodedados;
    }

    saudacao(){
        console.log(`Olá! Meu nome é ${this.nome}, tenho ${this.idade}. Sou um dev Back-End. Trabalho principalmente com ${this.mainProgrLang} e meu principal banco de dados é o ${this.bancodedados}\n\n`)
    }
}

const dayvid = new Backend('Dayvid', 21, 'Javascript', 'MongoDB')
const diogo = new Frontend('Diogo', 23, 'Javascript', 'ReactJS')

dayvid.saudacao()
diogo.saudacao()