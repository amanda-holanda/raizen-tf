const tabela = () => {
    const container = document.createElement('div');
    const template = `
        <h1>Tabela</h1>
    
    `

    container.innerHTML = template;
    return container;
}

export default tabela;