let handler = async (m, {conn}) => {
let dados = [
'https://tinyurl.com/gdd01',
'https://tinyurl.com/gdd02',
'https://tinyurl.com/gdd003',
'https://tinyurl.com/gdd004',
'https://tinyurl.com/gdd05',
'https://tinyurl.com/gdd006'
]
let url = dados[Math.floor(Math.random() * dados.length)]
let fkontak = {
key: {participants: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false, id: 'Halo'},
message: {
contactMessage: {
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}
},
participant: '0@s.whatsapp.net'
}
//let dir = `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`
await conn.reply(
m.chat,
`${lenguajeGB['smsAvisoEG']()}𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙀𝙎𝙋𝙀𝙍𝙀, 𝙎𝙐 𝘿𝘼𝘿𝙊 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘾𝙍𝙀𝘼𝙉𝘿𝙊\n\n𝙋𝙇𝙀𝘼𝙎𝙀 𝙒𝘼𝙄𝙏, 𝙔𝙊𝙐𝙍 𝘿𝙄𝘾𝙀 𝙄𝙎 𝘽𝙀𝙄𝙉𝙂 𝘾𝙍𝙀𝘼𝙏𝙀𝘿`,
fkontak,
m
)
conn.sendFile(m.chat, url, 'erro.webp', null, m, {asSticker: true})
}
handler.command = ['dado', 'dados', 'dadu']
export default handler
