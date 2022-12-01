import home from './pages/home/index.js'
import info from './pages/info-clients/index.js';
import login from './pages/login/index.js';
import tabela from './pages/tabela-inter/index.js';
import fazenda from './pages/info-clients/fazenda.js';
import localidade from './pages/info-clients/localidade.js';
import certificacoes from './pages/info-clients/certificacoes.js';
import curiosidades from './pages/info-clients/curiosidades.js';

const main = document.querySelector('#root');

const changeHash = () => {
  switch (window.location.hash) {
    case '':
      main.appendChild(home());
      break;
    case '#home':
      main.appendChild(home());
      break;
    case '#info':
      main.appendChild(info());
      break;
    case '#login':
        main.appendChild(login());
        break;
    case '#tabela':
      main.appendChild(tabela());
      break; 
    case '#fazenda':
      main.appendChild(fazenda());
      break;
    case '#localidade':
      main.appendChild(localidade());
      break;
    case '#certificacoes':
      main.appendChild(certificacoes());
      break;
      case '#curiosidades':
      main.appendChild(curiosidades());
      break;
    default: main.appendChild(home());
  }
};

const executeHashChange = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    changeHash();
  });
};

window.addEventListener('load', () => {
  changeHash();
  executeHashChange();

});

