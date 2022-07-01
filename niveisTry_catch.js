const funcao1 = () => {
    console.log('Sou a função')

    try {
        codigo;
    }
    catch (error) {
        console.error(error);
        throw error  // Throw é quem lança o erro para o catch
    }
}



const funcao2 = () => {
    console.log('Sou a função2')

    asdf;
}

const main = () => {
    try {
        funcao1();
        funcao2()
        console.log('passou por aqui')
    } catch (error) {
        console.error(error)
    }
}

main()