import dataSmallClients from "../../data/dataSmallClients.js";

const info = () => {
    const container = document.createElement('div');
    const template = `
        <h1>Info</h1>
        <section class="smallclients-infos" id="smallClientsInfosContainer"></section>  
    
    `

    container.innerHTML = template;

    const infos = dataSmallClients.infos;

    function displaySmallClientsInfos(infos) {
         const arraySmallClientsInfos = infos.map((item) => {
            const template = `
            <div class="tabela-info-clients">   
                <ul>                       
                <li>Sustentabilidade: ${item.sustentabilidade}</li>           
                </ul>
            </div>
            `;
            return template;
        });
        return arraySmallClientsInfos.join("");
    }
    container.querySelector('#smallClientsInfosContainer').innerHTML = displaySmallClientsInfos(infos);

    return container;
}


export default info;