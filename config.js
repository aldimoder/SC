const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6285697175057@s.whatsapp.net"]
global.nomerOwner = "6285697175057"
global.nomorOwner = ['6285697175057']
global.namaDeveloper = "Aldyy?"
global.namaBot = "XyzzPushKontak"
global.packname = ""
global.author = "Sticker By Aldyy"
global.thumb = fs.readFileSync("./thumb.jpg")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh XYZZ BOTZ
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/