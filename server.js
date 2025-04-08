const express = require('express');
const cors = require('cors');
const xlsx = require('xlsx');
const formatExcelJson = require('./utils/formatExcelJson');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); 
app.use(express.json());

// Ler e processar o arquivo Excel
const getExcelData = () => {
    const workbook = xlsx.readFile('./data/Janeiro_2025_Site.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const dataSet = xlsx.utils.sheet_to_json(sheet);

    return formatExcelJson(dataSet);
};

// Rota para fornecer os dados do Excel
app.get('/dados', (req, res) => {
    try {
        const data = getExcelData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao processar os dados do Excel" });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
