let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupParticipantsUpdate(m.chat, [user], "remove")
}
handler.help = ['okick'].map(v => v + ' @user')
handler.tags = ['owner']
handler.command = /^(okick)$/i
handler.owner = true
handler.group = true

handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler
