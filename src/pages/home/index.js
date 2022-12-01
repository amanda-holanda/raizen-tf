import raizen from '../../data/raizen.js';

const home = () => {
    const container = document.createElement('div');
    container.classList.add('wrapper-home');
    const template = `       
        <header class="header-home">
            <a href="" class="links-home">
                <img class="logo-home" src="../../img/raizenlogoroxo.png" alt="raizen logo"/>
            </a>               
            <a href="#info" class="links-home">
                <span class="material-symbols-outlined">
                    person
                </span>CLIENTE FINAL
            </a>      
            <a href="#login" class="links-home">
                <span class="material-symbols-outlined">
                    eco
                </span>LOGIN INTERNO
            </a>
        </header>         
        <img class="home-img" src="../../img/homeimg.png" alt="saco de açucar"/>        
        <form class="home-form">
            <p class="description">
                Nessa plataforma, você pode acessar mais informações sobre nosso <b>produto</b>, sua <b>origem</b>, <b>informações geográficas</b> e <b>atributos de sustentabilidade</b>.
            </p>
            <label class="label-cnpj" for="periodo">CNPJ da sua empresa:</label>
            <div class="cnpj-container">   
                <input id="cnpjInput" class="input-cnpj" name="cnpj" type="text" placeholder=" 00.000.000/0001-00" />         
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
                     <th>Período</th>
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
            <table class="tabela-home">
            <tr class="tabela-title">
                <tr>                                     
                    <td class="td-cnpj">${item.cnpj}</td>
                    <td class="td-periodo">${item.periodo}</td>
                    <td class="td-lote">${item.lote}</td>
                    <td class="td-numero">${item.fazenda.numero}</td>
                    <td class="td-zona">${item.zona}</td>
                    <td class="td-talhao">${item.talhao}</td>
                    <td class="td-propriedade">${item.propriedade}</td>
                </tr>
            </table>                              
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