const handler = async (m, {conn, text, usedPrefix, command}) => {
const settings = global.db.data.settings[conn.user.jid] || {}
if (!('prefix' in settings)) settings.prefix = opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®&.\\-.@' // Prefijos por defecto
const currentPrefix = settings.prefix || 'ninguno'

if (!text)
throw `${lenguajeGB['smsAvisoMG']()} Uso: ${usedPrefix + command} [prefijos] para establecer\n${usedPrefix + command} none para sin prefijo\n${usedPrefix + command} del [prefijo] para remover uno.\nEj: ${usedPrefix + command} 🌟\n${usedPrefix + command} del /\n\nPrefijos actuales: [ ${currentPrefix} ]`
const args = text.trim().split(' ')
const action = args[0].toLowerCase()

if (action === 'none') {
if (!settings.prefix) {
await m.reply(`${lenguajeGB['smsAvisoFG']()} *El bot ya está configurado sin prefijo.*`)
return
}
settings.prefix = null // Sin prefijos
global.db.data.settings[conn.user.jid] = settings
await m.reply(`${lenguajeGB['smsAvisoEG']()} *Todos los prefijos han sido removidos. Los comandos ahora funcionarán sin prefijo.*`)
} else if (action === 'del') {
const prefixToDelete = args[1]
if (!prefixToDelete) {
throw `${lenguajeGB['smsAvisoMG']()} Especifique el prefijo a remover. Ej: ${usedPrefix + command} del /`
}
if (!settings.prefix) {
await m.reply(`${lenguajeGB['smsAvisoFG']()} *No hay prefijos configurados para remover.*`)
return
}
if (!settings.prefix.includes(prefixToDelete)) {
await m.reply(`${lenguajeGB['smsAvisoFG']()} *El prefijo [ ${prefixToDelete} ] no está en la lista actual.*`)
return
}
settings.prefix = settings.prefix.replace(prefixToDelete, '') // Elimina el prefijo específico
if (settings.prefix === '') settings.prefix = null
global.db.data.settings[conn.user.jid] = settings
const updatedPrefix = settings.prefix || 'ninguno'
await m.reply(`${lenguajeGB['smsAvisoEG']()} *El prefijo [ ${prefixToDelete} ] ha sido removido. Prefijos actuales: [ ${updatedPrefix} ]*`)
} else {
const newPrefix = text
if (settings.prefix === newPrefix) {
await m.reply(`${lenguajeGB['smsAvisoFG']()} *Los prefijos [ ${newPrefix} ] ya están establecidos.*`)
return
}
settings.prefix = newPrefix
global.db.data.settings[conn.user.jid] = settings
await m.reply(`${lenguajeGB['smsAvisoEG']()} *Los prefijos del bot se establecieron a:* [ ${newPrefix} ]`)
}
}

handler.help = ['setprefix'].map((v) => v + ' [prefijos | none | del prefijo]')
handler.tags = ['owner']
handler.command = /^(setprefix)$/i
handler.owner = true

export default handler
