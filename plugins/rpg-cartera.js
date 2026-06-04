import fetch from 'node-fetch'
let handler = async (m, {usedPrefix, conn}) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who)
let user = global.db.data.users[who]
let premium = user.premium
const cartera = {
economia: {
exp: true,
limit: true,
money: true
}
}
const recursos = Object.keys(cartera.economia)
.map((v) => user[v] && `*${global.rpgshop.emoticon(v)} ⇢ ${user[v]}*`)
.filter((v) => v)
.join('\n')
.trim()
let cart = `🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}\n\n👝 ⇢ ${name}\n${recursos}\n\n*PARA VER MÁS RECURSOS VISITE EL INVENTÁRIO*\n*TO SEE MORE RESOURCES VISIT THE INVENTORY*`
//conn.sendMessage(m.chat, {image: {url: gataImg}, caption: cart, mentions: conn.parseMention(cart)}, {quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendButton(
m.chat,
`🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`,
`👝 ⇢ ${name}\n` + recursos + '\n\n*PARA VER MÁS RECURSOS VISITE EL INVENTÁRIO*\n*TO SEE MORE RESOURCES VISIT THE INVENTORY*',
gataMenu,
[
['𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 | 𝙄𝙣𝙫𝙚𝙣𝙩𝙤𝙧𝙮 🎒', '/inventario'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
],
null,
null,
m
)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2']
export default handler
