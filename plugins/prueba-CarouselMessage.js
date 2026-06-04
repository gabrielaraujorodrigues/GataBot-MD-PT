// COMBINACIÓN DE MENSAGEMS
// Adaptar el simple.js
let handler = async (m, {conn, usedPrefix, command, text}) => {
// MENSAGEM CARUSEL CON TODOS LOS BOTONES DISPONIBLES
// Si las ids no te funciona con usedPrefix, tendrás que definirlas, ejemplo /menu
const sections = [
{
title: 'Título de la sección',
rows: [
{header: 'Encabezado1', title: 'Título1', description: 'Descrição1', id: usedPrefix + 'menu'},
{header: 'Encabezado2', title: 'Título2', description: 'Descrição2', id: 'Id2'},
{header: 'Encabezado3', title: 'Título3', description: 'Descrição3', id: 'Id3'},
{header: 'Encabezado4', title: 'Título4', description: 'Descrição4', id: 'Id4'}
]
}
]
const messages = [
[
// CARRUSEL 1
'Descrição de Carrusel 1',
'Footer de Carrusel 1',
'https://telegra.ph/file/24b24c495b5384b218b2f.jpg',
[
['Botón1', usedPrefix + 'menu'],
['Botón2', 'Id2'] /* etc... */
],
[['Texto para copiar 1'], ['Texto para copiar 2'] /* etc... */],
[
['Link1', canal2],
['Link2', 'https://example.com/link2'] /* etc... */
],
[
['Botón Lista 1', sections],
['Botón Lista 2', sections] /* etc... */
]
],
[
// CARRUSEL 2
'Descrição de Carrusel 2',
'Footer de Carrusel 2',
'https://telegra.ph/file/e9239fa926d3a2ef48df2.jpg',
[
['Botón1', 'Id1'],
['Botón2', 'Id2']
],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[
['Link1', 'https://example.com/link1'],
['Link2', 'https://example.com/link2']
],
[
['Botón Lista 1', sections],
['Botón Lista 2', sections]
]
],
[
// CARRUSEL 3
'Descrição de Carrusel 3',
'Footer de Carrusel 3',
'https://telegra.ph/file/ec725de5925f6fb4d5647.jpg',
[
['Botón1', 'Id1'],
['Botón2', 'Id2']
],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[
['Link1', 'https://example.com/link1'],
['Link2', 'https://example.com/link2']
],
[
['Botón Lista 1', sections],
['Botón Lista 2', sections]
]
],
[
// CARRUSEL 4
'Descrição de Carrusel 4',
'Footer de Carrusel 4',
'https://telegra.ph/file/7acad0975febb71446da5.jpg',
[
['Botón1', 'Id1'],
['Botón2', 'Id2']
],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[
['Link1', 'https://example.com/link1'],
['Link2', 'https://example.com/link2']
],
[
['Botón Lista 1', sections],
['Botón Lista 2', sections]
]
]
] /* etc... */
await conn.sendCarousel(m.chat, 'Texto', 'Footer', 'Titulo de Carrusel', messages, m)
}
handler.command = /^(carousel)$/i
export default handler
