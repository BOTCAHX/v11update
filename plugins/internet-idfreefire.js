let fetch = require('node-fetch')
let handler = async (m, { args }) => {
  let res = await fetch(global.API('xteam', '/search/freefire', {id: args[0]}, 'APIKEY'))
  let json = await res.json()
  if (json.result.name) m.reply(`\nNama : ${json.result.name}\nID : ${args[0]}\n`)
    else throw `Error!\n\n${json}`
}
handler.help = ['idfreefire'].map(v => v + ' <id>')
handler.tags = ['internet']
handler.command = /^(idfreefire|idff)$/i

module.exports = handler
