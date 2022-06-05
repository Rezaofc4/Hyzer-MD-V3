let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
hyzer = {
    key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*MAU SEWA? CHAT OWNER KETIK .owner*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/20509b31b6e05ff999daa.jpg',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/69cb0f12bd3851c457b8a.png', hyzer, { packname: "sticker by", author: "hyzer" })
}

handler.customPrefix = /^(Undangan untuk bergabung ke grup WhatsApp saya)$/i
handler.command = new RegExp

module.exports = handler
