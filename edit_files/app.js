const path = require('path');
const pathFile = path.resolve(__dirname, 'text.json');
const writeExport = require('./modules/write')
const read = require('./modules/read');


// const pessoas = [
//     {nome: 'wesley'},
//     {nome: 'raquel'},
//     {nome: 'jessica'},
//     {nome: 'wilson'}
// ];
// const json = JSON.stringify(pessoas, '', 2);
// writeExport(pathFile,json);

async function readFile(pathFile){
    const data = await read(pathFile)
    renderData(data)
}

function renderData(data){
    data = JSON.parse(data)
    data.forEach(element => {
        console.log(element)
    });
}

readFile(pathFile)