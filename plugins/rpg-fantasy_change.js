// Código elaborado por: https://github.com/GataNina-Li

import fetch from 'node-fetch'
import fs from 'fs'
const fantasyDBPath = './fantasy.json'
let id_message,
pp,
dato,
fake,
user = null
const validClasses = ['Común', 'Poco Común', 'Raro', 'Épico', 'Legendario', 'Sagrado', 'Supremo', 'Transcendental']

let handler = async (m, {command, usedPrefix, conn, text}) => {
user = global.db.data.users[m.sender]

const jsonURL = 'https://raw.githubusercontent.com/GataNina-Li/module/main/imagen_json/anime.json'
const response = await fetch(jsonURL)
const data = await response.json()

var fantasyDB = []
if (fs.existsSync(fantasyDBPath)) {
const data = fs.readFileSync(fantasyDBPath, 'utf8')
var fantasyDB = JSON.parse(fs.readFileSync(fantasyDBPath, 'utf8'))
}

const userId = m.sender
let usuárioExistente = fantasyDB.find((user) => Object.keys(user)[0] === userId)

if (!text) {
if (!usuárioExistente) {
fake = {
contextInfo: {
externalAdReply: {
title: '🌟 ¡Colecciona Personajes!',
body: 'Compra un personaje y vuelve aquí',
sourceUrl: accountsgb,
thumbnailUrl: gataMenu
}
}
}
return conn.reply(m.chat, `Use el comando *${usedPrefix}fantasy* o *${usedPrefix}fy* para comprar un personaje`, m, fake)
}

const fantasyUsuário = usuárioExistente[userId].fantasy
if (fantasyUsuário.length === 0) {
fake = {
contextInfo: {
externalAdReply: {
title: '😅 ¡No tienes Personajes!',
body: 'Vuelve a comprar y regresa aquí',
sourceUrl: accountsgb,
thumbnailUrl: gataMenu
}
}
}
return conn.reply(
m.chat,
`*No posee personajes.* Primero compre un personaje usando *${usedPrefix}fantasy* o *${usedPrefix}fy* para cambiarlo por *Tempo Premium*`,
m
)
}

const personajesDisponibles = obtenerPersonajesDisponibles(userId, fantasyUsuário, data.infoImg)
const listaPersonajes = construirListaPersonajes(personajesDisponibles)
await conn.sendFile(
m.chat,
gataImg,
'fantasy.jpg',
`> Use *${usedPrefix + command} nombre o código* del personaje\n\n` + listaPersonajes,
fkontak,
true,
{
contextInfo: {
forwardingScore: 200,
isForwarded: false,
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: '🌟 FANTASÍA RPG',
body: `😼 Personajes de: » ${conn.getName(userId)}`,
mediaType: 1,
sourceUrl: accountsgb,
thumbnailUrl: 'https://i.imgur.com/vIH5SKp.jpg'
}
}
},
{mentions: userId}
)
return
}

const imageInfo = data.infoImg.find((img) => img.name.toLowerCase() === text.toLowerCase() || img.code === text)
fake = {
contextInfo: {
externalAdReply: {
title: '🤨 ¡Verifique el nombre o código!',
body: `Escriba ${usedPrefix + command} para ver sus personajes`,
sourceUrl: accountsgb,
thumbnailUrl: gataMenu
}
}
}
if (!imageInfo && text) return conn.reply(m.chat, `*No se encontró la imagen con el nombre o código:* \`\`\`${text}\`\`\``, m, fake)

const imageCode = imageInfo.code
const personaje = imageInfo.name
const imageClass = imageInfo.class
const imageURL = imageInfo.url

var fantasyDB = []
if (fs.existsSync(fantasyDBPath)) {
const data = fs.readFileSync(fantasyDBPath, 'utf8')
fantasyDB = JSON.parse(data)
}
usuárioExistente = fantasyDB.find((user) => Object.keys(user)[0] === userId)

if (usuárioExistente) {
const idUsuário = Object.keys(usuárioExistente)[0]
const fantasyUsuário = usuárioExistente[idUsuário].fantasy
const nombresPersonajesFantasy = fantasyUsuário.map((personaje) => personaje.name)
const personajesInfoCoincidentes = data.infoImg.filter((img) => nombresPersonajesFantasy.includes(img.name))
const imageInfo = data.infoImg.find((img) => img.name.toLowerCase() === text.toLowerCase() || img.code === text)
const imageClass = imageInfo.class
const personajesMismaClase = personajesInfoCoincidentes.filter((personaje) => personaje.class === imageClass)

const personajesARemover = fantasyUsuário.filter((personaje) => {
const infoCoincidente = personajesInfoCoincidentes.find((img) => img.name === personaje.name)
return infoCoincidente && infoCoincidente.class === imageClass
})

if (personajesMismaClase.length > 1) {
const tempoTotal = personajesMismaClase.reduce((total, p) => total + getTempoPremium(p.class, validClasses), 0)
const tempoTotalFormateado = formatearTempo(tempoTotal * 60 * 1000, true)
fake = {
contextInfo: {
externalAdReply: {
title: `🌟 Personajes de clase: ${imageClass}`,
body: 'Puedes hacer un solo cambio por 🤩🎟️',
sourceUrl: accountsgb,
thumbnailUrl: gataMenu
}
}
}
const mensagemConfirmacion = `*${conn.getName(m.sender)}* Hemos encontrado que tienes *${personajesMismaClase.length}* personajes en la *Clase ${imageClass}*\n\n🤗 *¿Deseas cambiar todos los personajes por tempo premium 🎟️?*\n😻 _Tempo premium estimado si cambias todos tus personajes ahora:_ 🎟️ \`\`\`${tempoTotalFormateado}\`\`\`\n\n🌟 Responde a este mensagem con *"Si"* o *"👍"*, de lo contrario escriba *"No"* o *"👎"* para sólo cambiar el personaje inicial: *${personaje}*`
id_message = (await conn.reply(m.chat, mensagemConfirmacion, m, fake)).key.id
} else {
const imagenUsuário = fantasyUsuário.find((personaje) => personaje.id === imageCode)
if (imagenUsuário) {
fantasyUsuário.splice(fantasyUsuário.indexOf(imagenUsuário), 1)
fs.writeFileSync(fantasyDBPath, JSON.stringify(fantasyDB, null, 2), 'utf8')

const tempoPremium = getTempoPremium(imageClass, validClasses)
asignarTempoPremium(user, tempoPremium)
const tempoPremiumFormateado = formatearTempo(tempoPremium * 60 * 1000, true)

fake = {
contextInfo: {
externalAdReply: {
title: `✅ ¡Personaje ${personaje} cambiado!`,
body: `🎟️ Tienes Premium por: ${tempoPremiumFormateado} `,
sourceUrl: accountsgb,
thumbnailUrl: imageURL
}
}
}
await conn.reply(
m.chat,
`*Has cambiado a ${personaje} por Tempo premium*\n\n🎟️ *Tempo premium:* \`\`\`${tempoPremiumFormateado}\`\`\``,
m,
fake
)
let userInDB = fantasyDB.find((userEntry) => userEntry[userId])
if (userInDB) {
userInDB[userId].record[0].total_purchased -= 1
fs.writeFileSync(fantasyDBPath, JSON.stringify(fantasyDB, null, 2), 'utf8')
}
}
}
}

handler.before = async (m) => {
let usuárioExistente = fantasyDB.find((user) => Object.keys(user)[0] === userId)
if (!(m.sender in usuárioExistente) || !usuárioExistente[m.sender].fantasy.some((personaje) => personaje.id === imageInfo.code)) return

if (m.quoted && m.quoted.id == id_message && ['si', '👍'].includes(m.text.toLowerCase())) {
let usuárioExistente = fantasyDB.find((user) => Object.keys(user)[0] === userId)
if (!usuárioExistente) return

const idUsuário = Object.keys(usuárioExistente)[0]
const fantasyUsuário = usuárioExistente[idUsuário].fantasy
const nombresPersonajesFantasy = fantasyUsuário.map((personaje) => personaje.name)
const personajesInfoCoincidentes = data.infoImg.filter((img) => nombresPersonajesFantasy.includes(img.name))
const personajesMismaClase = personajesInfoCoincidentes.filter((personaje) => personaje.class === imageClass)
personajesMismaClase.forEach((p) => {
const index = fantasyUsuário.findIndex((personaje) => personaje.name === p.name)
if (index !== -1) {
fantasyUsuário.splice(index, 1)
}
})
fs.writeFileSync(fantasyDBPath, JSON.stringify(fantasyDB, null, 2), 'utf8')

const tempoTotal = personajesMismaClase.reduce((total, p) => total + getTempoPremium(p.class, validClasses), 0)
asignarTempoPremium(user, tempoTotal)

const tempoTotalFormateado = formatearTempo(tempoTotal * 60 * 1000, true)
fake = {
contextInfo: {
externalAdReply: {
title: `✅ ¡${personajesMismaClase.length} Personajes cambiados!`,
body: `🎟️ Tienes Premium por: ${tempoPremiumFormateado} `,
sourceUrl: accountsgb,
thumbnailUrl: gataMenu
}
}
}
await conn.reply(
m.chat,
`*Has cambiado a ${personajesMismaClase.length} Personajes por Tempo premium\n\n🎟️ *Tempo premium:* \`\`\`${tempoTotalFormateado}\`\`\``,
m,
fake
)
let userInDB = fantasyDB.find((userEntry) => userEntry[userId])
if (userInDB) {
userInDB[userId].record[0].total_purchased -= personajesMismaClase.length
fs.writeFileSync(fantasyDBPath, JSON.stringify(fantasyDB, null, 2), 'utf8')
}
}

if (m.quoted && m.quoted.id == id_message && ['no', '👎'].includes(m.text.toLowerCase())) {
let usuárioExistente = fantasyDB.find((user) => Object.keys(user)[0] === userId)
const fantasyUsuário = usuárioExistente[userId].fantasy
const imagenUsuário = fantasyUsuário.find((personaje) => personaje.id === imageCode)

fantasyUsuário.splice(fantasyUsuário.indexOf(imagenUsuário), 1)
fs.writeFileSync(fantasyDBPath, JSON.stringify(fantasyDB, null, 2), 'utf8')

const tempoPremium = getTempoPremium(imageClass, validClasses)
asignarTempoPremium(user, tempoPremium)

const tempoPremiumFormateado = formatearTempo(tempoPremium * 60 * 1000, true)
fake = {
contextInfo: {
externalAdReply: {
title: `✅ ¡Personaje ${personaje} cambiado!`,
body: `🎟️ Tienes Premium por: ${tempoPremiumFormateado} `,
sourceUrl: accountsgb,
thumbnailUrl: imageURL
}
}
}
await conn.reply(
m.chat,
`*Has cambiado a ${personaje} por Tempo premium*\n\n🎟️ *Tempo premium:* \`\`\`${tempoPremiumFormateado}\`\`\``,
m,
fake
)
let userInDB = fantasyDB.find((userEntry) => userEntry[userId])
if (userInDB) {
userInDB[userId].record[0].total_purchased -= 1
fs.writeFileSync(fantasyDBPath, JSON.stringify(fantasyDB, null, 2), 'utf8')
}
}
}
}
handler.command = /^(fantasychange|fychange|fantasycambiar|fycambiar)$/i
export default handler

// Obtener el tempo premium según la clase del personaje
function getTempoPremium(imageClass, validClasses) {
const index = validClasses.indexOf(imageClass)
const tempoPremiums = [30, 60, 90, 120, 240, 420, 600, 1440] // Tempos en minutos correspondientes a cada clase
return tempoPremiums[index] || 0

// Común = 30 min
// Poco Común = 1 hora
// Raro = 1 h 30 min
// Épico = 2 horas
// Legendario = 4 horas
// Sagrado = 7 horas
// Supremo = 10 horas
// Transcendental = 24 horas
}

// Asignar tempo premium al usuário
function asignarTempoPremium(user, tempoPremium) {
const tempo = tempoPremium * 60 * 1000 // minutos a milisegundos
const now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tempo
else user.premiumTime = now + tempo
user.premium = true
}

// Formatear el tempo en milisegundos
function formatearTempo(tempoEnMilisegundos, usarAbreviaturas = false) {
const segundos = Math.floor(tempoEnMilisegundos / 1000)
const minutos = Math.floor(segundos / 60)
const horas = Math.floor(minutos / 60)
const dias = Math.floor(horas / 24)
const tempoFormateado = []

if (usarAbreviaturas) {
if (dias > 0) tempoFormateado.push(`${dias}d`)
if (horas % 24 > 0) tempoFormateado.push(`${horas % 24}h`)
if (minutos % 60 > 0) tempoFormateado.push(`${minutos % 60}min`)
if (segundos % 60 > 0) tempoFormateado.push(`${segundos % 60}seg`)
} else {
if (dias > 0) tempoFormateado.push(`${dias} día${dias > 1 ? 's' : ''}`)
if (horas % 24 > 0) tempoFormateado.push(`${horas % 24} hora${horas % 24 > 1 ? 's' : ''}`)
if (minutos % 60 > 0) tempoFormateado.push(`${minutos % 60} minuto${minutos % 60 > 1 ? 's' : ''}`)
if (segundos % 60 > 0) tempoFormateado.push(`${segundos % 60} segundo${segundos % 60 > 1 ? 's' : ''}`)
}
return tempoFormateado.length > 0 ? tempoFormateado.join(', ') : '0 segundos'
}

function obtenerPersonajesDisponibles(userId, fantasyUsuário, infoImg) {
const personajesDisponibles = []
fantasyUsuário.forEach((personaje) => {
const info = infoImg.find((img) => img.code === personaje.id)
if (info) {
personajesDisponibles.push({
id: personaje.id,
name: personaje.name,
code: personaje.id,
class: info.class
})
}
})
return personajesDisponibles
}

function construirListaPersonajes(personajes) {
const personajesPorClase = {}
validClasses.forEach((clase) => {
personajesPorClase[clase] = []
})
personajes.forEach((personaje) => {
personajesPorClase[personaje.class].push(personaje)
})
let listaFinal = ''
validClasses.forEach((clase) => {
const tempoPremium = formatearTempo(getTempoPremium(clase, validClasses) * 60 * 1000, true)
const mensagemClase =
personajesPorClase[clase].length > 0
? `\n*${clase} | ${tempoPremium} premium 🎟️*\n${personajesPorClase[clase].map((personaje) => `• _${personaje.name}_ » \`\`\`(${personaje.id})\`\`\``).join('\n')}\n`
        : `\n*${clase} | ${tempoPremium} premium 🎟️*\n\`\`\`✘ Personajes no encontrados\`\`\`\n`
listaFinal += mensagemClase
})
return listaFinal.trim()
}
