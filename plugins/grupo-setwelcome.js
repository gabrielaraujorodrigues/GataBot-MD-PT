let handler = async (m, {conn, text, isRProprietário, isProprietário}) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
conn.reply(m.chat, lenguajeGB.smsSetW(), fkontak, m)
//conn.sendButton(m.chat, wm, lenguajeGB['smsSetW'](), null, [[lenguajeGB.smsConMenu(), `/menu`]], fkontak, m)
} else throw `${lenguajeGB['smsSetW2']()}`
}
handler.command = ['setwelcome', 'boas-vindas']
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
