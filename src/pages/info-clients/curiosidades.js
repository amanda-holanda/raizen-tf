const info = () => {
    const container = document.createElement('section');
    container.setAttribute("class","info");
    const template = `
        <div class="header-info">
            <img class="img-acucar" src="img/header-açúcar.png" alt="acucar imagem">            
        </div>
        <div class="subtitle-info">
            <h2>Conheça a origem desse produto</h2>
            <button class="btn-voltar">Voltar</button>
        </div>
            <div class="main-info-curiosidades">
                <h2>Curiosidades</h2>
                <p>A cana-de-açúcar é, sem dúvida, um dos mais antigos cultivos do planeta, pois sua descoberta remonta a 9 mil anos. A planta seria originária da Nova Guiné (ao norte da Austrália).</p>

                <p>A cana-de-açúcar é uma “grama gigante” da família das gramíneas. Apenas os colmos (caules) são colhidos, e não as folhas. Os colmos são principalmente compostos por água, açúcar e fibras, que chamamos de bagaço.</p>
                
                <p>Uma cana-de-açúcar é composta por 5 a 20 colmos com 3 a 6 metros de altura e 3 a 5 centímetros de diâmetro.</p>
                
                <p>Processamos cerca de 300 mil hectares de cana-de-açúcar, sendo a plantação e a colheita totalmente mecanizadas.
                </p>
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