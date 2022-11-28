const home = () => {
    const container = document.createElement('div');
    const template = `
        <header>
            <a href="">Home</a>
            <a href="#info">Informações</a>
            <a href="#login">Login</a>
        </header>
        <h1>Home</h1>
        
    
    `

    container.innerHTML = template;
    return container;
}

export default home;