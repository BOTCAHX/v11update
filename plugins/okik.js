let handler = async (m, { conn, args }) => {
let fs = require('fs')
 let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  aki = m.quoted ? [m.quoted.sender] : m.mentionedJid
  let users = aki.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  wayy = 'sᴜᴄᴄᴇss ᴋɪᴄᴋ'
  for (let i of users) {
  wayy += ` @${i.split('@')[0]}`
  }
  conn.reply(m.chat, wayy, m, { contextInfo: { mentionedJid: users }})
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupParticipantsUpdate(m.chat, [user], "remove")
}
handler.help = ['okick'].map(v => v + ' @user')
handler.tags = ['owner']
handler.command = /^(okick|\-)$/i
handler.owner = true
handler.group = true

handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler
