import home from './pages/home/index.js'
import info from './pages/info-clients/index.js';
import login from './pages/login/index.js';
import tabela from './pages/tabela-inter/index.js';

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
