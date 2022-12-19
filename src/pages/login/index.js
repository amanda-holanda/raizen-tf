import { loginEmailPassword } from '../../lib/index.js';

const login = () => {
  const container = document.createElement('div');
  container.classList.add('wrapper-login');
  const template = `
        <header class="header-login">
          
          <img class="logo-login" src="img/raizen-logo.png" alt="raizen logo"/>
          
          <a class="link-voltar-login" href="">
            <img class="voltar-login" src="img/voltar.png" alt="voltar"/>
          </a>
        </header>    
        <h2 class="title-login">Área de uso interno</h2>    
        <form class="form-login">
            <label class="label-login" for="login">Login
                <input class="input-login" type="email" id="cxEmail"></input>
            </label>
            <label class="label-login" for="password">Senha
                <input class="input-login" type="password" id="cxPassword"></input>
            </label>
            <button class="btn-login" type="submit" id="btnEntrar">Entrar</button>            
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

