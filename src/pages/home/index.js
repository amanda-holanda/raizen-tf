import filterData from '../../data/data.js';
import raizen from '../../data/raizen.js';

const home = () => {
    const container = document.createElement('div');
    container.classList.add('wrapper-home');
    const template = `       
        <h1>Home/Grandes clientes</h1> 
        <img class="home-img" src="" />
        <form class="home-form">
            <label for="periodo">CNPJ:</label>
            <input name="cnpj" type="text" placeholder="00.000.000/0001-00" />
            <button type="submit">BUSCAR</button>
            <select name="periodoDe" id="primeiroPeriodo">
                <option value="10/2022">10/2022</option>
                <option value="11/2022">11/2022</option>
                <option value="12/2022">12/2022</option>
            </select>           
            <select name="periodoA" id="segundoPeriodo">
                <option value="10/2022">10/2022</option>
                <option value="11/2022">11/2022</option>
                <option value="12/2022">12/2022</option>
            </select>
        </form>       
        
        <section class="bigclients-infos" id="bigClientsInfosContainer"></section>  
    
    `
    container.innerHTML = template;

    const infos = raizen.infos;

    function displayBigClientsInfos(infos) {
         const arrayBigClientsInfos = infos.map((item) => {
            const template = `
            <div class="tabela-home">   
                <ul>                       
                <li>Fazenda: ${item.fazenda}</li>               
                </ul>
            </div>
            `;
            return template;
        });
        return arrayBigClientsInfos.join("");
    }
    container.querySelector('#bigClientsInfosContainer').innerHTML = displayBigClientsInfos(infos);
    

    return container;
}

function filterPeriod(filterResult, "periodo", selectPeriod.value) {


}

export default home;



// - [] - home : html do principal

// - [] - home : html da spa

// quando o cliente grande colocar o cnpj e o periodo, ele vai acessar um banco de dados com 
// as informações daquela empresa e ver ela filtrada ali 

// - 
// - [] - criar no db firestore um objeto com o cnpj, periodo e outras infos daquele empresa
// - [] - quando apertar no botao pesquisar ele filtra 
