import {WAMessageStubType} from '@whiskeysockets/baileys'
import PhoneNumber from 'awesome-phonenumber'
import chalk from 'chalk'
import {watchFile} from 'fs'
import '../config.js'

const terminalImage = global.opts['img'] ? require('terminal-image') : ''
const urlRegex = (await import('url-regex-safe')).default({strict: false})
export default async function (m, conn = {user: {}}) {
let name_user
let _name = (await conn.getName(m.sender)) || 'Anónimo'
let sender =
PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international') === undefined
? ''
: PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international') +
(_name == PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international') ? '' : ' ~' + _name)
let chat = await conn.getName(m.chat)
let img
try {
if (global.opts['img']) img = /sticker|image/gi.test(m.mtype) ? await terminalImage.buffer(await m.download()) : false
} catch (e) {
console.erro(e)
}
let filesize =
(m.msg
? m.msg.vcard
? m.msg.vcard.length
: m.msg.fileLength
? m.msg.fileLength.low || m.msg.fileLength
: m.msg.axolotlSenderKeyDistributionMessage
? m.msg.axolotlSenderKeyDistributionMessage.length
: m.text
? m.text.length
: 0
: m.text
? m.text.length
: 0) || 0
let user = global.db.data.users[m.sender]
let me = PhoneNumber('+' + (conn.user?.jid).replace('@s.whatsapp.net', '')).getNumber('international')

name_user = m.messageStubParameters
.map((jid) => {
let usuário_info = conn.decodeJid(jid)
let name_info = conn.getName(jid)
return chalk.bold(`${name_info ? name_info : mid.idioma_code === 'es' ? 'Alguien' : 'Someone'}`)
})
.join(', ')

console.log(
`
╭━━━━━━━━━━━━━━𖡼
┃ ❖ ${chalk.white.bold('Bot:')} ${chalk.cyan.bold('%s')} 
┃ ❖ ${chalk.white.bold(mid.idioma_code === 'es' ? 'Horario:' : 'Schedule:')} ${chalk.black.bgGreen('%s')}
┃ ❖ ${chalk.white.bold(mid.idioma_code === 'es' ? 'Acción:' : 'Action:')} ${mid.idioma_code === 'es' ? await formatMessageStubType(m.messageStubType, name_user) : await formaTxtStub(WAMessageStubType[m.messageStubType])}
┃ ❖ ${chalk.white.bold(mid.idioma_code === 'es' ? 'Usuário:' : 'User:')} ${chalk.white('%s')} / ${chalk.bgMagentaBright.bold(user.role.replace(/\*/g, ''))} / Premium » ${user?.premiumTime > 0 ? '✅' : '❌'}
┃ ❖ ${chalk.white.bold(mid.idioma_code === 'es' ? 'Recursos:' : 'Resources:')} ${chalk.yellow('%s%s')}
┃ ❖ %s
┃ ❖ ${chalk.white.bold(mid.idioma_code === 'es' ? 'Peso del mensagem:' : 'Message weight:')} ${chalk.red('%s (%s %sB)')}
┃ ❖ ${chalk.white.bold(mid.idioma_code === 'es' ? 'Tipo de mensagem:' : 'Type of message')} ${chalk.bgBlueBright.bold('[%s]')}\n%s
╰━━━━━━━━━━━━━━𖡼`.trim(),

me + (conn.user.name == undefined ? '' : ' ~' + conn.user.name) + `${conn.user.jid == global.conn.user.jid ? '' : ' 【𝗚𝗕 - 𝗦𝗨𝗕 𝗕𝗢𝗧】'}`,
(m.messageTimestamp ? new Date(1000 * (m.messageTimestamp.low || m.messageTimestamp)) : new Date()).toTimeString(),
sender,
m ? '' : '',
`🆙 ${user.level} / ❇️ ${user.exp} / 💎 ${user.limit} / 🐱 ${user.money}`,
m.chat.includes('@s.whatsapp.net')
? `${chalk.white.bold(mid.idioma_code === 'es' ? 'Privado:' : 'Private')} ${chalk.greenBright(`${m.sender} ~${user.name || conn.getName(m.sender)}`)}`
: m.chat.includes('@g.us')
? `${chalk.white.bold(mid.idioma_code === 'es' ? 'Grupo:' : 'Group:')} ${chalk.magentaBright(`${m.chat} ~${chat}`)}`
: m.chat.includes('@newsletter')
? `${chalk.white.bold(mid.idioma_code === 'es' ? 'Canal:' : 'Channel:')} ${chalk.yellowBright(`${m.chat} ~${chat}`)}`
: '',
filesize,
filesize === 0 ? 0 : (filesize / 1009 ** Math.floor(Math.log(filesize) / Math.log(1000))).toFixed(1),
['', ...'KMGTP'][Math.floor(Math.log(filesize) / Math.log(1000))] || '',
mid.idioma_code === 'es' ? await formatMessageTypes(m.mtype) : (await formaTxt(m.mtype)) || 'Not specified', //m.mtype ? m.mtype : 'No especificado'  //? m.mtype.replace(/message$/i, '').replace('audio', m.msg.ptt ? 'PTT' : 'audio').replace(/^./, v => v.toUpperCase()) : ''
m.message?.extendedTextMessage?.contextInfo?.quotedMessage
? m.message?.extendedTextMessage?.contextInfo?.participant == m.sender
? '┃ ❖ ' + chalk.bold(`${conn.getName(m.sender) ?? user.name ?? 'Este usuário'}`) + ' respondió a su propio mensagem.'
: '┃ ❖ ' +
chalk.bold(`${conn.getName(m.sender) ?? user.name ?? 'Este usuário'}`) +
(!m.message?.extendedTextMessage?.contextInfo?.participant.includes('newsletter')
? ' respondió a ' +
chalk.bold(
`${conn.getName(m.message?.extendedTextMessage?.contextInfo?.participant) ?? m.message?.extendedTextMessage?.contextInfo?.participant ?? 'Usuário desconocido'}`
)
: ' envío mensagem en el canal')
: ''
)

if (img) console.log(img.trimEnd())
if (typeof m.text === 'string' && m.text) {
let log = m.text.replace(/\u200e+/g, '')

let mdRegex = /(?<=(?:^|[\s\n])\S?)(?:([*_~`])(?!`)(.+?)\1|```((?:.|[\n\r])+?)```|`([^`]+?)`)(?=\S?(?:[\s\n]|$))/g
    let mdFormat =
      (depth = 4) =>
      (_, type, text, monospace) => {
        let types = {
          _: 'italic',
          '*': 'bold',
          '~': 'strikethrough',
          '`': 'bgGray'
}
text = text || monospace
let formatted = !types[type] || depth < 1 ? text : chalk[types[type]](text.replace(/`/g, '').replace(mdRegex, mdFormat(depth - 1)))
        return formatted
      }
    log = log.replace(mdRegex, mdFormat(4))
    log = log
      .split('\n')
      .map((line) => {
        if (line.trim().startsWith('>')) {
          return chalk.bgGray.dim(line.replace(/^>/, '┃'))
        } else if (/^([1-9]|[1-9][0-9])\./.test(line.trim())) {
          return line.replace(/^(\d+)\./, (match, number) => {
            const padding = number.length === 1 ? '  ' : ' '
            return padding + number + '.'
          })
        } else if (/^[-*]\s/.test(line.trim())) {
          return line.replace(/^[*-]/, '  •')
        }
        return line
      })
      .join('\n')
    if (log.length < 1024)
      log = log.replace(urlRegex, (url, i, text) => {
        let end = url.length + i
        return i === 0 || end === text.length || (/^\s$/.test(text[end]) && /^\s$/.test(text[i - 1])) ? chalk.blueBright(url) : url
      })
    log = log.replace(mdRegex, mdFormat(4))
    if (m.mentionedJid) for (let user of m.mentionedJid) log = log.replace('@' + user.split`@`[0], chalk.blueBright('@' + (await conn.getName(user))))
    console.log(m.erro != null ? chalk.red(log) : m.isCommand ? chalk.yellow(log) : log)
  }

  if (m.messageStubParameters) {
    console.log(
      m.messageStubParameters
        .map((jid) => {
          jid = conn.decodeJid(jid)
          let name = conn.getName(jid)
          const phoneNumber = PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
          return name ? chalk.gray(`${phoneNumber} (${name})`) : ''
        })
        .filter(Boolean)
        .join(', ')
    )
  }

  if (/document/i.test(m.mtype)) console.log(`🗂️ ${m.msg.fileName || m.msg.displayName || 'Document'}`)
  else if (/ContactsArray/i.test(m.mtype)) console.log(`👨‍👩‍👧‍👦 ${' ' || ''}`)
  else if (/contact/i.test(m.mtype)) console.log(`👨 ${m.msg.displayName || ''}`)
  else if (/audio/i.test(m.mtype)) {
    const duration = m.msg.seconds
    console.log(
      `${m.msg.ptt ? '🎤ㅤ(PTT ' : '🎵ㅤ('}AUDIO) ${Math.floor(duration / 60)
.toString()
.padStart(2, 0)}:${(duration % 60).toString().padStart(2, 0)}`
    )
  }
  console.log()
}
let file = global.__filename(import.meta.url)
watchFile(file, () => {
  console.log(chalk.redBright("Update 'lib/print.j'"))
})

async function formatMessageStubType(messageStubType, name_user) {
  switch (messageStubType) {
    case 0:
      return 'Desconocido'
    case 1:
      return 'Revocado'
    case 2:
      return 'Texto cifrado'
    case 20:
      return 'Se ha creado un grupo'
    case 21:
      return 'Nombre del grupo modificado'
    case 22:
      return 'Se cambió la imagen del grupo'
    case 23:
      return 'Novo link del grupo'
    case 24:
      return 'Nova descrição del grupo'
    case 25:
      return 'Restricciones del grupo cambiada'
    case 26:
      return 'Se configuró quien puede enviar mensagems en el grupo'
    case 27:
      return `${name_user} se ha unido al grupo`
    case 28:
      return `${name_user} ha sido removido del grupo`
    case 29:
      return `${name_user} es novo admin. del grupo`
    case 30:
      return `${name_user} dejó de ser admin. del grupo`
    case 31:
      return `Se ha invitado a ${name_user} al grupo`
    case 32:
      return `${name_user} ha salido del grupo`
    case 145:
      return `Se configuró "aprobar miembros novo" en el grupo`
    case 171:
      return `Se configuró "agregar a otros miembros" en el grupo`
    default:
      return messageStubType //'Ninguna'
  }
}

async function formatMessageTypes(messageStubType, mid) {
  switch (messageStubType) {
    case 'conversation':
      return 'Conversación'
    case 'imageMessage':
      return 'Imagen'
    case 'contactMessage':
      return 'Contacto'
    case 'locationMessage':
      return 'Ubicación'
    case 'extendedTextMessage':
      return 'Texto'
    case 'documentMessage':
      return 'Documento'
    case 'audioMessage':
      return 'Audio'
    case 'videoMessage':
      return 'Video'
    case 'call':
      return 'Llamada'
    case 'chat':
      return 'Chat'
    case 'protocolMessage':
      return 'Cifrado'
    case 'contactsArrayMessage':
      return 'Lista de contactos'
    case 'highlyStructuredMessage':
      return 'Estructurado'
    case 'fastRatchetKeySenderKeyDistributionMessage':
      return 'Distribución de claves'
    case 'sendPaymentMessage':
      return 'Mensagem de pago'
    case 'liveLocationMessage':
      return 'Ubicación en vivo'
    case 'requestPaymentMessage':
      return 'Solicitar pago'
    case 'declinePaymentRequestMessage':
      return 'Rechazar solicitud de pago'
    case 'cancelPaymentRequestMessage':
      return 'Cancelar solicitud de pago'
    case 'templateMessage':
      return 'Mensagem de plantilla'
    case 'stickerMessage':
      return 'Sticker'
    case 'groupInviteMessage':
      return 'Invitación a grupo'
    case 'templateButtonReplyMessage':
      return 'Respuesta de botón de plantilla'
    case 'productMessage':
      return 'Producto'
    case 'deviceSentMessage':
      return 'Mensagem enviado por dispositivo'
    case 'messageContextInfo':
      return 'Contexto del mensagem'
    case 'listMessage':
      return 'Lista'
    case 'viewOnceMessage':
      return 'Mensagem de una sola vez'
    case 'orderMessage':
      return 'Pedido'
    case 'listResponseMessage':
      return 'Respuesta de lista'
    case 'ephemeralMessage':
      return 'Efímero'
    case 'invoiceMessage':
      return 'Factura'
    case 'buttonsMessage':
      return 'Botones'
    case 'buttonsResponseMessage':
      return 'Respuesta de botones'
    case 'paymentInviteMessage':
      return 'Invitación de pago'
    case 'interactiveMessage':
      return 'Interactivo'
    case 'reactionMessage':
      return 'Reacción'
    case 'stickerSyncRmrMessage':
      return 'Sincronización de sticker'
    case 'interactiveResponseMessage':
      return 'Respuesta interactiva'
    case 'pollCreationMessage':
      return 'Creación de encuesta'
    case 'pollUpdateMessage':
      return 'Actualización de encuesta'
    case 'keepInChatMessage':
      return 'Mensagem de mantener en chat'
    case 'documentWithCaptionMessage':
      return 'Documento con leyenda'
    case 'requestPhoneNumberMessage':
      return 'Solicitud de número de teléfono'
    case 'viewOnceMessageV2':
      return 'Mensagem de una sola vez v2'
    case 'encReactionMessage':
      return 'Reacción encriptada'
    case 'editedMessage':
      return 'Mensagem editado'
    case 'viewOnceMessageV2Extension':
      return 'Extensión de mensagem de una vista v2'
    case 'pollCreationMessageV2':
      return 'Creación de encuesta v2'
    case 'scheduledCallCreationMessage':
      return 'Llamada programada'
    case 'groupMentionedMessage':
      return 'Mención en grupo'
    case 'pinInChatMessage':
      return 'Mensagem fijado en chat'
    case 'pollCreationMessageV3':
      return 'Creación de encuesta v3'
    case 'scheduledCallEditMessage':
      return 'Edición de llamada programada'
    case 'ptvMessage':
      return 'Mensagem de PTV'
    case 'botInvokeMessage':
      return 'Invocación de bot'
    case 'callLogMesssage':
      return 'Registro de llamada'
    case 'messageHistoryBundle':
      return 'Paquete de historial de mensagems'
    case 'encCommentMessage':
      return 'Comentario encriptado'
    case 'bcallMessage':
      return 'Mensagem de llamada B'
    case 'lottieStickerMessage':
      return 'Mensagem de sticker Lottie'
    case 'eventMessage':
      return 'Evento'
    case 'commentMessage':
      return 'Comentario'
    case 'newsletterAdminInviteMessage':
      return 'Mensagem de invitación de administrador'
    case 'extendedTextMessageWithParentKey':
      return 'Mensagem de texto con clave principal'
    case 'placeholderMessage':
      return 'Marcador de posición'
    case 'encEventUpdateMessage':
      return 'Actualización de evento encriptado'
    default:
      return messageStubType || 'No especificado'
  }
}

async function formaTxtStub(messageType_) {
  let words = messageType_.split('_')
  let formattedMessage = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  formattedMessage = formattedMessage.join(' ')
  return formattedMessage
}

async function formaTxt(messageType) {
  let formattedMessage = messageType.charAt(0).toUpperCase() + messageType.slice(1)
  formattedMessage = formattedMessage.replace(/([A-Z])/g, ' $1').trim()
  return formattedMessage
}
