export function createHeader(dataSet) {
    if (!dataSet || dataSet.length === 0) {
        console.error("Erro: DataSet está vazio ou indefinido.");
        return;
    }

    const dataKeys = Object.keys(dataSet[0]); // Pega os nomes das colunas

    const mainContent = document.querySelector('.mainContainer'); // Ajustado para a classe correta
    if (!mainContent) {
        console.error("Erro: Elemento '.mainContainer' não encontrado.");
        return;
    }

    // Criar tabela
    const table = document.createElement('table');
    mainContent.appendChild(table);
    table.classList.add('tableContent')

    // Criar cabeçalho da tabela
    const thead = document.createElement('thead'); // Corrigido de 'theader' para 'thead'
    table.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);
    thead.classList.add('headerTabela')

    // Adicionar colunas ao cabeçalho
    dataKeys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key; // Define o nome da coluna
        tr.appendChild(th);
    });
}
