const animal = {
    tipo: 'animal',
    som:'Um som de animal',
    emitirSom: function(){
        console.log(this.som)
    },

}


const gato = {
    tipo: 'gato',
    som: 'miau!'
}


// É como dissesse que gato é a classe filho de animal
Object.setPrototypeOf(gato, animal)
gato.emitirSom()


const gatoRaivoso = {
    tipo: 'gatoRaivoso',
    miarForte: function(){
        console.log(this.som.toUpperCase() + ', MIAAAAUUUUUUUUUUUUUUUUUUUUUUUUUU!!!!!!!!!!!!!!')
    }
}
Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte()