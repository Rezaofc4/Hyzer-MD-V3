let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/64ca1cbb9658c08fd12a6.png', m, { packname: "sticker by", author: "Reza ganteng" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
