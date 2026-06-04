import moment from 'moment-timezone'
import _ from 'lodash'

const handler = async (m, {conn}) => {
let who = m.isGroup ? _.get(m, 'mentionedJid[0]', m.quoted?.sender || m.sender) : m.sender
try {
let bios = await conn.fetchStatus(who)
bios = _.castArray(bios)
let messages = _.map(bios, (bio) => {
let setAt = moment.utc(bio.setAt, 'YYYY-MM-DDTHH:mm:ssZ').format('YYYY-MM-DD') || ''
return `*Usuário:* ${bio.user?.split('@')[0] || ''}\n*Estado:* ${bio.status || ''}\n*Fecha de actualización:* ${setAt}`
}).join('\n\n')
await conn.reply(m.chat, messages, m)
} catch (erro) {
throw `Ocurrió un erro: ${erro.message}`
}
}
handler.command = /^(getb?io)$/i
export default handler
