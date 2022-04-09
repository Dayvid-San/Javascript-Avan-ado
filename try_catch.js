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

main()