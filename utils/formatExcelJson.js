const formatExcelJson = (data) => {
    const dataSet = JSON.parse(JSON.stringify(data));

    const oldKeys = ['QUADRO DE DESEMPENHO DOS FUNDOS DE PREVIDÊNCIA', '__EMPTY', '__EMPTY_1', '__EMPTY_2', '__EMPTY_3', '__EMPTY_4', '__EMPTY_5', '__EMPTY_6', '__EMPTY_7', '__EMPTY_8', '__EMPTY_9'];
    const newKeys = ['fundos', 'categoria', 'mes', 'ano', 'desempenho', 'acumulado', 'dozeMeses', 'vinteQuatroMeses', 'trintaSeisMeses', 'patrimonio', 'taxa'];

    if (oldKeys.length === newKeys.length) {
        dataSet.forEach(row => {
            oldKeys.forEach((oldKey, index) => {
                const newKey = newKeys[index];
                if (row.hasOwnProperty(oldKey)) {
                    row[newKey] = row[oldKey];
                    delete row[oldKey];
                }
            });
        });
    } else {
        console.error("Erro: As listas de chaves antigas e novas têm tamanhos diferentes!");
    }

    if (dataSet.length >= 2) {
        dataSet.splice(-2, 2);
    }

    return dataSet;
};

module.exports = formatExcelJson;
