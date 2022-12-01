const info = () => {
    const container = document.createElement('section');
    container.setAttribute("class","info");
    const template = `
        <div class="header-info">
            <img class="img-acucar" src="img/header-açúcar.png" alt="acucar imagem">
            <button class="btn-voltar">Voltar</button>            
        </div>
        <div class="subtitle-info">
            <h2>Conheça a origem desse produto</h2>
        </div>
            <div class="main-info">
                <img class="img-fazenda" src="img/fazenda.png" alt="fazenda">
                <h2>Fazendas Raízen</h2>
                <p>Na Raízen, cada fazenda é registrada com as respectivas subdivisões administrativas, zona e talhão, sendo esta segunda a maior granularidade de uma área cultivável.</p>
                <p>O primeiro processo do cultivo é o preparo de solo, que consiste em operações mecânicas no campo, que realizará a divisão da área (fazenda) em porções menores para auxiliar na administração (fundo, zona e talhão), espelhando o definido no projeto digital (mapa). Neste processo, além da divisão da área são realizados o revolvimento de camadas superficiais do solo e a incorporação de corretivos e fertilizantes, reduzindo a compactação, elevando a permeabilidade e o armazenamento de ar e água no solo. Este processo facilita o crescimento da planta.</p>
            </div>
    `
    container.innerHTML = template;

    const voltar= container.querySelector(".btn-voltar");

    voltar.addEventListener("click", retornar)
    function retornar(){
        window.location.hash="#info"
    }

    return container;
}
export default info;