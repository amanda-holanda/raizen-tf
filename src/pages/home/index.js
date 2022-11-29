const home = () => {
    const container = document.createElement('div');
    container.classList.add('wrapper-home');
    const template = `       
        <h1>Home/Grandes clientes</h1> 
        <img class="home-img" src="" />
        <form class="home-form">
            <label for="periodo">CNPJ:</label>
            <input name="cnpj" type="text" placeholder="00.000.000/0001-00" />
            <button type="submit">Pesquisar</button>
            <label for="periodo">Periodo:</label>
            <input name="periodo" type="date" />            
        </form>       
        
        <section class="bigclients-infos" id="bigClientsInfos"></section>  
    
    `

    container.innerHTML = template;
    return container;
}

export default home;



// - [] - home : html do principal

// - [] - home : html da spa

// quando o cliente grande colocar o cnpj e o periodo, ele vai acessar um banco de dados com 
// as informações daquela empresa e ver ela filtrada ali 

// - 
// - [] - criar no db firestore um objeto com o cnpj, periodo e outras infos daquele empresa
// - [] - quando apertar no botao pesquisar ele filtra 
