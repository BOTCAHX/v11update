let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://bx-hunter.herokuapp.com/api/randomvidhentai?apikey=oQpiCHRf')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, 'video_1.mp4', 'Nih', m)
}
handler.help = ['vidhentai']
handler.tags = ['nsfw']
handler.command = /^(vidhentai)$/i
handler.premium = true
handler.limit = true

module.exports = handler
