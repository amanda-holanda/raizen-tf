import {loginEmailPassword} from '../../lib/index.js';

const login = () => {
  const container = document.createElement('div');
  const template = `
        <h1>Login</h1>
        <form>
            <label>Email:
                <input type="email" id="cxEmail"></input>
            </label>
            <label>Senha:
                <input type="password" id="cxPassword"></input>
            </label>
            <button type="button"  id="btnEntrar">Entrar</button>            
        </form> 
    
    `

  container.innerHTML = template;

  const email = container.querySelector('#cxEmail');
  const password = container.querySelector('#cxPassword');
  const logar = container.querySelector('#btnEntrar');

  logar.addEventListener('click', (e) => {
    e.preventDefault();

    loginEmailPassword(email.value, password.value)
      .then(() => {

        window.location.hash = '#tabela';
      })
      .catch(() => {
        msgErro.innerHTML = 'usário ou senha incorretos';
      });
  });
  return container;
}

export default login;

