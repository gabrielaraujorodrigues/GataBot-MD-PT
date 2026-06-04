let handler = async (m, {conn, text, args, usedPrefix, command}) => {
let opções = text.split('|')
if (!opções[0])
return conn.reply(m.chat, `𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙁𝙊𝙍𝙈𝘼:\n*${usedPrefix + command} Motivo de Encuesta|Opção1|Opção2|Opção3...*`, m)
if (!opções[1])
return conn.reply(m.chat, `𝙋𝘼𝙍𝘼 𝘾𝙍𝙀𝘼𝙍 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎, 𝙀𝙎𝙏𝙀 𝙀𝙎 𝙀𝙇 𝙁𝙊𝙍𝙈𝘼𝙏𝙊:\n*${usedPrefix + command} Motivo de Encuesta|Opção1|Opção2|Opção3...*`, m)
if (opções.length > 13) return conn.reply(m.chat, '𝙈𝘼𝙓𝙄𝙈𝙊 *12* 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎!!', m)
let pregunta = opções[0]
let respuestas = opções.slice(1)
let mensagem = `📊 𝙀𝙉𝘾𝙐𝙀𝙎𝙏𝘼 𝘾𝙍𝙀𝘼𝘿𝘼 𝙋𝙊𝙍:\n*❤️⇢ ${conn.getName(m.sender)}*\n\n${pregunta}`
await conn.sendMessage(m.chat, {poll: {name: mensagem, values: respuestas, selectableCount: 1}}, {quoted: m})
}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'startpoll', 'encuestas', 'polls']

export default handler
