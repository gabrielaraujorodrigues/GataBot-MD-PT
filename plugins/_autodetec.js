import chalk from 'chalk'
let WAMessageStubType = (await import('@whiskeysockets/baileys')).default
import { existsSync, promises as fs, readdirSync, rmSync, unlinkSync } from 'fs'
import path from 'path'
import './_content.js'

let handler = (m) => m
handler.before = async function (m, {conn, participants, groupMetadata, isBotAdmin}) {
if (!m.messageStubType || !m.isGroup) return
let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch((_) => gataMenu)
let img = await (await fetch(`${pp}`)).buffer()
let usuário = `@${m.sender.split`@`[0]}`
let chat = global.db.data.chats[m.chat]
let users = participants.map((u) => conn.decodeJid(u.id))
const groupAdmins = participants.filter((p) => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')

if (chat.detect && m.messageStubType == 2) {
const uniqid = (m.isGroup ? m.chat : m.sender).split('@')[0]
const sessionPath = './GataBotSession/'
for (const file of await fs.readdir(sessionPath)) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file))
console.log(
`${chalk.yellow.bold('[ ⚠️ Arquivo Removido ]')} ${chalk.greenBright(`'${file}'`)}\n` +
`${chalk.blue('(Session PreKey)')} ${chalk.redBright('que provoca el "undefined" en el chat')}`
)
}
}
} else if (chat.detect && m.messageStubType == 21) {
await this.sendMessage(
m.chat,
{text: lenguajeGB['smsAvisoAG']() + mid.smsAutodetec1(usuário, m), mentions: [m.sender], mentions: [...groupAdmins.map((v) => v.id)]},
{quoted: fkontak}
)
} else if (chat.detect && m.messageStubType == 22) {
await this.sendMessage(
m.chat,
{text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec2(usuário, groupMetadata), mentions: [m.sender]},
{quoted: fkontak}
)
} else if (chat.detect && m.messageStubType == 23) {
await this.sendMessage(
m.chat,
{text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec5(groupMetadata, usuário), mentions: [m.sender]},
{quoted: fkontak}
)
} else if (chat.detect && m.messageStubType == 24) {
await this.sendMessage(m.chat, {text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec3(usuário, m), mentions: [m.sender]}, {quoted: fkontak})
} else if (chat.detect && m.messageStubType == 25) {
await this.sendMessage(
m.chat,
{text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec4(usuário, m, groupMetadata), mentions: [m.sender]},
{quoted: fkontak}
)
} else if (chat.detect && m.messageStubType == 26) {
await this.sendMessage(m.chat, {text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec6(m), mentions: [m.sender]}, {quoted: fkontak})
} else if (chat.welcome && m.messageStubType == 27 && this.user.jid != global.conn.user.jid) {
let subject = groupMetadata.subject
let descs = groupMetadata.desc || '😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 😻'
let userName = `${m.messageStubParameters[0].split`@`[0]}`
let defaultWelcome = `*╭┈⊰* ${subject} *⊰┈ ✦*\n*┊✨ BIENVENIDO(A)!!*\n┊💖 @${userName}\n┊📄 *LEA LA DESCRIÇÃO DO GRUPO*\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ ✦*\n${descs}`
let textWel = chat.sWelcome
? chat.sWelcome
.replace(/@user/g, `@${userName}`)
.replace(/@group/g, subject)
.replace(/@desc/g, descs)
: defaultWelcome

await this.sendMessage(
m.chat,
{
text: textWel,
contextInfo: {
forwardingScore: 9999999,
isForwarded: true,
mentionedJid: [m.sender, m.messageStubParameters[0]],
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: pp,
title: [wm, '😻 𝗦𝘂𝗽𝗲𝗿 ' + gt + ' 😻', '🌟 centergatabot.gmail.com'].getRandom(),
containsAutoReply: true,
mediaType: 1,
sourceUrl: [canal1, canal2, canal3, canal4, yt, grupo1, grupo2, grupo_collab1, grupo_collab2, grupo_collab3, md].getRandom()
}
}
},
{quoted: fkontak}
)
} else if (chat.welcome && (m.messageStubType == 28 || m.messageStubType == 32) && this.user.jid != global.conn.user.jid) {
let subject = groupMetadata.subject
let userName = `${m.messageStubParameters[0].split`@`[0]}`
let defaultBye = `*╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*\n┊ @${userName}\n┊ *NO LE SABE AL GRUPO, CHAO!!* 😎\n*╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⊰*`
let textBye = chat.sBye ? chat.sBye.replace(/@user/g, `@${userName}`).replace(/@group/g, subject) : defaultBye
await this.sendMessage(
m.chat,
{
text: textBye,
contextInfo: {
forwardingScore: 9999999,
isForwarded: true,
mentionedJid: [m.sender, m.messageStubParameters[0]],
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: true,
thumbnailUrl: pp,
title: [wm, '😻 𝗦𝘂𝗽𝗲𝗿 ' + gt + ' 😻', '🌟 centergatabot.gmail.com'].getRandom(),
containsAutoReply: true,
mediaType: 1,
sourceUrl: [canal1, canal2, canal3, canal4, yt, grupo1, grupo2, grupo_collab1, grupo_collab2, grupo_collab3, md].getRandom()
}
}
},
{quoted: fkontak}
)
} else if (chat.detect && m.messageStubType == 29) {
await this.sendMessage(
m.chat,
{text: mid.smsAutodetec7(m, usuário), mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)]},
{quoted: fkontak}
)
} else if (chat.detect && m.messageStubType == 30) {
await this.sendMessage(
m.chat,
{text: mid.smsAutodetec8(m, usuário), mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)]},
{quoted: fkontak}
)
} else if (chat.detect && m.messageStubType == 72) {
await this.sendMessage(m.chat, {text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec9(usuário, m), mentions: [m.sender]}, {quoted: fkontak})
} else if (chat.detect && m.messageStubType === 172 && m.messageStubParameters.length > 0) {
const rawUser = m.messageStubParameters[0]
const users = rawUser.split('@')[0]
const prefijosProhibidos = ['91', '92', '222', '93', '265', '61', '62', '966', '229', '40', '49', '20', '963', '967', '234', '210', '212']
const usersConPrefijo = users.startsWith('+') ? users : `+${users}`

if (chat.antifake && isBotAdmin) {
if (prefijosProhibidos.some((prefijo) => usersConPrefijo.startsWith(prefijo))) {
try {
await conn.groupRequestParticipantsUpdate(m.chat, [rawUser], 'reject')
console.log(`Solicitud de ingreso de ${usersConPrefijo} rechazada automáticamente por tener un prefijo prohibido.`)
} catch (erro) {
console.erro(`Erro al rechazar la solicitud de ${usersConPrefijo}:`, erro)
}
} else {
try {
await conn.groupRequestParticipantsUpdate(m.chat, [rawUser], 'approve')
console.log(`Solicitud de ingreso de ${usersConPrefijo} aprobada automáticamente.`)
} catch (erro) {
console.erro(`Erro al aprobar la solicitud de ${usersConPrefijo}:`, erro)
}
}
} else {
try {
await conn.groupRequestParticipantsUpdate(m.chat, [rawUser], 'approve')
console.log(`Solicitud de ingreso de ${usersConPrefijo} aprobada automáticamente ya que #antifake está desativado.`)
} catch (erro) {
console.erro(`Erro al aprobar la solicitud de ${usersConPrefijo}:`, erro)
}
}
return
}
if (chat.detect && m.messageStubType == 123) {
await this.sendMessage(m.chat, {text: lenguajeGB['smsAvisoIIG']() + mid.smsAutodetec10(usuário, m), mentions: [m.sender]}, {quoted: fkontak})
} else {
if (m.messageStubType == 2) return
console.log({messageStubType: m.messageStubType, messageStubParameters: m.messageStubParameters, type: WAMessageStubType[m.messageStubType]})
}
}
export default handler
