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
                
        <div>

        <section class="smallclients-infos" id="smallClientsInfosContainer"></section>  
   
    
    `

    container.innerHTML = template;
   
    return container;
}
export default info;