const Dev = function(nome, idade, mainProgrLang, tipoDev) {
   
    this.nome = nome;
    this.idade = idade;
    this.mainProgrLang = mainProgrLang;
    this.tipoDev = tipoDev

    this.saudacao = function(){
        console.log(`Olá! Sou um Dev ${this.tipoDev}. Trabalho principalmente com ${this.mainProgrLang} e me chamo ${this.nome}\n\n`)
    }
}


const Frontend = function(nome, idade, mainProgrLang ,framework) {

    const newDev = new Dev(nome, idade, mainProgrLang,'Front-end')
    newDev.framework = framework
    Object.assign(this, newDev)   
    
}

const Backend = function(nome, idade, mainProgrLang,bancodedados) {
 
    const newDev = new Dev(nome, idade, mainProgrLang, "Back-end")
    newDev.bancodedados = bancodedados;
    Object.assign(this, newDev)  
        
}

const dayvid = new Backend('Dayvid', 21, 'Javascript', 'MongoDB')
const diogo = new Frontend('Diogo', 23, 'Javascript', 'ReactJS')



console.log(dayvid)
dayvid.saudacao()
console.log(diogo)
diogo.saudacao()