export function createBodyTable(dataSet) {
    if (!dataSet || dataSet.length === 0) {
        console.error("Erro: DataSet está vazio ou indefinido.");
        return;
    }

    const mainContent = document.querySelector('.mainContent');
    if (!mainContent) {
        console.error("Erro: Elemento '.mainContent' não encontrado.");
        return;
    }

    const tables = document.querySelectorAll('.tableContent');
    if (tables.length === 0) {
        console.error("Erro: Nenhum elemento '.tableContent' encontrado.");
        return;
    }

    const table = tables[0];

    let oldTbody = table.querySelector('tbody');
    if (oldTbody) {
        table.removeChild(oldTbody);
    }

    const tbody = document.createElement('tbody');

    dataSet.forEach(row => {
        const tr = document.createElement('tr');

        Object.values(row).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
}
