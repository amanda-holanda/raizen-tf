const info = () => {
    const container = document.createElement('section');
    container.setAttribute("class","info");
    const template = `
        <div class="header-info">
            <!--<img src="../../img/logobandeirinha.png">-->
            <h1>Açúcar</h1>
            <button class="btn-voltar">Voltar</button>
        </div>
        <div class="subtitle-info">
            <h2>Conheça a origem desse produto</h2>
        </div>
            <div class="main-info-certificacoes">
                <h2>Certificações</h2>
                <div class="certificacoes-img">
                    <div class= "certific-1">
                        <img src="../../img/certificado_bonsucro.png">
                        <img src="../../img/certificado_renovabio.png">
                    </div>
                    <div class= "certific-2">
                        <img src="../../img/certificado_Elo.png">
                        <img src="../../img/certificado_iscc.png">
                    </div>
                </div>
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