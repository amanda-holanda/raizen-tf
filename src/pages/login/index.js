const login = () => {
    const container = document.createElement('div');
    const template = `
        <h1>Login</h1>
        <form>
            <label>Email:
                <input type="email"></input>
            </label>
            <label>Senha:
                <input type="password"></input>
            </label>
            <a href="#tabela">Entrar</a>            
        </form>    
    `

    container.innerHTML = template;
    return container;
}

export default login;

