let handler = async (m, {conn}) => {
let user = global.db.data.users[m.sender]

let randomaku1 = `${Math.floor(Math.random() * 5)}`
let randomaku2 = `${Math.floor(Math.random() * 5)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 5)}`
let randomaku5 = `${Math.floor(Math.random() * 5)}`
let randomaku6 = `${Math.floor(Math.random() * 5)}`
let randomaku7 = `${Math.floor(Math.random() * 5)}`
let randomaku8 = `${Math.floor(Math.random() * 5)}`
let randomaku9 = `${Math.floor(Math.random() * 5)}`
let randomaku10 = `${Math.floor(Math.random() * 5)}`
let randomaku11 = `${Math.floor(Math.random() * 5)}`
let randomaku12 = `${Math.floor(Math.random() * 5)}`.trim()

let rbrb1 = randomaku1 * 1
let rbrb2 = randomaku2 * 1
let rbrb3 = randomaku3 * 1
let rbrb4 = randomaku4 * 1
let rbrb5 = randomaku5 * 1
let rbrb6 = randomaku6 * 1
let rbrb7 = randomaku7 * 1
let rbrb8 = randomaku8 * 1
let rbrb9 = randomaku9 * 1
let rbrb10 = randomaku10 * 1
let rbrb11 = randomaku11 * 1
let rbrb12 = randomaku12 * 1

let anti1 = `${rbrb1}`
let anti2 = `${rbrb2}`
let anti3 = `${rbrb3}`
let anti4 = `${rbrb4}`
let anti5 = `${rbrb5}`
let anti6 = `${rbrb6}`
let anti7 = `${rbrb7}`
let anti8 = `${rbrb8}`
let anti9 = `${rbrb9}`
let anti10 = `${rbrb10}`
let anti11 = `${rbrb11}`
let anti12 = `${rbrb12}`

let ar1 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`
let ar2 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`
let ar3 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`
let ar4 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`
let ar5 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`
let ar6 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`
let ar7 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`
let ar8 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`
let ar9 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`
let ar10 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`
let ar11 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`
let ar12 = `${['🪚', '⛏️', '🧨', '💣', '🔫', '🔪', '🗡️', '🏹', '🦾', '🥊', '🧹', '🔨', '🛻'].getRandom()}`

let hsl = `
*✧ Resultados de la caza ${conn.getName(m.sender)} ✧*

 *🐂 ${ar1} ${anti1}*			 *🐃 ${ar7} ${anti7}*
 *🐅 ${ar2} ${anti2}*			 *🐮 ${ar8} ${anti8}*
 *🐘 ${ar3} ${anti3}*			 *🐒 ${ar9} ${anti9}*
 *🐐 ${ar4} ${anti4}*			 *🐗 ${ar10} ${anti10}*
 *🐼 ${ar5} ${anti5}*			 *🐖 ${ar11} ${anti11}*
 *🐊 ${ar6} ${anti6}*		    *🐓 ${ar12} ${anti12}*`

global.db.data.users[m.sender].banteng += rbrb1
global.db.data.users[m.sender].harimau += rbrb2
global.db.data.users[m.sender].gajah += rbrb3
global.db.data.users[m.sender].kambing += rbrb4
global.db.data.users[m.sender].panda += rbrb5
global.db.data.users[m.sender].buaya += rbrb6
global.db.data.users[m.sender].kerbau += rbrb7
global.db.data.users[m.sender].sapi += rbrb8
global.db.data.users[m.sender].monyet += rbrb9
global.db.data.users[m.sender].babihutan += rbrb10
global.db.data.users[m.sender].babi += rbrb11
global.db.data.users[m.sender].ayam += rbrb12

let time = global.db.data.users[m.sender].lastberburu + 2700000 //2700000 = 45 Minutos
if (new Date() - global.db.data.users[m.sender].lastberburu < 2700000)
return conn.reply(
m.chat,
`𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝘼 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙋𝘼𝙍𝘼 𝙇𝙐𝙀𝙂𝙊 𝙎𝙀𝙂𝙐𝙄𝙍 𝘾𝘼𝙕𝘼𝙉𝘿𝙊\n\n𝙋𝙇𝙀𝘼𝙎𝙀 𝙍𝙀𝙎𝙏 𝘼 𝙈𝙊𝙈𝙀𝙉𝙏 𝘼𝙉𝘿 𝙏𝙃𝙀𝙉 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝙀 𝙃𝙐𝙉𝙏𝙄𝙉𝙂\n\n⫹⫺ 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 ${clockString(time - new Date())}\n${wm}`,
fkontak,
m
)
//conn.sendButton(m.chat, `𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝘼 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙋𝘼𝙍𝘼 𝙇𝙐𝙀𝙂𝙊 𝙎𝙀𝙂𝙐𝙄𝙍 𝘾𝘼𝙕𝘼𝙉𝘿𝙊\n\n𝙋𝙇𝙀𝘼𝙎𝙀 𝙍𝙀𝙎𝙏 𝘼 𝙈𝙊𝙈𝙀𝙉𝙏 𝘼𝙉𝘿 𝙏𝙃𝙀𝙉 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝙀 𝙃𝙐𝙉𝙏𝙄𝙉𝙂`, `⫹⫺ 𝙏𝙄𝙀𝙈𝙋𝙊 : 𝙏𝙄𝙈𝙀 ${clockString(time - new Date())}\n${wm}`, null, [['🏞️ 𝘼𝙣𝙞𝙢𝙖𝙡𝙚𝙨 𝘾𝙖𝙥𝙩𝙪𝙧𝙖𝙙𝙤𝙨 ', '.kandang'],[`🎒 𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 | 𝙄𝙣𝙫𝙚𝙣𝙩𝙤𝙧𝙮`, `.inventario`]], fkontak, m)

//setTimeout(() => {
async function loading() {
var hawemod = [
`@${m.sender.split('@s.whatsapp.net')[0]} *${['Buscando implementos de caza...', 'Alistando todo para la caza!!', 'Estableciendo Lugar de la Caza...', 'PREPARANDO LUGAR DE CAZA!!'].getRandom()}*`,
`@${m.sender.split('@s.whatsapp.net')[0]} ${['Looking for hunting implements...', 'Getting everything ready for the hunt!!', 'Establishing Hunting Place...', 'PREPARING HUNTING PLACE!!'].getRandom()}`,
`@${m.sender.split('@s.whatsapp.net')[0]} *${['Armas lista para la Caza!!', 'Probando Armas 🔫 💣 🪓 🏹', 'CARROS PARA LA CAZA!! 🚗 🏍️ 🚜', 'TEMPO BUENO PARA LA CAZA 🧤'].getRandom()}*`,
`@${m.sender.split('@s.whatsapp.net')[0]} *${['OBJETIVO FIJADO 🎯', 'Carnada en Marcha 🍫 🍇 🍖', 'ANIMALES DETECTADOS!! 🐂 🐅 🐘 🐼', 'ANIMALES DETECTADOS!! 🐖 🐃 🐮 🐒'].getRandom()}*`
]

let {key} = await conn.sendMessage(
m.chat,
{
text: `@${m.sender.split('@s.whatsapp.net')[0]} *${['Buscando implementos de caza...', 'Alistando todo para la caza!!', 'Estableciendo Lugar de la Caza...', 'PREPARANDO LUGAR DE CAZA!!'].getRandom()}*`,
mentions: [m.sender]
},
{quoted: m}
)

for (let i = 0; i < hawemod.length; i++) {
await conn.sendMessage(m.chat, {text: hawemod[i], mentions: [m.sender], edit: key}, {quoted: m})
await new Promise((resolve) => setTimeout(resolve, 5000))
}

await conn.sendMessage(m.chat, {text: hsl, mentions: [m.sender], edit: key}, {quoted: m})
}
loading()
user.lastberburu = new Date() * 1
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = /^(hunt|berburu|caza(r)?)$/i
//handler.group = true
handler.register = true
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms, h, m, s})
return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':')
}

/*function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  */
