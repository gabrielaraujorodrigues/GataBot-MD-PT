let handler = async (m, {conn, args}) => {
let usuário = global.db.data.users[m.sender].premiumTime
let user = Object.entries(global.db.data.users)
.filter((user) => user[1].premiumTime)
.map(([key, value]) => {
return {...value, jid: key}
})
let name = '🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠'
let fkon = {
key: {fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? {remoteJid: '16504228206@s.whatsapp.net'} : {})},
message: {
contactMessage: {
displayName: `${name}`,
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}
}
}
let toUser = `${m.sender.split('@')[0]}`
let aa = toUser + '@s.whatsapp.net'
let premTime = global.db.data.users[m.sender].premiumTime
let prem = global.db.data.users[m.sender].premium
let waktu = clockString(`${premTime - new Date() * 1} `)
let sortedP = user.map(toNumber('premiumTime')).sort(sort('premiumTime'))
let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
await conn.reply(
m.chat,
`${htki} *🎟️ PREMIUM 🎟️* ${htka}
  
*╭ ༻✦༺ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙄𝙉𝙁𝙊 ༻✦༺*\n*┃✢ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*\n*┃✢* @${toUser}
${prem ? `✅ ${clockString(usuário - new Date() * 1)}\n┃𝘿𝙄𝙎𝙁𝙍𝙐𝙏𝘼𝙍 𝙋𝙍𝙀𝙈𝙄𝙐𝙈` : '┃✢ *𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 | 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀*\n┃🚫 𝘾𝘼𝘿𝙐𝘾𝘼𝘿𝙊 : 𝙏𝙄𝙈𝙀𝘿 𝙊𝙐𝙏\n┃✢ 𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝙋𝘼𝙎𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈:\n┃(#pase premium)'}
*╰•·–––––––––––––––·•*

╭•·–––––––––––––––·•
🌟 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
╰•·–––––––––––––––·•${sortedP.slice(0, len).map(({jid, name, premiumTime, prem, registered}, i) => `\n\n╭–✦ ${registered ? name : conn.getName(jid)}\n┃• wa.me/${jid.split`@`[0]}\n${premiumTime > 0 ? `${clockString(premiumTime - new Date() * 1)}` : '┃🚫 𝘾𝘼𝘿𝙐𝘾𝘼𝘿𝙊 : 𝙏𝙄𝙈𝙀𝘿 𝙊𝙐𝙏'}`).join`\n╰–––––––––––·•`}
╰–––––––––––·•\n\n${wm}`,
fkon,
{mentions: [aa]}
)
/*  await conn.sendButton(m.chat, `${htki} *🎟️ PREMIUM 🎟️* ${htka}
  
*╭ ༻✦༺ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙄𝙉𝙁𝙊 ༻✦༺*
*┃✢ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*\n*┃✢* ${conn.getName(m.sender)}
${prem ? `${clockString (usuário - new Date() * 1)}` : '┃✢ *𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 | 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀*\n┃🚫 𝘾𝘼𝘿𝙐𝘾𝘼𝘿𝙊 : 𝙏𝙄𝙈𝙀𝘿 𝙊𝙐𝙏 '}
*╰•·–––––––––––––––·•*

╭•·–––––––––––––––·•
🌟 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈
╰•·–––––––––––––––·•${sortedP.slice(0, len).map(({ jid, name, premiumTime, prem, registered }, i) => `\n\n╭–✦ ${registered ? name : conn.getName(jid)}\n┃• wa.me/${jid.split`@`[0]}\n${premiumTime > 0 ? `${clockString (premiumTime - new Date() * 1)}` : '┃🚫 𝘾𝘼𝘿𝙐𝘾𝘼𝘿𝙊 : 𝙏𝙄𝙈𝙀𝘿 𝙊𝙐𝙏'}`).join`\n╰–––––––––––·•`}
╰–––––––––––·•`.trim(), `🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${prem ? '✅' : '❌'}\n${wm}`, null, [[`${prem ? '✦ 𝘿𝙄𝙎𝙁𝙍𝙐𝙏𝘼𝙍 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ✦': '✦ 𝘾𝙊𝙈𝙋𝙍𝘼𝙍 𝙋𝘼𝙎𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 ✦'}`, `${prem ? '.allmenu': '.pase premium'}`]]) */ //${premiumTime > 0 ?
setTimeout(() => {
if (global.db.data.chats[m.chat].deletemedia) conn.deleteMessage(m.chat, key)
}, global.db.data.chats[m.chat].deletemediaTime)
}
handler.help = ['premlist [angka]']
handler.tags = ['info']
handler.command = /^(listprem|premlist|listavip|viplista)$/i
//handler.command = /^(vip|prem|premium|lista|list)vip|prem|premium|lista|list$/i

export default handler

function clockString(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [
'┃ ',
ye,
' *🗓️ Años : Year*\n',
'┃ ',
mo,
' *⛅ Mes : Month*\n',
'┃ ',
d,
' *☀️ Días : Days*\n',
'┃ ',
h,
' *⏰ Horas : Hours*\n',
'┃ ',
m,
' *🕐 Minutos : Minutes*\n',
'┃ ',
s,
' *⏱️ Segundos : Seconds*'
]
.map((v) => v.toString().padStart(2, 0))
.join('')
}

function sort(property, ascending = true) {
if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
if (property)
return (a, i, b) => {
return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
}
else return (a) => (a === undefined ? _default : a)
}
