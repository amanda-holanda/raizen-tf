const info = () => {
    const container = document.createElement('section');
    container.setAttribute("class","info");
    const template = `
        <div class="header-info">
            <div> 
            <img src="../../img/logobandeirinha.png" class="bandeirinha">
            </div>
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

    `

    container.innerHTML = template;
    const fazendaInfo = container.querySelector('.faz-info');
    const localidadeInfo = container.querySelector('.local-info');
    const certificacoesInfo = container.querySelector('.certfic-info');
    const curiosidadesInfo = container.querySelector('.curios-info');

    fazendaInfo.addEventListener('click', fazendaTemplate)
    localidadeInfo.addEventListener('click', localidadeTemplate)
    certificacoesInfo.addEventListener('click', certificacoesTemplate)
    curiosidadesInfo.addEventListener('click', curiosidadesTemplate)

    function fazendaTemplate (){
        window.location.hash = '#fazenda';
    }

    function localidadeTemplate (){
        window.location.hash = '#localidade';
    }

    function certificacoesTemplate (){
        window.location.hash = '#certificacoes';
    }

    function curiosidadesTemplate (){
        window.location.hash = '#curiosidades';
    }

    return container;
}

export default info;