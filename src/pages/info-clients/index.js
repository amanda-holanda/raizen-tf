import dataSmallClients from "../../data/dataSmallClients.js";

const info = () => {
    const container = document.createElement('section');
    container.setAttribute("class","info");
    const template = `
        <div class="header-info">
            <!--<img src="../../img/logobandeirinha.png">-->
            <h1>Açúcar</h1>
        </div>
        <div class="subtitle-info">
            <h2>Conheça a origem desse produto</h2>
        </div>
        <div class="buttons-info">
            <button class="faz-info">Fazenda</button>
            <button class="local-info">Localidade</button>
            <button class="certfic-info">Certificações</button>
            <button class="curios-info">Curiosidades</button>
        <div>

        <section class="smallclients-infos" id="smallClientsInfosContainer"></section>  
   
    
    `

    container.innerHTML = template;
    const fazendaInfo = container.querySelector('.faz-info');

    fazendaInfo.addEventListener('click', fazendaTemplate)

    function fazendaTemplate (){
        console.log("foii")
        window.location.hash = '#fazenda';
    }
    const infos = dataSmallClients.infos;

    function displaySmallClientsInfos(infos) {
         const arraySmallClientsInfos = infos.map((item) => {
            const template = `
            <div class="tabela-info-clients">   
                <ul>                       
                <!--<li>Sustentabilidade: ${item.sustentabilidade}</li>-->              
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