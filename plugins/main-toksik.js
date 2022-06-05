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
  "text": '*Masih kecil jangan toxic ya dek!*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/20509b31b6e05ff999daa.jpg',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/2ce8c02fe5183c6d07538.png', hyzer, { packname: "sticker by", author: "hyzer" })
}

handler.customPrefix = /^(asu|anjing|ajg|anj|memek|kontol|bangsat|goblok|bego|jancok|jnck|Cok|fuck|Raimu koyo telek|tai|thai)$/i
handler.command = new RegExp

module.exports = handler
