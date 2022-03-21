const cincoMil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('promisse cinco mil resolvida'), 5000)
})
const mil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('promisse mil resolvida'), 5000)
})
const quientos = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('promisse quientos resolvida'), 5000)
})
const cem = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('promisse cem resolvida'), 5000)
})


const resolvedorDePromissesAssicronas = async () => {
    const resultado1 = await cincoMil()
    console.log('Essa')
    
    const resultado2 = await quientos()
    console.log('mensagem') 
    const resultado3 = await cem()
    console.log('se') 
    const resultado4 = await mil()
    console.log('completará\n\n') 

    console.log(`Mensagens: \n${resultado1} \n${resultado2} \n${resultado3} \n${resultado4} `)
}

resolvedorDePromissesAssicronas()