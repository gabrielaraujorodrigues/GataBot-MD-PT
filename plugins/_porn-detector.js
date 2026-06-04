// Código elaborado por GataNina-Li (Gata Dios)

/*let { downloadContentFromMessage } = (await import(global.baileys))
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import fetch from 'node-fetch'
import axios from 'axios'
import path from 'path'
global.link = null

let handler = m => m
handler.before = async function (m, { conn, __dirname, isBotAdmin }) {
let chat = global.db.data.chats[m.chat]
let media, link, buffer = false
let web = /https?:\/\/\S+/
  
if (!isBotAdmin || chat.delete || !m.isGroup) return
if (!chat.antiPorn) return 
  
try{
let q = m
let mime = (q.msg || q).mimetype || q.mediaType || ''
let delet = q.key.participant
let bang = q.key.id
  
if (/sticker|image/.test(mime) || m.mtype == 'viewOnceMessageV2') {
let isTele = /^image\/(png|jpe?g)$/.test(mime)
if (isTele) {
media = await q.download()
link = await uploadImage(media)
}

if (m.mtype == 'viewOnceMessageV2') {
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
if (type == 'imageMessage') {
media = await downloadContentFromMessage(msg[type], 'image')
buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
link = await uploadImage(buffer)
}}

if (m.mtype == 'stickerMessage') {
try {
link = await webp2png(await q.download())
} catch {
link = false
}}

} else {
if (q.text || web.test(q.text)) {
await IsLink(q.text).then(result => {
link = result ? link : false
console.log(result)
}).catch(erro => {
link = false
})
} else return  
}

if (!link) return 
const response = await fetch(`https://api.alyachan.dev/api/porn-detector?image=${link}&apikey=GataDios`)
const result = await response.json()
link = null

if (result.status && result.data.isPorn) {
await m.reply('*La imagen contiene conteúdo para adultos.*')
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})

}} catch (erro) {
console.log(erro)
}
  
}		
export default handler

async function IsLink(texto) {
const regexLink = /https?:\/\/\S+/
const match = texto.match(regexLink)
if (match) {
link = match[0]
const response = await fetch(link, { method: 'HEAD' })
const contentType = response.headers.get('content-type')
//console.log(contentType)
if (contentType && (contentType.startsWith('image/jpeg') || contentType.startsWith('image/jpg') || contentType.startsWith('image/png') || contentType.startsWith('image/webp'))) {
return true
}}
return false
}
*/
