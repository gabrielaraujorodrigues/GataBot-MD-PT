let handler = async (m, {conn, isProprietário}) => {
let users = Object.entries(global.db.data.users).filter((user) => user[1].banned)
let caption = `
*╭•·–| 👥 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝘽𝘼𝙉𝙀𝘼𝘿𝙊𝙎 : 𝘽𝘼𝙉𝙉𝙀𝘿 |–·•*
│ *Total : ${users.length} Usuários* ${
    users
      ? '\n' +
        users
          .map(([jid], i) =>
            `
│
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Usuários Banidos' : conn.getName(jid)}
│ ${isProprietário ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()
          )
          .join('\n')
      : ''
  }
│ *Estos usuários no puedes Usar a GataBot*
*╰•·–––––––––––––––––––·•*`.trim()

await conn.reply(m.chat, caption, m, {mentions: await conn.parseMention(caption)})
}
/*conn.sendButton(m.chat, caption, `*Estos usuários no puedes Usar a GataBot*\n\n` + wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })}*/
handler.command = /^listabanuser|listausuários|listbanuser|listabanidos|listban$/i

export default handler
