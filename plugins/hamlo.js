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
  "text": '*Halo dek. Ketik .menu untuk memulai bot*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/20509b31b6e05ff999daa.jpg',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/6f1c71d4f801482c930b8.png', hyzer, { packname: "sticker by", author: "hyzer" })
}

handler.customPrefix = /^(Halo?|hai?|hi?|hamlo?|hallo|hay)$/i
handler.command = new RegExp

module.exports = handler
