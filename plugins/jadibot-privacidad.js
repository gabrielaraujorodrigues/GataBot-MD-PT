let handler = async (m, {conn, usedPrefix, text, isBotAdmin}) => {
const isBot = global.conns.some((bot) => bot.user.jid === m.sender)
if (!isBot) return m.reply('⚠️ Este comando solo puede ser usado por Sub-Bot.')
const bot = global.conns.find((bot) => bot.user.jid === m.sender)
if (!bot) return m.reply('⚠️ No se pudo identificar el bot.')
const botConfig = global.db.data.users[bot.user.jid] || {}
const [option, value] = text.split(' ')
if (!option || !value)
return m.reply(
`⚠️ Uso: *${usedPrefix}setconfig <opção> <valor>*\n\nOpções disponibles:\n- *privacy*: 1 (ativar) / 0 (desativar)\n- *prestar*: 1 (ativar) / 0 (desativar)`
)

if (option === 'privacy') {
if (value === '1') {
botConfig.privacy = true
await conn.sendMessage(m.chat, {text: '✅ *Privacidad activada.*\n> Tu número no se mostrará en la lista de bots.'}, {quoted: m})
} else if (value === '0') {
botConfig.privacy = false
await conn.sendMessage(m.chat, {text: '✅ *Privacidad desactivada.*\n> Tu número se mostrará en la lista de bots.'}, {quoted: m})
} else {
await conn.sendMessage(m.chat, {text: '⚠️ Valor no válido. Usa: *1* (ativar) o *0* (desativar).'}, {quoted: m})
}
} else if (option === 'prestar') {
if (value === '1') {
botConfig.prestar = true
await conn.sendMessage(m.chat, {text: '✅ *Prestar bot ativado.*\n> Los usuários pueden usar el bot para unirlo a grupos.'}, {quoted: m})
} else if (value === '0') {
botConfig.prestar = false
await conn.sendMessage(m.chat, {text: '✅ *Prestar bot desativado.*\n> Los usuários no podran unir el bot a grupos.'}, {quoted: m})
} else {
await conn.sendMessage(m.chat, {text: '⚠️ Valor no válido. Usa: *1* (ativar) o *0* (desativar).'}, {quoted: m})
}
}
global.db.data.users[bot.user.jid] = botConfig
}
handler.command = handler.help = ['setconfig']
handler.tags = ['jadibot']
handler.register = true
export default handler
