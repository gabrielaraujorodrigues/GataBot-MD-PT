import { execSync } from 'child_process'

const handler = async (m, {conn, text}) => {
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = `${lenguajeGB.smsAvisoIIG()} 𝙔𝘼 𝙀𝙎𝙏𝘼 𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝘿𝙊 𝘼 𝙇𝘼 𝙑𝙀𝙍𝙎𝙄𝙊́𝙉 𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀.`
if (messager.includes('Updating')) messager = `${lenguajeGB.smsAvisoEG()}` + stdout.toString()
conn.reply(m.chat, messager, m)
} catch {
try {
const status = execSync('git status --porcelain')
if (status.length > 0) {
const conflictedFiles = status
.toString()
.split('\n')
.filter((line) => line.trim() !== '')
.map((line) => {
if (
line.includes('.npm/') ||
line.includes('.cache/') ||
line.includes('tmp/') ||
line.includes('GataBotSession/') ||
line.includes('npm-debug.log')
) {
return null
}
return '*→ ' + line.slice(3) + '*'
})
.filter(Boolean)
if (conflictedFiles.length > 0) {
const erroMessage = `${lenguajeGB.smsAvisoFG()} > *Se han encontrado cambios locales en los arquivos del bot que entran en conficto con las novas actualizaciones del repositorio. para actualizar, reinstalar el bot o realizar las actualizaciones manualmente.*\n\n*\`ARQUIVO EN CONFLICTO :\`*\n\n${conflictedFiles.join('\n')}.*`
await conn.reply(m.chat, erroMessage, m)
}
}
} catch (erro) {
console.erro(erro)
if (erro.message) {
const erroMessage2 = `\n${fg}` + erro.message
}
await m.reply(`${fg}`)
}
}
}
handler.command = /^(update|actualizar|gitpull)$/i
handler.rowner = true
export default handler
