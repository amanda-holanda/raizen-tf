import { filterData } from '../../data/data.js';
import raizen from '../../data/raizen.js';
import produtos from '../../data/raizen.js';

const tabela = () => {
    const container = document.createElement('div');
    const template = `
        <form>
            <select name="unidade" id="unidade">
            <option value="COPI">COPI</option>
            </select>
            <select name="fazenda" id="fazenda">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>           
            <select name="certificacoes" id="certificacoes">
                <option value="ELO">ELO</option>
                <option value="Renovabio">Renovabio</option>
                <option value="Bonsucro">Bonsucro</option>
                <option value="ELO">ELO</option>
                <option value="ISCC">ISCC</option>
            </select>
        </form>    
    `

    container.innerHTML = template;



const infos = produtos.produtos;

function printInfos(infos) {
        
        const raizenInfos = infos.map((item) => {
            const templateTabela = `
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
            `;
            
            container.innerHTML += templateTabela;
        });
    
     return raizenInfos.join("");
}

printInfos(infos)
    
const filterByUnidade = (e) => {
    const UnidadeSelec = e.target.value;    
    const filter = filterData (raizen.produtos, "unidade", UnidadeSelec);
    printInfos(filter); 
    console.log(filter);
 }

    const unidadeFilter = document.getElementById("unidade");
    unidadeFilter.addEventListener("change", filterBySelect);   

    return container;
}

export default tabela;






