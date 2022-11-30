import database from '../../data/raizen.js';

const tabela = () => {
    const container = document.createElement('div');
    const template = `
        <form>
            <select class="select-unidade" name="unidade" id="unidade">
            <option value="unidade">unidade</option>
            <option value="COPI">COPI</option>
            <option value="XYZ">XYZ</option>
            </select>
            <select class="select-fazenda" name="fazenda" id="fazenda">
                <option value="fazenda">fazenda</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>           
            <select class="select-certificacoes" name="certificacoes" id="certificacoes">
                <option value="ELO">ELO</option>
                <option value="Renovabio">Renovabio</option>
                <option value="Bonsucro">Bonsucro</option>
                <option value="ELO">ELO</option>
                <option value="ISCC">ISCC</option>
            </select>
        </form>    
    `

    container.innerHTML = template;



const infos = database.produtos;
let filterResult = infos;

function printInfos(infos) {
        
        const raizenInfos = infos.map((item) => {
            return `
            <div class="tabela-internos">
                <table>
                    <tr>
                        <th>Unidade</th>
                        <th>Fazenda</th>
                        <th>Certificações</th>
                        <th>Práticas ESG</th>
                    </tr>
                    <tr>
                        <td>${item.unidade}</td>
                        <td>${item.fazenda.numero}</td>
                        <td>${item.fazenda.atributos.certificacoes}</td>
                        <td>${item.fazenda.atributos.praticasEsg}</td>
                    </tr>
                </table>      
            </div>    
            `;
        
        });
    
     return container.innerHTML += raizenInfos.join("");
}



// printInfos(infos)
    const filterData = (data, criteria, value) => 
    data.filter(obj => {
        return obj[criteria] === value
    });

    const selectUnidade = container.querySelector(".select-unidade");

    function printUnidadeFilter() {
     filterResult = filterData (database.produtos, "unidade", selectUnidade.value);
     return printInfos(filterResult); 
    }

     selectUnidade.addEventListener("change", printUnidadeFilter);     

  return container;
}

export default tabela;






