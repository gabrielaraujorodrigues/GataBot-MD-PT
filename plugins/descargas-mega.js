import { File } from 'megajs'
import mime from 'mime-types'

let handler = async (m, {conn, args, usedPrefix, text, command}) => {
try {
if (!text) return m.reply('Ingresa un link de Mega')
const file = File.fromURL(text)
await file.loadAttributes()
const fileExtension = file.name.split('.').pop().toLowerCase()
const mimeType = mime.lookup(fileExtension)
let caption = `${eg}
┃ 𓃠 *${gt} ${vs}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💫 𝙉𝙊𝙈𝘽𝙍𝙀 | 𝙉𝘼𝙈𝙀
┃ ${file.name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💪 𝙋𝙀𝙎𝙊 |  𝙎𝙄𝙕𝙀
┃ ${formatBytes(file.size)}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🚀 𝙏𝙄𝙋𝙊 | 𝙏𝙔𝙋𝙀
┃ ${mimeType}
┃
┃ ${wm}`.trim()
conn.reply(m.chat, caption, m)
if (file.size >= 1800000000 && !file.directory) return m.reply('Erro: El arquivo es muy pesado')
const data = await file.downloadBuffer()
await conn.sendFile(m.chat, data, file.name, null, m, null, {mimeType, asDocument: true})
} catch (erro) {
return m.reply(`Erro: ${erro.message}`)
}
}

handler.help = ['mega']
handler.tags = ['downloader']
handler.command = /^(mega)$/i
export default handler

function formatBytes(bytes) {
if (bytes === 0) return '0 Bytes'
const k = 1024
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
const i = Math.floor(Math.log(bytes) / Math.log(k))
return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}
