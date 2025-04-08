import { createHeader } from './components/createHeader.js';
import { createBodyTable } from './components/createBodyTable.js';

// Buscar os dados da API do backend
fetch('http://localhost:3000/dados')
    .then(data => {
        createHeader(data);
        createBodyTable(data);
    })
    .catch(error => console.error("Erro ao buscar dados:", error));
