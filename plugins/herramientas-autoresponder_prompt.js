let handler = async (m, {conn, text, usedPrefix, command, isProprietário, isAdmin, isRProprietário}) => {
if (!(isProprietário || isAdmin || isRProprietário)) {
conn.reply(
m.chat,
'❌ *No tienes permitido personalizar la autorespuesta del bot en este chat.*\n\n💡 *Pídele a un administrador en caso que este chat sea un grupo o al criador del bot que lo haga por ti en este chat.*',
m
)
}
const chatData = global.db.data.chats[m.chat]
if (text) {
if (chatData.sAutorespond)
return conn.reply(
m.chat,
`⚠️ *Actualmente hay el siguiente prompt en uso:*\n\n${chatData.sAutorespond}\n\n💡 *Si quieres cambiarlo, usa el comando sin texto para borrar el prompt actual y luego establece el novo prompt.*`,
m
)

chatData.sAutorespond = text
conn.reply(
m.chat,
`✅ *Configuração exitosa.*\n\n*Has establecido un novo prompt para este chat.*\n💬 A partir de ahora, activa usando *${usedPrefix}on autoresponder*, el bot usará las indicaciones que hayas establecido.\n\n> *Recuerda etiquetar o responder a un mensagem del bot para que te responda.*`,
m
)
} else {
if (chatData.sAutorespond) {
chatData.sAutorespond = ''
conn.reply(m.chat, '🗑️ *Prompt borrado con éxito.*', m)
} else {
conn.reply(
m.chat,
`⚠️ *No hay ningún prompt establecido para este chat.*\n\n💡 *Para establecer un novo prompt, utiliza el comando seguido del texto que describa las instrucciones para el bot.*\n\n*Por ejemplo:*\n*${usedPrefix + command}* Actúa como un psicólogo y brinda apoyo emocional a los usuários.`,
m
)
}
}
}

handler.command = /^(autorespond|autoresponder)$/i
export default handler
