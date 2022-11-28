const info = () => {
    const container = document.createElement('div');
    const template = `
        <h1>Info</h1>
    
    `

    container.innerHTML = template;
    return container;
}

export default info;