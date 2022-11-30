
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

        </section>  
    
    `
    container.innerHTML = template;

    const infos = raizen.produtos;    
    const cnpjInput = container.querySelector('#cnpjInput');
    const searchBtn = container.querySelector('#searchBtn');
    const bigClientsInfosContainer = container.querySelector('#bigClientsInfosContainer');
    const firstDate = container.querySelector('#firstDate');
     
    const dateData = infos.periodo;

    function displayBigClientsInfos(infos) {
        const arrayBigClientsInfos = infos.map((item) => {
            const template = `  
                <tr>                                     
                    <td>${item.cnpj}</td>
                    <td>${item.lote}</td>
                    <td>${item.fazenda.numero}</td>
                    <td>${item.zona}</td>
                    <td>${item.talhao}</td>
                    <td>${item.propriedade}</td>
                </tr>                              
            `;
            return template;
        });           

        return arrayBigClientsInfos.join("");
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

        bigClientsInfosContainer.innerHTML = displayBigClientsInfos(dataFilter);
    });
    
    
    /*function dateFilter(dateData, firstDate){
        return dateData >= firstDate;
    }

    console.log(dateFilter(dateData));*/

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


// - [X] - organização dos dados na tela: em tabela
// - [X] - home : filtro do cnpj
// - [] - filtro por periodos

