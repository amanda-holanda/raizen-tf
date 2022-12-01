import raizen from '../../data/raizen.js';

const home = () => {
    const container = document.createElement('div');
    container.classList.add('wrapper-home');
    const template = `       
        <header class="header-home">
            <a href="" class="links-home">
                <img class="logo-home" src="../../img/raizen-logo.png" alt="raizen logo"/>
            </a>            
            <a href="#info" class="links-home">Informações</a>
            <a href="#login" class="links-home">Login Interno</a>
        </header>         
        <img class="home-img" src="" />        
        <form class="home-form">
            <label class="label-cnpj" for="periodo">CNPJ da sua empresa:</label>
            <div class="cnpj-container">   
                <input id="cnpjInput" class="input-cnpj" name="cnpj" type="text" placeholder="00.000.000/0001-00" />         
                <button id="searchBtn" class="btn-buscar-cnpj">buscar</button>
            
            </div>
            <div class="periodo-container">
                <label for="periodo">Período:
                    <input type="date" name="periodoDe" id="firstDate" />
                </label>                
            </div>
        </form>
        
        <section class="bigclients-infos">
            <table class="tabela-home">
                <tr>
                    <th>CNPJ</th>
                    <th>Lote</th>
                    <th>Fazenda</th>
                    <th>Zona</th>
                    <th>Talhão</th>  
                    <th>Propriedade</th>
                </tr>                     
            </table> 
            <table id="bigClientsInfosContainer"></table>

            <div class="w3-container">
  
    <div id="id01" class="w3-modal">
      <div class="w3-modal-content w3-animate-bottom">
        <div class="w3-container">
          <span onclick="document.getElementById('id01').style.display='none'"
            class="w3-button w3-display-topright">&times;</span>
            <div id="info-modal"></div>
        </div>
      </div>
    </div>
  </div> 

        </section>  
    
    `
    container.innerHTML = template;

    const infos = raizen.produtos;    
    const cnpjInput = container.querySelector('#cnpjInput');
    const searchBtn = container.querySelector('#searchBtn');
    const bigClientsInfosContainer = container.querySelector('#bigClientsInfosContainer');
    const firstDate = container.querySelector('#firstDate');
    const dateData = infos.periodo;
    const infoModal = container.querySelector('#info-modal');

    function displayBigClientsInfos(infos) {
        const arrayBigClientsInfos = infos.map((item) => {
            const template = `  
                <tr>                                     
                    <td>${item.cnpj}</td>
                    <td>${item.lote}</td>
                   <td><button  id="btn-modal" onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-white">${item.fazenda.numero}</button></td>
                    <td>${item.zona}</td>
                    <td>${item.talhao}</td>
                    <td>${item.propriedade}</td>
                </tr>                              
            `;
            return template;
        });  
       
        return arrayBigClientsInfos.join("");
    }    
    
    function displayModal(infos) {
        const arrayModalElement = infos.map((item) => {
            const template = `  
               <h1>Certificações: ${item.fazenda.atributos.certificacoes}</h1>
                <p>Atributos: ${item.fazenda.atributos.praticasEsg}</p>     
                <p>Localização geográfica: ${item.localizacaoGeografica}</p>     
                                      
            `;
            return template;
        });  
       
        return arrayModalElement.join("");
    }    
  

    function filterData(infos, cnpj, cnpjInput) {
        console.log(infos, cnpj, cnpjInput)
        const filterCnpj = infos.filter(obj => {
            return obj[cnpj] === cnpjInput;
        });
        console.log(filterCnpj)

        return filterCnpj;
    }

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const dataFilter = filterData(infos, 'cnpj', cnpjInput.value);

        bigClientsInfosContainer.innerHTML = displayBigClientsInfos
        (dataFilter);

        const btnModal = container.querySelector('#btn-modal');

        btnModal.addEventListener('click',(e) =>{
            infoModal.innerHTML = displayModal(dataFilter);
           
        })

    });
    
    
    firstDate.addEventListener('change', () => {
        console.log(firstDate.value)
        const dataFilter = filterData(infos, 'cnpj', cnpjInput.value);
        const dataResult = filterData(dataFilter, 'periodo', firstDate.value);
        console.log(dataResult)

        bigClientsInfosContainer.innerHTML = displayBigClientsInfos(dataResult);
    });
    
    return container;
}

export default home;

