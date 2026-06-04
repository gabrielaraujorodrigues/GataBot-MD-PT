let handler = async (m, {conn, text, usedPrefix, command, args}) => {
let toUser = `${m.sender.split('@')[0]}`
let aa = toUser + '@s.whatsapp.net'
let template = (args[0] || '').toLowerCase()
if (/comprar|prem1/i.test(command)) {
var tempoPremium = 5 * text //tempo total
var tempoDecretado = 5 * 1 //tempo decretado
const gata = 15
let user = global.db.data.users[m.sender]

if (!text)
return conn.reply(
m.chat,
`${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('limit')}*\n\n*EXEMPLO: ${usedPrefix + command} 1*`,
fkontak,
m
)
if (isNaN(text))
return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EXEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.limit < gata)
return conn.reply(
m.chat,
`${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('limit')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 ${rpgshopp.emoticon('limit')} 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}sell*`,
fkontak,
m
)
user.limit -= gata * text

var tempo = 300000 * text //180000 3min | 300000 5 min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tempo
else user.premiumTime = now + tempo
user.premium = true
const imgpre = [
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg',
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'
]
//let imgpre = 'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg'

await conn.reply(
m.chat,
`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`,
fkontak,
{mentions: [aa]}
)
}
/*conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}*/

//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem2/i.test(command)) {
var tempoPremium = 15 * text //tempo total
var tempoDecretado = 15 * 1 //tempo decretado
const gata = 35
let user = global.db.data.users[m.sender]

if (!text)
return conn.reply(
m.chat,
`${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('kyubi')}*\n\n*EXEMPLO: ${usedPrefix + command} 1*`,
fkontak,
m
)
if (isNaN(text))
return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EXEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.kyubi < gata)
return conn.reply(
m.chat,
`${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('kyubi')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 ${rpgshopp.emoticon('kyubi')} 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}sell*`,
fkontak,
m
)
user.kyubi -= gata * text

var tempo = 900000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tempo
else user.premiumTime = now + tempo
user.premium = true
const imgpre = [
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg',
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'
]

await conn.reply(
m.chat,
`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`,
fkontak,
{mentions: [aa]}
)
}
/*await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('kyubi')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('kyubi')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('kyubi')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}*/

//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem3/i.test(command)) {
var tempoPremium = 30 * text //tempo total
var tempoDecretado = 30 * 1 //tempo decretado
const gata = 25
let user = global.db.data.users[m.sender]

if (!text)
return conn.reply(
m.chat,
`${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tempoDecretado} MIMUTOS*\n*✤ ${gata} ${rpgshop.emoticon('emerald')}*\n\n*EXEMPLO: ${usedPrefix + command} 1*`,
fkontak,
m
)
if (isNaN(text))
return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EXEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.emerald < gata)
return conn.reply(
m.chat,
`${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('emerald')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 ${rpgshopp.emoticon('emerald')} 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}sell*`,
fkontak,
m
)
user.emerald -= gata * text

var tempo = 1800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tempo
else user.premiumTime = now + tempo
user.premium = true
const imgpre = [
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg',
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'
]

await conn.reply(
m.chat,
`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`,
fkontak,
{mentions: [aa]}
)
}
/*await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('emerald')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('emerald')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('emerald')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}*/

//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem4/i.test(command)) {
var tempoPremium = 1 * text //tempo total
var tempoDecretado = 1 * 1 //tempo decretado
const gata = 50
let user = global.db.data.users[m.sender]

if (!text)
return conn.reply(
m.chat,
`${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tempoDecretado} HORA(S)*\n*✤ ${gata} ${rpgshop.emoticon('trash')}*\n\n*EXEMPLO: ${usedPrefix + command} 1*`,
fkontak,
m
)
if (isNaN(text))
return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EXEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.trash < gata)
return conn.reply(
m.chat,
`${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('trash')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 ${rpgshopp.emoticon('trash')} 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}sell*`,
fkontak,
m
)
user.trash -= gata * text

var tempo = 3600000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tempo
else user.premiumTime = now + tempo
user.premium = true
const imgpre = [
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg',
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'
]

await conn.reply(
m.chat,
`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`,
fkontak,
{mentions: [aa]}
)
}
/*await conn.sendButton(m.chat,`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍 » ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('trash')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('trash')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('trash')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} hora(s)*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*`, `😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`, imgpre[Math.floor(Math.random() * imgpre.length)], [
[`🌟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`, `${usedPrefix}listprem`],
[`🎟️ 𝙈𝘼𝙎 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🎟️`, `${usedPrefix + command} 1`],
[`😽 𝗗𝗜𝗦𝗙𝗥𝗨𝗧𝗔𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 😽`, `${usedPrefix}allmenu`]], fkontak, m)}*/

//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem5/i.test(command)) {
var tempoPremium = 3 * text //tempo total
var tempoDecretado = 3 * 1 //tempo decretado
const gata = 40
let user = global.db.data.users[m.sender]

if (!text)
return conn.reply(
m.chat,
`${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tempoDecretado} HORA(S)*\n*✤ ${gata} ${rpgshop.emoticon('berlian')}*\n\n*EXEMPLO: ${usedPrefix + command} 1*`,
fkontak,
m
)
if (isNaN(text))
return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EXEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.berlian < gata)
return conn.reply(
m.chat,
`${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('berlian')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 ${rpgshopp.emoticon('berlian')} 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}sell*`,
fkontak,
m
)
user.berlian -= gata * text

var tempo = 10800000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tempo
else user.premiumTime = now + tempo
user.premium = true
const imgpre = [
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg',
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'
]

await conn.reply(
m.chat,
`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`,
fkontak,
{mentions: [aa]}
)
}

//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem6/i.test(command)) {
var tempoPremium = 7 * text //tempo total
var tempoDecretado = 7 * 1 //tempo decretado
const gata = 70
let user = global.db.data.users[m.sender]

if (!text)
return conn.reply(
m.chat,
`${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tempoDecretado} HORA(S)*\n*✤ ${gata} ${rpgshop.emoticon('joincount')}*\n\n*EXEMPLO: ${usedPrefix + command} 1*`,
fkontak,
m
)
if (isNaN(text))
return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EXEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.joincount < gata)
return conn.reply(
m.chat,
`${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('joincount')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 ${rpgshopp.emoticon('joincount')} 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}sell*`,
fkontak,
m
)
user.joincount -= gata * text

var tempo = 25200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tempo
else user.premiumTime = now + tempo
user.premium = true
const imgpre = [
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg',
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'
]

await conn.reply(
m.chat,
`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`,
fkontak,
{mentions: [aa]}
)
}

//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem7/i.test(command)) {
var tempoPremium = 24 * text //tempo total
var tempoDecretado = 24 * 1 //tempo decretado
const gata = 65
let user = global.db.data.users[m.sender]

if (!text)
return conn.reply(
m.chat,
`${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tempoDecretado} HORA(S)*\n*✤ ${gata} ${rpgshop.emoticon('diamond')}*\n\n*EXEMPLO: ${usedPrefix + command} 1*`,
fkontak,
m
)
if (isNaN(text))
return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EXEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.diamond < gata)
return conn.reply(
m.chat,
`${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('diamond')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 *${rpgshopp.emoticon('diamond')}* 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}sell*`,
fkontak,
m
)
user.diamond -= gata * text

var tempo = 86400000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tempo
else user.premiumTime = now + tempo
user.premium = true
const imgpre = [
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg',
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'
]

await conn.reply(
m.chat,
`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`,
fkontak,
{mentions: [aa]}
)
}

//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (/prem8/i.test(command)) {
var tempoPremium = 3 * text //tempo total
var tempoDecretado = 3 * 1 //tempo decretado
const gata = 80
let user = global.db.data.users[m.sender]

if (!text)
return conn.reply(
m.chat,
`${mg}*𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙏𝙄𝙀𝙈𝙋𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈*\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙏𝙄𝙈𝙀 𝙉𝙐𝙈𝘽𝙀𝙍\n\n*✤ 🎟️ 1 = ${tempoDecretado} DÍA(S)*\n*✤ ${gata} ${rpgshop.emoticon('gold')}*\n\n*EXEMPLO: ${usedPrefix + command} 1*`,
fkontak,
m
)
if (isNaN(text))
return conn.reply(m.chat, `${mg}𝙎𝙊𝙇𝙊 𝙎𝙀 𝘼𝘾𝙀𝙋𝙏𝘼 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n𝙊𝙉𝙇𝙔 𝙉𝙐𝙈𝘽𝙀𝙍𝙎 𝘼𝘾𝘾𝙀𝙋𝙏𝙀𝘿\n\n*EXEMPLO: ${usedPrefix + command} 1*`, fkontak, m)
if (user.gold < gata)
return conn.reply(
m.chat,
`${ag}𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 *${rpgshop.emoticon('gold')}* 𝙋𝘼𝙍𝘼 𝘼𝘿𝙌𝙐𝙄𝙍𝙄𝙍 🎟️ 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝘾𝙊𝙈𝙋𝙍𝙀 ${rpgshopp.emoticon('gold')} 𝙀𝙉 𝙇𝘼 𝙏𝙄𝙀𝙉𝘿𝘼 𝙐𝙎𝘼𝙉𝘿𝙊 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}buy* 𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙑𝙀𝙉𝘿𝙀𝙍 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙂𝘼𝙉𝘼𝙉𝘾𝙄𝘼𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}sell*`,
fkontak,
m
)
user.gold -= gata * text

var tempo = 259200000 * text //180000 3min | 900000 15min | 1800000 30min | 3600000 1h | 10800000 3h | 25200000 7h | 86400000 24h | 259200000 3d
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tempo
else user.premiumTime = now + tempo
user.premium = true
const imgpre = [
'https://logowiki.net/wp-content/uploads/imgp/Premium-Logo-1-5365.jpg',
'https://i.imgur.com/oUAGYc2.jpg',
'https://i.imgur.com/i0pccuo.jpg'
]

await conn.reply(
m.chat,
`${eg}*╭┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╮*
*┃🎟️ 𝙐𝙎𝙏𝙀𝘿 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝙋𝙍𝙀𝙈𝙄𝙐𝙈!!!*
*┃*
*┃✨ 𝙉𝙊𝙈𝘽𝙍𝙀 : 𝙐𝙎𝙀𝙍*
*┃» ${user.name}*
*┃💰 𝙋𝘼𝙂𝙊 : 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 »  -${gata * text} ${rpgshopp.emoticon('limit')}*
*┃👝 𝙏𝙀𝙉𝙄𝘼 » ${user.limit + gata} ${rpgshopp.emoticon('limit')}*
*┃🛄 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼𝙉 » ${user.limit} ${rpgshopp.emoticon('limit')}*
*┃🕐 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 » ${tempoPremium} min*
*┃📉 𝙏𝙄𝙈𝙀𝙍 » ${user.premiumTime - now} seg*
*╰┈┈┈┈┈◈ 🌟 ◈┈┈┈┈┈╯*\n\n😻 *Ahora tiene Premium por lo tanto no va tener límites.*\n\n*Now you have Premium so there will be no limits.*\n\n${wm}`,
fkontak,
{mentions: [aa]}
)
}

//┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

if (command) {
switch (template) {
case 'premium':
case 'vip':
case 'prem':
case 'pass':
case 'pase':
await conn.reply(
m.chat,
`${htki} *🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🎟️* ${htka}\n\n🌟 𝗖𝗢𝗠𝗣𝗥𝗔 𝗨𝗡 𝗧𝗜𝗣𝗢 𝗗𝗘 𝗣𝗔𝗦𝗘 𝗣𝗔𝗥𝗔 𝗦𝗘𝗥 𝗨𝗡 𝗨𝗦𝗨𝗔𝗥𝗜𝗢(𝗔) 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!!!\n\n𝗕𝗨𝗬 𝗔 𝗧𝗬𝗣𝗘 𝗢𝗙 𝗣𝗔𝗦𝗦 𝗧𝗢 𝗕𝗘𝗖𝗢𝗠𝗘 𝗔 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗨𝗦𝗘𝗥!!!\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓵ : 𝗣𝗔𝗦𝗦 ⓵\n✪${usedPrefix}prem1 1\n✪ 𝗣𝗮𝘀𝗲 𝗕𝗮𝘀𝗶𝗰𝗼 : 𝗕𝗮𝘀𝗶𝗰 𝗣𝗮𝘀𝘀\n✪ 15 ${rpgshop.emoticon('limit')} ➟ 5 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n🌀 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓶ : 𝗣𝗔𝗦𝗦 ⓶\n✪${usedPrefix}prem2 1\n✪ 𝗣𝗮𝘀𝗲 𝗧𝗼𝗿𝗿𝗲 𝗱𝗲 𝗘𝗻𝗰𝗮𝗻𝘁𝗼 : 𝗖𝗵𝗮𝗿𝗺 𝗣𝗮𝘀𝘀\n✪ 35 ${rpgshop.emoticon('kyubi')} ➟ 15 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n💚 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓷ : 𝗣𝗔𝗦𝗦 ⓷\n✪${usedPrefix}prem3 1\n✪ 𝗣𝗮𝘀𝗲 𝗩𝗲𝗿𝗱𝘂𝘇𝗰𝗼 : 𝗚𝗿𝗲𝗲𝗻𝗶𝘀𝗵 𝗣𝗮𝘀𝘀\n✪ 25 ${rpgshop.emoticon('emerald')} ➟ 30 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n🗑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓸ : 𝗣𝗔𝗦𝗦 ⓸\n✪${usedPrefix}prem4 1\n✪ 𝗣𝗮𝘀𝗲 𝗥𝗲𝘀𝗶𝗱𝘂𝗼𝘀 𝗘𝗖𝗢 : 𝗘𝗖𝗢 𝗪𝗮𝘀𝘁𝗲 𝗣𝗮𝘀𝘀\n✪ 50 ${rpgshop.emoticon('trash')} ➟ 1 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n♦️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓹ : 𝗣𝗔𝗦𝗦 ⓹\n${usedPrefix}prem5 1\n✪ 𝗣𝗮𝘀𝗲 𝗖𝗮𝘇𝗮 𝗕𝗿𝗶𝗹𝗹𝗮𝗻𝘁𝗲 : 𝗕𝗿𝗶𝗹𝗹𝗶𝗮𝗻𝘁 𝗛𝘂𝗻𝘁 𝗣𝗮𝘀𝘀\n✪ 40 ${rpgshop.emoticon('berlian')} ➟ 3 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n🪙 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓺ : 𝗣𝗔𝗦𝗦 ⓺\n${usedPrefix}prem6 1\n✪ 𝗣𝗮𝘀𝗲 𝗔𝗺𝗼 𝗱𝗲𝗹 𝗖𝗿𝗶𝗽𝘁𝗼 : 𝗖𝗿𝘆𝗽𝘁𝗼 𝗠𝗮𝘀𝘁𝗲𝗿 𝗣𝗮𝘀𝘀\n✪ 70 ${rpgshop.emoticon('joincount')} ➟ 7 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n💎+ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓻ : 𝗣𝗔𝗦𝗦 ⓻\n${usedPrefix}prem7 1\n 𝗣𝗮𝘀𝗲 𝗚𝗲𝗺𝗮 𝗣𝗹𝘂𝘀 : 𝗚𝗲𝗺 𝗣𝗹𝘂𝘀 𝗣𝗮𝘀𝘀\n✪ 65 ${rpgshop.emoticon('diamond')} ➟ 24 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n👑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓼ : 𝗣𝗔𝗦𝗦 ⓼\n${usedPrefix}prem8 1\n✪ 𝗣𝗮𝘀𝗲 𝗧𝗶𝗲𝗺𝗽𝗼 𝗱𝗲 𝗢𝗿𝗼 : 𝗚𝗼𝗹𝗱𝗲𝗻 𝗧𝗶𝗺𝗲 𝗣𝗮𝘀𝘀\n✪ 80 ${rpgshop.emoticon('gold')} ➟ 3 d 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n\n┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅\n\n${wm}`,
fkontak,
{mentions: [aa]}
)
/*const sections = [{
title: comienzo + ' 🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 🎟️ ' + fin,
rows: [
{title: "💎 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓵ : 𝗣𝗔𝗦𝗦 ⓵", rowId: `${usedPrefix}prem1 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗕𝗮𝘀𝗶𝗰𝗼 : 𝗕𝗮𝘀𝗶𝗰 𝗣𝗮𝘀𝘀\n✪ 15 ${rpgshop.emoticon('limit')} ➟ 5 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🌀 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓶ : 𝗣𝗔𝗦𝗦 ⓶", rowId: `${usedPrefix}prem2 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗧𝗼𝗿𝗿𝗲 𝗱𝗲 𝗘𝗻𝗰𝗮𝗻𝘁𝗼 : 𝗖𝗵𝗮𝗿𝗺 𝗣𝗮𝘀𝘀\n✪ 35 ${rpgshop.emoticon('kyubi')} ➟ 15 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "💚 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓷ : 𝗣𝗔𝗦𝗦 ⓷", rowId: `${usedPrefix}prem3 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗩𝗲𝗿𝗱𝘂𝘇𝗰𝗼 : 𝗚𝗿𝗲𝗲𝗻𝗶𝘀𝗵 𝗣𝗮𝘀𝘀\n✪ 25 ${rpgshop.emoticon('emerald')} ➟ 30 min 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🗑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓸ : 𝗣𝗔𝗦𝗦 ⓸", rowId: `${usedPrefix}prem4 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗥𝗲𝘀𝗶𝗱𝘂𝗼𝘀 𝗘𝗖𝗢 : 𝗘𝗖𝗢 𝗪𝗮𝘀𝘁𝗲 𝗣𝗮𝘀𝘀\n✪ 50 ${rpgshop.emoticon('trash')} ➟ 1 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "♦️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓹ : 𝗣𝗔𝗦𝗦 ⓹", rowId: `${usedPrefix}prem5 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗖𝗮𝘇𝗮 𝗕𝗿𝗶𝗹𝗹𝗮𝗻𝘁𝗲 : 𝗕𝗿𝗶𝗹𝗹𝗶𝗮𝗻𝘁 𝗛𝘂𝗻𝘁 𝗣𝗮𝘀𝘀\n✪ 40 ${rpgshop.emoticon('berlian')} ➟ 3 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "🪙 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓺ : 𝗣𝗔𝗦𝗦 ⓺", rowId: `${usedPrefix}prem6 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗔𝗺𝗼 𝗱𝗲𝗹 𝗖𝗿𝗶𝗽𝘁𝗼 : 𝗖𝗿𝘆𝗽𝘁𝗼 𝗠𝗮𝘀𝘁𝗲𝗿 𝗣𝗮𝘀𝘀\n✪ 70 ${rpgshop.emoticon('joincount')} ➟ 7 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "💎+ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓻ : 𝗣𝗔𝗦𝗦 ⓻", rowId: `${usedPrefix}prem7 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗚𝗲𝗺𝗮 𝗣𝗹𝘂𝘀 : 𝗚𝗲𝗺 𝗣𝗹𝘂𝘀 𝗣𝗮𝘀𝘀\n✪ 65 ${rpgshop.emoticon('diamond')} ➟ 24 h 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`},
{title: "👑 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - 𝗖𝗟𝗔𝗦𝗘 ⓼ : 𝗣𝗔𝗦𝗦 ⓼", rowId: `${usedPrefix}prem8 1`, description: `✪ 𝗣𝗮𝘀𝗲 𝗧𝗶𝗲𝗺𝗽𝗼 𝗱𝗲 𝗢𝗿𝗼 : 𝗚𝗼𝗹𝗱𝗲𝗻 𝗧𝗶𝗺𝗲 𝗣𝗮𝘀𝘀\n✪ 80 ${rpgshop.emoticon('gold')} ➟ 3 d 𝗣𝗿𝗲𝗺𝗶𝘂𝗺\n`}
]},{
title: comienzo + ' 🌟 𝙄𝙉𝙁𝙊 𝙋𝙍𝙀𝙈𝙄𝙐𝙈 🌟 ' + fin,
rows: [
{title: "🎟️ 𝗨 𝗦 𝗨 𝗔 𝗥 𝗜 𝗢 𝗦   𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠", rowId: usedPrefix + 'listprem'},
{title: "🏆 𝗧 𝗢 𝗣   𝗠 𝗨 𝗡 𝗗 𝗜 𝗔 𝗟", rowId: usedPrefix + 'top'},
{title: "🚀 𝗗 𝗜 𝗦 𝗙 𝗥 𝗨 𝗧 𝗔 𝗥   𝗣 𝗥𝗘 𝗠 𝗜 𝗨 𝗠", rowId: usedPrefix + 'allmenu'}
	
]}]

const listMessage = {
  text: `🌟 𝗖𝗢𝗠𝗣𝗥𝗔 𝗨𝗡 𝗧𝗜𝗣𝗢 𝗗𝗘 𝗣𝗔𝗦𝗘 𝗣𝗔𝗥𝗔 𝗦𝗘𝗥 𝗨𝗡 𝗨𝗦𝗨𝗔𝗥𝗜𝗢(𝗔) 𝗣𝗥𝗘𝗠𝗜𝗨𝗠!!!\n\n𝗕𝗨𝗬 𝗔 𝗧𝗬𝗣𝗘 𝗢𝗙 𝗣𝗔𝗦𝗦 𝗧𝗢 𝗕𝗘𝗖𝗢𝗠𝗘 𝗔 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗨𝗦𝗘𝗥!!!`,
  footer: global.wm,
  title: `${htki} *🎟️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🎟️* ${htka}`,
  buttonText: `🎟️ 𝗦𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})*/
break
}
}
}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(comprar|prem1|prem2|prem3|prem4|prem5|prem6|prem7|prem8|premium|vip|prem|pass|pase)$/i

export default handler
