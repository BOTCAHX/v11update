let fs = require('fs')
let handler = async (m) => {
let tes = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-02-at-20.52.32-_2_.opus')
conn.sendFile(m.chat, tes, '', '', m, true)
}

handler.customPrefix = /^(aine)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler