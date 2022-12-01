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
        <div class="buttons-info">
            <div class="main-info-localidade">
            <iframe src="
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58883.415215567555!2d-47.66990739603189!3d-22.72030638675438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631c14f4c9d3b%3A0x270ec30013dc341c!2sPiracicaba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1669810142244!5m2!1spt-BR!2sbr
" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
            <h2>Localidade</h2>
            <p>Piracicaba SP  13400</p>
            </div>
        <div>
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