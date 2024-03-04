/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281359053674', 'esteh', true],
  ['6285880029379']
] // Nomor Owner

global.mods = ['6281359053674'] 
global.prems = ['6285174306183', '6285880029379']

// apikey
global.lann = 'NrVDZkbl'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'NrVDZkbl'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'Esteh' // nama owner
global.nomor = '6281359053674' // nomor owner
global.nans = 'NANS OFFC' // nama bot 
global.thumb = 'https://telegra.ph/file/a20c924a5f7e7953607aa.jpg' // thumbnail bot ( foto menu )
global.esteh = 'esteh' // link group yang ada di menu

// Sticker wm
global.packname = 'ᴮᴼᵀ┃Esteh' 
global.author = '@ʙᴏᴛ_ᴡʜᴀᴛsᴀᴘᴘ' 
global.fgig = 'https://www.instagram.com/' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/' // bebas tapi jangan kosong
global.fgyt = 'https://' // bebas tapi jangan kosong
global.fgpyp = 'https://' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '6281359053674'
global.web = 'https://'
global.email = '@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ ɴᴀɴꜱ ᴏꜰꜰᴄ'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
