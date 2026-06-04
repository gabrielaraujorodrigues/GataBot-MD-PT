const handler = async (m, {conn, usedPrefix, command}) => {
const args = m.text.split(' ').slice(1)
if (args.length < 2)
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoMG']()} 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙄𝙉𝙂𝙍𝙀𝙎𝘼 𝙇𝘼 𝙃𝙊𝙍𝘼 𝘿𝙀 𝙄𝙉𝙄𝘾𝙄𝙊 𝙔 𝙁𝙄𝙉 𝙀𝙉 𝙁𝙊𝙍𝙈𝘼𝙏𝙊: HH:MM, 𝙋𝙊𝙍 𝙀𝙅𝙀𝙈𝙋𝙇𝙊: 23:00 - 06:00.`,
m
)
let início, fin
const regex1 = /^(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})$/
const regex2 = /^(\d{2}:\d{2})\s*a\s*(\d{2}:\d{2})$/
const regex3 = /^(\d{2}:\d{2})\s*,\s*(\d{2}:\d{2})$/
let match
if ((match = args.join(' ').match(regex1))) {
início = match[1]
fin = match[2]
} else if ((match = args.join(' ').match(regex2))) {
início = match[1]
fin = match[2]
} else if ((match = args.join(' ').match(regex3))) {
início = match[1]
fin = match[2]
} else {
return conn.reply(
m.chat,
`${lenguajeGB['smsAvisoMG']()} 𝙁𝙊𝙍𝙈𝘼𝙏𝙊 𝘿𝙀 𝙃𝙊𝙍𝘼𝙍𝙄𝙋 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊. 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙐𝙎𝘼 𝙐𝙉𝙊 𝘿𝙀 𝙇𝙊𝙎 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀𝙎 𝙁𝙊𝙍𝙈𝘼𝙏𝙊𝙎: HH:MM - HH:MM o HH:MM, HH:MM.`,
m
)
}
db.data.chats[m.chat].horarioNsfw = {início, fin}
return conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()} 𝙃𝙊𝙍𝘼𝙍𝙄𝙊 𝙀𝙎𝙏𝘼𝘽𝙇𝙀𝘾𝙄𝘿𝙊: ${início} a ${fin}`, m)
}
handler.command = /^(sethorario|nwfshorario|hornyHorario)$/i
handler.admin = true
handler.group = true
export default handler
