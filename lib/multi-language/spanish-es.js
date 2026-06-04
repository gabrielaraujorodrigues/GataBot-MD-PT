const MID_GB = {
idioma: 'Português',
idioma_code: 'es',

//main.js
methodCode1: 'MÉTODO DE VINCULAÇÃO',
methodCode2: 'COMO DESEJA SE CONECTAR?',
methodCode3: 'Opção',
methodCode4: 'Código QR',
methodCode5: 'Código de 8 dígitos.',
methodCode6: 'Escreva apenas o número da',
methodCode7: 'opção para se conectar.',
methodCode8: 'DICA',
methodCode9: 'Se usar Termux, Replit, Linux ou Windows',
methodCode10: 'Use estes comandos para execução direta:',
methodCode11: (chalk) =>
`NÃO SÃO PERMITIDOS NÚMEROS QUE NÃO SEJAM ${chalk.bold.greenBright('1')} O ${chalk.bold.greenBright('2')}, TAMBÉM NÃO LETRAS OU SÍMBOLOS ESPECIAIS.\n${chalk.bold.yellowBright('DICA: COPIE O NÚMERO DA OPÇÃO E COLE NO CONSOLE.')}`,
methodCode12: 'Inicia com código QR',
methodCode13: 'Inicia com código de 8 dígitos',
methodCode14: 'Início padrão com opções',
phNumber2: (chalk) =>
`Por favor, Insira o número do WhatsApp.\n${chalk.bold.yellowBright('DICA: Copie o número do WhatsApp e cole no console.')}\n${chalk.bold.yellowBright('Ejemplo: +593090909090')}\n${chalk.bold.magentaBright('---> ')}`,
pairingCode: 'CÓDIGO DE VINCULAÇÃO:',
mCodigoQR: `\n✅ ESCANEIE O CÓDIGO QR EXPIRA EM 45 SEGUNDOS`,
mConexion: `\n❒⸺⸺⸺⸺【• CONECTADO •】⸺⸺⸺⸺❒\n│\n│ 🟢 Conectado ao WhatsApp com sucesso.\n│\n❒⸺⸺⸺⸺【• CONECTADO •】⸺⸺⸺⸺❒`,
mConexionOFF: '\n❌𒌍 CONEXÃO SUBSTITUÍDA, POR FAVOR AGUARDE UM MOMENTO VOU REINICIAR...\nSE APARECER ERRO REINICIE COM: npm start',

//Alertas
mAdminTrue: '*Eres Admin. no habrá consecuencias* 🤭',
mAdmin: '*Debo de ser Admin. para poder remover*',
mProprietário: '*Si tienes permisos o eres proprietário/a, usa `#on restringir`*\n\n> _Si lo activas, las funções no se limitarán_',
mAntiDelete: '*Desactive la função anti remover usando `#off antiremover` para evitar reenvío de mensagems no deseados*',
mAviso: '> ⚠️ *AVISO 𓃠*\n\n',
mInfo: '> 📢 *INFORMAÇÃO 𓃠*\n\n',
mExito: '> ✅ *SUCESSO 𓃠*\n\n',
mErro: '> ❌ *ERRO 𓃠*\n\n',

//_allantilink.js
mTiktok: '*¡Não é permitido link do TikTok!*\n*Vou te remover*',
mYoutube: '*¡Não é permitido link do YouTube!*\n*Vou te remover*',
mTelegram: '*¡Não é permitido link do Telegram!*\n*Vou te remover*',
mFacebook: '*¡Não é permitido link do Facebook!*\n*Vou te remover*',
mInstagram: '*¡Não é permitido link do Instagram!*\n*Vou te remover*',
mX: '*¡Não é permitido link do X (Twitter)!*\n*Vou te remover*',
mDiscord: '*¡Não é permitido link do Discord!*\n*Vou te remover*',
mThreads: '*¡Não é permitido link do Threads!*\n*Vou te remover*',
mTwitch: '*¡Não é permitido link do Twitch!*\n*Vou te remover*',

//_antilink.js
mWhatsApp: '*¡Não é permitido este tipo de link do WhatsApp!*\n*Vou te remover*',

//_antilink2.js
mWhatsApp2: '*¡Não é permitido nenhum tipo de link!*\n*Vou te remover*',

//antiprivado.js
smsprivado: (m, cuentas) =>
`*@${m.sender.split`@`[0]} É proibido escrever no privado*\n\n> *Junte-se à comunidade GataBot para saber como você pode ter seu próprio Bot para WhatsApp*\n${cuentas}\n\n⚠️ \`\`\`Você será Bloqueado(a)\`\`\` ⚠️`,

//_anti-internacional.js
mFake: (m) => `✋ *¡O usuário @${m.sender.split`@`[0]} não está permitido neste grupo!*`,
mFake2: (user) => `🚫 *¡O usuário @${user.split`@`[0]} não é bem-vindo neste grupo!*`,

//antispam.js
smsNoSpam: 'SPAM DE MENSAGENS LEVE',
smsNoSpam1: (m, motive) => `*@${m.sender.split`@`[0]} NÃO PODE USAR COMANDOS POR 30 SEGUNDOS*\n\n*MOTIVO: ${motive}*`,
smsNoSpam2: 'SPAM DE MENSAGENS MODERADO',
smsNoSpam3: (m, motive) => `*@${m.sender.split`@`[0]} NÃO PODE USAR COMANDOS POR 1 MINUTO*\n\n*MOTIVO: ${motive}*`,
smsNoSpam4: 'SPAM DE MENSAGENS ALARMANTE',
smsNoSpam5: (m, motive) => `*@${m.sender.split`@`[0]} NÃO PODE USAR COMANDOS POR 2 MINUTOS*\n\n*MOTIVO: ${motive}*`,
smsNoSpam6: (mention, sender) => `*${mention} É PROIBIDO FAZER SPAM DE MENSAGENS!!*`,

//antitraba.js
smsAntiTraba: (m) => `El administrador @${m.sender.split('@')[0]} acabou de enviar um texto com muitos caracteres -.-!`,
smsAntiTraba2: '[ ! ] Foi detectada uma mensagem com muitos caracteres [ ! ]',
smsAntiTraba3: 'Marcar o chat como lido ✓',
smsAntiTraba4: (m, name) =>
`O número : wa.me/${m.sender.split('@')[0]}\n• Apelido : ${name}\n‼️Acabou de enviar um texto com muitos caracteres que pode causar falhas nos dispositivos`,

//_autodetec.js
smsAutodetec1: (usuário, m) =>
`*» ${usuário}*\n*𝙃𝘼 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊*\n\n🔰 *𝘼𝙃𝙊𝙍𝘼 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙎𝙀 𝙇𝙇𝘼𝙈𝘼:*\n*${m.messageStubParameters[0]}*`,
smsAutodetec2: (usuário, groupMetadata) => `*» ${usuário}*\n*𝙃𝘼 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝘿𝙀:*\n*${groupMetadata.subject}*`,
smsAutodetec3: (usuário, m) => `*» ${usuário}*\n*𝙃𝘼 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊́𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊\n🔰 *𝙉𝙐𝙀𝙑𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊́𝙉 𝙀𝙎:*`,
smsAutodetec4: (usuário, m, groupMetadata) =>
`🔒 ${usuário}*\n*𝙃𝘼 𝙋𝙀𝙍𝙈𝙄𝙏𝙄𝘿𝙊 𝙌𝙐𝙀 ${m.messageStubParameters[0] == 'on' ? '𝙎𝙊𝙇𝙊 𝘼𝘿𝙈𝙄𝙉𝙎' : '𝙏𝙊𝘿𝙊𝙎'} 𝙋𝙐𝙀𝘿𝘼𝙉 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝙍 ${groupMetadata.subject}*`,
smsAutodetec5: (groupMetadata, usuário) => `*𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 ${groupMetadata.subject} 𝙃𝘼 𝙎𝙄𝘿𝙊 𝙍𝙀𝙎𝙏𝘼𝘽𝙇𝙀𝘾𝙄𝘿𝙊 𝙋𝙊𝙍:*\n*» ${usuário}*`,
smsAutodetec6: (m) =>
`𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 *${m.messageStubParameters[0] == 'on' ? '𝙀𝙎𝙏𝘼 𝘾𝙀𝙍𝙍𝘼𝘿𝙊 🔒' : '𝙀𝙎𝙏𝘼 𝘼𝘽𝙄𝙀𝙍𝙏𝙊 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? '𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍' : '𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙏𝙊𝘿𝙊𝙎'} 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊*`,
smsAutodetec7: (m, usuário) => `@${m.messageStubParameters[0].split`@`[0]} 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n😼🫵𝘼𝘾𝘾𝙄𝙊𝙉 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍: ${usuário}`,
smsAutodetec8: (m, usuário) => `@${m.messageStubParameters[0].split`@`[0]} 𝘿𝙀𝙅𝘼 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊\n\n😼🫵𝘼𝘾𝘾𝙄𝙊𝙉 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍: ${usuário}`,
smsAutodetec9: (usuário, m) => `*» ${usuário}*\n*𝙃𝘼 𝘾𝘼𝙈𝘽𝙄𝘼𝘿𝙊 𝙇𝘼𝙎 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙇𝙊𝙎 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇𝙀𝙎 𝘼 : *@${m.messageStubParameters[0]}*`,
smsAutodetec10: (usuário, m) => `*» ${usuário}*\n𝙃𝘼 *𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝙊* 𝙇𝙊𝙎 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇`,

//_antitoxic.js
antitoxic1: (isToxic, m, user) =>
`☣️ *PALAVRA PROIBIDA* ☣️\n\n*@${m.sender.split`@`[0]}* A palavra \`(${isToxic})\` está proibida neste grupo!!\n\n⚠️ *Avisos:* \`${user.warn}/4\`\n\n> Se tiver 4 ou mais avisos será removido/a do grupo`,
antitoxic2: (isToxic, m) =>
`☣️ *PALAVRA PROIBIDA* ☣️\n\n*@${m.sender.split`@`[0]}* Você será removido/a por dizer \`(${isToxic})\`, você é tóxico/a no grupo!! 🚷`,

//_antiviewonce.js
antiviewonce: (type, fileSize, m, msg) =>
`🕵️‍♀️ *ANTI VER UNA VEZ* 🕵️\n
🚫 *No ocultar* ${type === 'imageMessage' ? '`Imagen` 📷' : type === 'videoMessage' ? '`Vídeo` 🎥' : type === 'audioMessage' ? '`Mensagem de voz` 🔊' : 'este mensagem'}
- *Tamaño:* \`\`\`${fileSize}\`\`\`
- *Usuário:* *@${m.sender.split('@')[0]}*
${msg[type].caption ? `- *Texto:* ${msg[type].caption}` : ''}`.trim(),

//informação
smsinfo: '💖 *Infórmate sobre las Novedades y recuerda tener la última versão.*',
name: '𝙉𝙊𝙈𝘽𝙍𝙀',
user: '𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼)',

//Descargar
smsYT1: '𝙏𝙄𝙏𝙐𝙇𝙊',
smsYT2: '𝘼𝙐𝙏𝙊𝙍(𝘼)',
smsYT3: '𝙇𝙀𝙏𝙍𝘼',
smsYT4: '𝙀𝙉𝙇𝘼𝘾𝙀:',
smsYT5: '𝘿𝙐𝙍𝘼𝘾𝙄𝙊́𝙉:',
smsYT6: '𝘼𝙍𝙏𝙄𝙎𝙏𝘼',
smsYT7: '𝘼́𝙇𝘽𝙐𝙈',
smsYT8: '𝙁𝙀𝘾𝙃𝘼',
smsYT9: '𝙂𝙀𝙉𝙀𝙍𝙊𝙎',
smsYT9: '𝙎𝙐𝘽𝙄𝘿𝙊',
smsYT10: '𝙑𝙄𝙎𝙏𝘼𝙎',
smsYT11: '𝙋𝙀𝙎𝙊',
smsYT12: '𝙏𝙄𝙋𝙊',
smsYT13: '𝘼𝙍𝙏𝙄𝙎𝙏𝘼',
smsYT14: '𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉',
smsYT15: '𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊',
smsinsta1: '𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙍𝙀𝙎',
smsinsta2: '𝙎𝙀𝙂𝙐𝙄𝘿𝙊𝙎',
smsinsta3: '𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘾𝙄𝙊𝙉𝙀𝙎',
smsinsta4: '𝘽𝙄𝙊𝙂𝙍𝘼𝙁Í𝘼',
smsinsta5: '𝙈𝙀 𝙂𝙐𝙎𝙏𝘼',

//descarga
smsYtlist: (usedPrefix) =>
`𝙋𝙐𝙀𝘿𝙀𝙎 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝘼𝙎 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼:\n${usedPrefix}video <numero>\n${usedPrefix}audio <numero>\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊:*`,
smsfb: '𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆',
smsfb2: '𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆',
smsfb3: '𝘼𝙇𝙂𝙊 𝙎𝘼𝙇𝙄𝙊 𝙈𝘼𝙇, 𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝙀 𝙐𝙎𝘼𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆',
smsgit: '𝙀𝙉𝙇𝘼𝘾𝙀 𝙉𝙊 𝙑𝘼𝙇𝙄𝘿𝙊. 𝘿𝙀𝘽𝙀 𝘿𝙀 𝙎𝙀𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙂𝙄𝙏𝙃𝙐𝘽',
smsgit2: '𝙀𝙉𝙑𝙄𝘼𝙉𝘿𝙊 𝘼𝙍𝘾𝙃𝙄𝙑𝙊, 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 🚀\n𝙎𝙄 𝙉𝙊 𝙇𝙀 𝙇𝙇𝙀𝙂𝘼 𝙀𝙇 𝘼𝙍𝘾𝙃𝙄𝙑𝙊 𝙀𝙎 𝘿𝙀𝘽𝙄𝘿𝙊 𝘼 𝙌𝙐𝙀 𝙀𝙇 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊 𝙀𝙎 𝙋𝙀𝙎𝘼𝘿𝙊. 🚀',
smsInsta: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝙊 𝙄𝙈𝘼𝙂𝙀𝙉\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊',
smsInsta2: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙇𝘼𝙎 𝙃𝙄𝙎𝙏𝙊𝙍𝙄𝘼𝙎\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊',
smsInsta3: '𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙄𝙉𝙑𝘼́𝙇𝙄𝘿𝙊𝙎 𝙊 𝙎𝙄𝙉 𝙃𝙄𝙎𝙏𝙊𝙍𝙄𝘼𝙎',
smsFire: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀.',
smsApk: '*ESCRIBA EL NOMBRE DEL APK*',
smsApk2: '𝙐𝙇𝙏𝙄𝙈𝘼 𝘼𝘾𝙏𝙐𝙇𝙄𝙕𝘼𝘾𝙄𝙊𝙉',
smsApk3: '𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝘿𝙊 𝘼𝙋𝙆𝙎',
smsApk4: 'EL APK ES MUY PESADO.',
smsTikTok: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙎𝙄𝙉 𝙐𝙎𝘼𝙍 (@)\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊',
smsTikTok1: '𝙁𝙊𝙏𝙊 𝘿𝙀 𝙋𝙀𝙍𝙁𝙄𝙇',
smsTikTok2: '𝘿𝙀𝘽𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊',
smsTikTok3: '𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙀𝙎 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊, 𝙋𝙍𝙊𝘾𝙐𝙍𝙀 𝙌𝙐𝙀 𝙀𝙎𝙏𝙀 𝙑𝘼𝙇𝙄𝘿𝙊',
smsTikTok4: '𝙋𝙍𝙊𝙉𝙏𝙊 𝙏𝙀𝙉𝘿𝙍𝘼 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 😸',
smsTikTok5: (anu) => `*Se ha enviado 1 de ${anu.length} imágenes.* ✅\n_El resto podrá ser visible en el chat privado del bot_ 😸`,
smsTikTok6: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙏𝙄𝙆𝙏𝙊𝙆 𝙎𝙄𝙉 𝙐𝙎𝘼𝙍 (@)\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊',
smsSpoti: 'Enviando canción...',
smsAguarde: (additionalText) => `𝙀𝙉𝙑𝙄𝘼𝘿𝙊 ${additionalText}, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊`,
smsAud: '𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝘼𝙐𝘿𝙄𝙊, 𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍',
smsVid: '𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊, 𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍',
smsYT: '𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊́ 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀𝙎 𝙋𝘼𝙍𝘼 𝙀𝙎𝙀 𝙉𝙐́𝙈𝙀𝙍𝙊, 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙉𝙐́𝙈𝙀𝙍𝙊 𝙀𝙉𝙏𝙍𝙀 1 𝙔 𝙀𝙇',
smsY2: (usedPrefix, command) =>
`𝙋𝘼𝙍𝘼 𝙋𝙊𝘿𝙀𝙍 𝙐𝙎𝘼𝙍 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙁𝙊𝙍𝙈𝘼 (${usedPrefix + command} <numero>), 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝙇𝘼 𝘽𝙐́𝙎𝙌𝙐𝙀𝘿𝘼 𝘿𝙀 𝙑𝙄́𝘿𝙀𝙊𝙎 𝘾𝙊𝙉 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊`,

//ejemplos
smsMalused: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙇𝙊 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝘽𝙐𝙎𝘾𝘼𝙍\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n',
smsMalused2: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝘼𝙉𝙄𝙈𝙀',
smsMalused3: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉𝘼 𝘾𝘼𝙉𝘾𝙄𝙊𝙉 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙇𝘼 𝙇𝙀𝙏𝙍𝘼\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊',
smsMalused4: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝘾𝘼𝙉𝘼𝙇 𝘿𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀',
smsMalused4: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊',
smsMalused5: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊',
smsMalused6: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙂𝙄𝙏𝙃𝙐𝘽\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊',
smsMalused7: '⚡ *USAR EL COMANDO DE ESTA FORMA:*\n',
smsMalused8: `🐈 *DEBE DE USAR EL COMANDO COMO EN ESTE EXEMPLO:*\n`,
smsMalused9: `🐈 *RESPONDE A UN MENSAGEM CON EL COMANDO O USE ESTE EXEMPLO:*\n`,

//Erro
smsMalErro: `\`\`\`OCURRIÓ UN ERRO INAGUARDEDO.\`\`\``,
smsMalErro2: `\`\`\`SURGIÓ UN INCONVENIENTE.\`\`\`\n`,
smsMalErro3: `\`\`\`ALGO SALIÓ MAL, RELATÓRIO ESTE COMANDO USANDO:\`\`\`\n`,

//grupos
smsAdd:
'Hola! me presento, soy GataBot-MD 🐈, soy un Bot de WhatsApp, una persona del grupo utilizo el comando para añadirte al grupo, pero no pude agregarte, asi que te mando la invitacion para que te unas al grupo, te aguardemos con ansias!!',
smsAdd2: 'Enviando invitacion a su privado...',
smsGrup: '𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙏𝙊𝘿𝙊𝙎 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!',
smaGrup2: '𝙎𝙊𝙇𝙊 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!',

//buscadores
buscador: '*RESULTADOS DE:* ',
buscador2: '𝙀𝙋𝙄𝙎𝙊𝘿𝙄𝙊𝙎:',
buscador3: '𝙁𝙊𝙍𝙈𝘼𝙏𝙊:',
buscador3: '𝘽𝘼𝙎𝘼𝘿𝙊 𝙀𝙉:',
buscador4: '𝙀𝙎𝙏𝙍𝙀𝙉𝘼𝘿𝙊:',
buscador5: '𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎:',
buscador6: '𝙁𝘼𝙑𝙊𝙍𝙄𝙏𝙊𝙎:',
buscador7: '𝘾𝙇𝘼𝙎𝙄𝙁𝙄𝘾𝘼𝘾𝙄𝙊𝙉:',
buscador8: '𝙏𝙍𝘼𝙄𝙇𝙀𝙍:',
buscador9: '*🔎 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙀 𝙀𝙎𝙏𝙊:*',
buscador10: '𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝙉𝙄𝙉𝙂𝙐𝙉𝘼 𝙋𝙀𝙇𝙄𝘾𝙐𝙇𝘼',
buscador11: '𝘽𝙇𝙊𝙌𝙐𝙀𝘼𝘿𝙊𝙍 𝘿𝙀 𝘼𝙉𝙐𝙉𝘾𝙄𝙊𝙎 𝙍𝙀𝘾𝙊𝙈𝙀𝙉𝘿𝘼𝘿𝙊',

//convertido
smsconvert: '𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝙊 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝙀 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉',
smsconvert1: '𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙀𝙎𝙏𝙊𝙔 𝘾𝙊𝙉𝙑𝙄𝙍𝙏𝙄𝙀𝙉𝘿𝙊 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝘼 𝘿𝙄𝙎𝙀𝙉̃𝙊 𝘼𝙉𝙄𝙈𝙀, 𝙎𝙀𝘼 𝙋𝘼𝘾𝙄𝙀𝙉𝙏𝙀 𝙀𝙉 𝙇𝙊 𝙌𝙐𝙀 𝙀𝙉𝙑𝙄𝙊 𝙀𝙇 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊',
smsconvert2: '𝙀𝙍𝙍𝙊𝙍, 𝙑𝙀𝙍𝙄𝙁𝙄𝙌𝙐𝙀 𝙌𝙐𝙀 𝙇𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙎𝙀𝘼 𝙀𝙇 𝙍𝙊𝙎𝙏𝙍𝙊 𝘿𝙀 𝙐𝙉𝘼 𝙋𝙀𝙍𝙎𝙊𝙉𝘼',
smsconvert3: '𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼 𝙐𝙉 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝙀𝙉 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉, 𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊',
smsconvert4: '𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝙀𝙉 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3',
smsconvert5: '𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍',
smsconvert6: '𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝙎𝙐 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕 𝘼 𝘼𝙐𝘿𝙄𝙊|𝙈𝙋3 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍',
smsconvert7: '𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝘼𝙐𝘿𝙄𝙊 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝘼 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕',
smsconvert8: '𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍',
smsconvert9: '𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝘿𝙀 𝘼𝙐𝘿𝙄𝙊 𝘼 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍',
smsconvert10: '𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼 𝙐𝙉𝘼 𝙄𝙈𝘼𝙂𝙀𝙉 𝙊 𝙑𝙄𝘿𝙀𝙊',
smsconvert11: '𝙏𝘼𝙈𝘼𝙉𝙊',
smsconvert12: '𝙀𝙓𝙋𝙄𝙍𝘼𝘾𝙄𝙊𝙉',
smsconvert13: '𝘼𝘾𝙊𝙍𝙏𝘼𝘿𝙊',
smsconvert14: '𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀𝙍 𝘼𝙇 𝘼𝙐𝘿𝙄𝙊 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝙀𝙉 𝙑𝙄𝘿𝙀𝙊',
smsconvert15: '𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝙍 𝘼 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊',
smsconvert16: '𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝘼 𝘼𝙇 𝘼𝙐𝘿𝙄𝙊 𝙊 𝙉𝙊𝙏𝘼 𝘿𝙀 𝙑𝙊𝙕 𝙋𝘼𝙍𝘼 𝙈𝙊𝘿𝙄𝙁𝙄𝘾𝘼𝙍𝙇𝙊 𝙐𝙎𝙀 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊',

//herramientas.js
smsAcorta: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝘼𝙍𝘼 𝘼𝘾𝙊𝙍𝙏𝘼𝙍',
smsAcorta2: (text) => `✅ 𝙎𝙀 𝙍𝙀𝘼𝙇𝙄𝙕𝙊 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊\n\n𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝘼𝙉𝙏𝙀𝙎\n*${text}*\n\n𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝘼𝙃𝙊𝙍𝘼`,

//comando +18
smshorny: '𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙓𝙉𝙓𝙓, 𝙀𝙅𝙀𝙈𝙋𝙇𝙊:',
smshorny2: '➤ 𝙀𝙎𝙋𝙀𝙍𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘼 𝙌𝙐𝙀 𝙎𝙀 𝙀𝙉𝙑𝙄𝙀 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊'
}

export default MID_GB
