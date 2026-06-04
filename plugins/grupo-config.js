//Código elaborado por: https://github.com/elrebelde21

let handler = async (m, {conn, args, usedPrefix, command, isProprietário, text}) => {
let groupId = m.isGroup ? m.chat : null

if (!m.isGroup && !isProprietário) return m.reply('Solo el owner puede usar este comando en privado.')
let identifier, action, target
if (!m.isGroup && isProprietário) {
if (args.length < 2)
throw `${lenguajeGB['smsAvisoMG']()}\n\n*╭━[ EN GRUPOS ]━⬣*\n*┃➥ ${usedPrefix + command} abrir*\n*┃➥ ${usedPrefix + command} cerrar*\n*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*\n\n*╭━[ PRIVADO (OWNER) ]━⬣*\n*┃➥ ${usedPrefix + command} id [ID] - abrir\n*┃➥ ${usedPrefix + command} link [URL] - cerrar\n*┃➥ ${usedPrefix + command} [URL] - cerrar\n*┃➥ ${usedPrefix + command} id [ID] - daradmin +número\n*┃➥ ${usedPrefix + command} id [ID] - aprobar + numero\n*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*`

if (args[0].startsWith('id')) {
identifier = args[1]
action = args[2]?.replace('-', '').trim().toLowerCase()
target = args[3]?.replace('+', '') + '@s.whatsapp.net'
groupId = identifier
} else if (args[0].match(/chat\.whatsapp\.com/)) {
identifier = args[0]
if (args[1] === '-') {
action = args[2]?.trim().toLowerCase()
target = args[3]?.replace('+', '') + '@s.whatsapp.net'
} else {
action = args[1]?.replace('-', '').trim().toLowerCase()
target = args[2]?.replace('+', '') + '@s.whatsapp.net'
}
const inviteCode = identifier.match(
/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:invite\/|joinchat\/)?([0-9A-Za-z]{22,24})/i
)?.[1]
if (!inviteCode) throw `${lenguajeGB['smsAvisoMG']()} Link inválido. Usa un link de WhatsApp válido.`
try {
const inviteInfo = await conn.groupGetInviteInfo(inviteCode)
groupId = inviteInfo.id
} catch (e) {
throw `${lenguajeGB['smsAvisoMG']()} No se pudo obtener informação del grupo. Verifica el link o que el bot tenga acceso.`
}
} else if (args[0] === 'link') {
identifier = args[1]
if (args[2] === '-') {
action = args[3]?.trim().toLowerCase()
target = args[4]?.replace('+', '') + '@s.whatsapp.net'
} else {
action = args[2]?.replace('-', '').trim().toLowerCase()
target = args[3]?.replace('+', '') + '@s.whatsapp.net'
}
if (!identifier.match(/chat\.whatsapp\.com/)) {
throw `${lenguajeGB['smsAvisoMG']()} Debes proporcionar un link válido.`
}
const inviteCode = identifier.match(
/(?:https:\/\/)?(?:www\.)?(?:chat\.|wa\.)?whatsapp\.com\/(?:invite\/|joinchat\/)?([0-9A-Za-z]{22,24})/i
)?.[1]
if (!inviteCode) throw `${lenguajeGB['smsAvisoMG']()} Link inválido. Usa un link de WhatsApp válido.`
try {
const inviteInfo = await conn.groupGetInviteInfo(inviteCode)
groupId = inviteInfo.id
} catch (e) {
throw `${lenguajeGB['smsAvisoMG']()} No se pudo obtener informação del grupo. Verifica el link o que el bot tenga acceso.`
}
} else {
throw `${lenguajeGB['smsAvisoMG']()} Usa la "id" o "link" como primer argumento, o pasa directamente un link válido.`
}
} else if (m.isGroup) {
action = args[0]?.toLowerCase()
target = args[1]?.replace(/@/, '') + '@s.whatsapp.net'
}

if (!groupId) return m.reply(`${lenguajeGB['smsAvisoMG']()} Debes estar en un grupo o especificar un ID/link en privado.`)
const botId = conn.user.jid
const groupMetadata = await conn.groupMetadata(groupId)
const isBotAdmin = groupMetadata.participants.some((p) => p.id === botId && (p.admin === 'admin' || p.admin === 'superadmin'))
if (!isBotAdmin) return m.reply(`${lenguajeGB['smsAvisoMG']()} El bot debe ser admin para ejecutar este comando.`)
if (!action) throw `${lenguajeGB['smsAvisoMG']()} Debes especificar una acción (abrir, cerrar, daradmin, etc.).`

switch (action) {
case 'abrir':
case 'open':
case 'abierto':
await conn.groupSettingUpdate(groupId, 'not_announcement')
m.reply(`${lenguajeGB['smsAvisoEG']()}${mid.smsGrup}`)
break

case 'cerrar':
case 'close':
case 'cerrado':
await conn.groupSettingUpdate(groupId, 'announcement')
m.reply(`${lenguajeGB['smsAvisoEG']()}${mid.smsGrup2}`)
break

case 'addadmin':
case 'promote':
case 'daradmin':
if (!target) throw `${lenguajeGB['smsAvisoMG']()} Especifica un número (ejemplo: - daradmin +51987654321) o menciona en grupo.`
await conn.groupParticipantsUpdate(groupId, [target], 'promote')
m.reply(`✅ @${target.split('@')[0]} ahora es admin.`)
break

case 'removeadmin':
case 'demote':
case 'quitaradmin':
if (!target) throw `${lenguajeGB['smsAvisoMG']()} Especifica un número (ejemplo: - quitaradmin +51987654321) o menciona en grupo.`
await conn.groupParticipantsUpdate(groupId, [target], 'demote')
m.reply(`✅ @${target.split('@')[0]} ya no es admin.`)
break

case 'kick':
case 'remover':
if (!target) throw `${lenguajeGB['smsAvisoMG']()} Especifica un número (ejemplo: - remover +51987654321) o menciona en grupo.`
await conn.groupParticipantsUpdate(groupId, [target], 'remove')
m.reply(`🗑️ @${target.split('@')[0]} ha sido removido del grupo.`)
break

case 'aprobar':
if (!target) throw `${lenguajeGB['smsAvisoMG']()} Especifica un número (ejemplo: - aprobar +51987654321).`
await conn.groupRequestParticipantsUpdate(groupId, [target], 'approve')
m.reply(`@${target.split('@')[0]} usuário has sido aprobado el grupo.`)
break

default:
throw `${lenguajeGB['smsAvisoMG']()}\n\n*╭━[ EN GRUPOS ]━⬣*\n*┃➥ ${usedPrefix + command} abrir*\n*┃➥ ${usedPrefix + command} cerrar*\n*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*\n\n*╭━[ PRIVADO (OWNER) ]━⬣*\n*┃➥ ${usedPrefix + command} id [ID] - abrir\n*┃➥ ${usedPrefix + command} link [URL] - cerrar\n*┃➥ ${usedPrefix + command} [URL] - cerrar\n*┃➥ ${usedPrefix + command} id [ID] - daradmin +número\n*┃➥ ${usedPrefix + command} id [ID] - aprobar + numero\n*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*`
}
}
handler.help = ['group open/close', 'grupo abrir/cerrar', 'grupo aprobar +number']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.exp = 200

export default handler
