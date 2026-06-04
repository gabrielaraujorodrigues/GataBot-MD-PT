let numerosPrefijos, conteúdo, reply

const handler = async (m, {conn, command, text, usedPrefix, isProprietário, isRProprietário, isAdmin}) => {
if (!isProprietário || !isRProprietário || !isAdmin) return m.reply(mid.mAviso + '*No tienes permisos para usar este comando*')

if (!text || !/\d/.test(text)) {
m.reply(
mid.mInfo +
`Agrega el prefijo del código de país, etiqueta o escribe el número de un usuário específico.\n\n> Si son varios, sepáralos por coma (,)\n\n*Ejemplo:*\n- *${usedPrefix + command}* +57\n- *${usedPrefix + command}* +57, +212, @tag, +num\n\n${mid.mAviso}> *Al configurar esto, se removerán los usuários con prefijos configurados o números específicos; ya sea cuando alguien ingrese o cuando escriba en el grupo*`
)
return
}
await obtenerPrefijos(text)

let chat = global.db.data.chats[m.chat]
if (chat.sCondition && chat.sCondition.length > 0) {
reply = (
await conn.reply(
m.chat,
mid.mInfo +
`> *Hemos encontrado prefijos/números ya configurados*
*Reciente:* \`\`\`${chat.sCondition.map((prefijo) => `+${prefijo}`).join(', ')}\`\`\`
*Existente:* \`\`\`${chat.sCondition.join(', ')}\`\`\`\n
*Responde a este mensagem eligiendo un número para:*
\`\`\`[1]\`\`\` \`Combinar\` _Se juntarán los prefijos existentes con los recientes._\n
\`\`\`[2]\`\`\` \`Reemplazar\` _Se removerán los prefijos existentes para agregar los recientes._\n
\`\`\`[3]\`\`\` \`Remover\` _Se usarán los prefijos predeterminados, eliminando los existentes y recientes._\n
\`\`\`[4]\`\`\` \`Cancelar\` _No se realizarán cambios._`,
m
)
).key.id
}

handler.before = async function (m, {conn, isProprietário, isRProprietário, isAdmin}) {
let chat = global.db.data.chats[m.chat]
if (!chat.sCondition || chat.sCondition.length === 0) {
return
}

if (m.quoted && m.quoted.id === reply && ['a', '1', 'combinar'].includes(m.text.toLowerCase())) {
if (!isProprietário || !isRProprietário || !isAdmin) return m.reply(mid.mErro + '*Esta acción no te corresponde realizar*')
chat.sCondition = [...new Set([...chat.sCondition, ...numerosPrefijos])]
const prefijosConSigno = chat.sCondition.map((prefijo) => `+${prefijo}`)
m.reply(mid.mExito + `Los prefijos se han *combinado* correctamente.\n\n*Nova configuração:* \`\`\`${prefijosConSigno.join(', ')}\`\`\``)
}

if (m.quoted && m.quoted.id === reply && ['b', '2', 'reemplazar'].includes(m.text.toLowerCase())) {
if (!isProprietário || !isRProprietário || !isAdmin) return m.reply('*Esta acción no te corresponde realizar*')
chat.sCondition = [...numerosPrefijos]
const prefijosConSigno = chat.sCondition.map((prefijo) => `+${prefijo}`)
m.reply(mid.mExito + `Los prefijos se han *reemplazado* correctamente.\n\n*Nova configuração:* \`\`\`${prefijosConSigno.join(', ')}\`\`\``)
}

if (m.quoted && m.quoted.id === reply && ['c', '3', 'remover'].includes(m.text.toLowerCase())) {
if (!isProprietário || !isRProprietário || !isAdmin) return m.reply('*Esta acción no te corresponde realizar*')
chat.sCondition = []
m.reply(mid.mExito + 'La configuração personalizada se ha 🗑️ *removido* correctamente.\n\n> *Se utilizará la configuração predeterminada*')
}

if (m.quoted && m.quoted.id === reply && ['d', '4', 'cancelar'].includes(m.text.toLowerCase())) {
if (!isProprietário || !isRProprietário || !isAdmin) return m.reply('*Esta acción no te corresponde realizar*')
m.reply('*No se realizaron cambios.*')
return
}
}
}

handler.command = /^(editarantifake|editarfake|editantifake|editfake)$/i
handler.register = true
handler.group = true
export default handler

async function obtenerPrefijos(input) {
const prefijos = input.split(',').map((prefijo) => prefijo.trim())
const prefijosLimpios = prefijos.map((prefijo) => {
let prefijoLimpio = prefijo.replace(/[^0-9+]/g, '')
if (prefijoLimpio.startsWith('+')) {
prefijoLimpio = prefijoLimpio.slice(1)
}
return `+${prefijoLimpio}`
})
numerosPrefijos = prefijosLimpios
.map((prefijo) => parseInt(prefijo.replace(/\D/g, ''), 10))
.filter((valor, indice, self) => self.indexOf(valor) === indice)

let chat = global.db.data.chats[m.chat]
if (!chat.sCondition) {
chat.sCondition = []
}
chat.sCondition.push(...numerosPrefijos)
chat.sCondition = [...new Set(chat.sCondition)]

const prefijosConSigno = chat.sCondition.map((prefijo) => `+${prefijo}`)
m.reply(mid.mExito + `Configuração guardada: *${prefijosConSigno.join(', ')}*\n\n> Puede agregar más si desea`)
}
