const home = () => {
    const container = document.createElement('div');
    const template = `        
        
        <h1>Home</h1>
        <form>
            <label for="periodo">CNPJ:</label>
            <input name="cnpj" type="number" />
            <label for="periodo">Periodo:</label>
            <input name="periodo" type="number" />    
            <button type="submit">Pesquisar</button>
        </form>       
        <section id="bigclients-infos"></section>  
    
    `

    container.innerHTML = template;
    return container;
}

export default home;

// quando o cliente grande colocar o cnpj e o periodo, ele vai acessar um banco de dados com 
// as informações daquela empresa e ver ela filtrada ali 

// - [X] - ter acesso ao firestore
// - [X] - configuração do firestore
// - [] - criar no db firestore um objeto com o cnpj, periodo e outras infos daquele empresa
// - [] - quando apertar no botao pesquisar ele filtra 
