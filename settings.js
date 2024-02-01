/*
   Created By Xiety
   My Contact t.me/Xietyofc 
   XyPush V2.0
   
   No Enc?, Buyy chat me :
   w.me/6285878774454
   or
   t.me/Xietyofc
*/

const fs = require("fs");
const chalk = require("chalk");

global.nomorOwner = "6285713888398";
global.namaBot = "XyPushV2";
global.namaowner = "Xiety";
global.packname = `By ${namaBot}`;
global.author = "\nYT : XieTy";
global.sessionName = "session";
global.wm = "XyPush";
global.themeemoji = "•";
global.anticall = true;

global.thumb = fs.readFileSync("./image/thumb.jpg");

global.mess = {
    wait: "Wait Kak Lagi Proses",
    success: "Sukses Kak`",
    on: "Sudah Aktif",
    off: "Sudah Off",
    text: "Teks Nya Mana Kak?",
    link: "Link Nya Mana Kak?",
    fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
    group: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Group",
    private: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Private Chat",
    owner: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
    admin: "Maaf Kak Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
    badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
    premium:
        "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner"
};

global.menu = `
*ABOUT XY PUSH*
⎙ Creator   : Xiety
⎙ Bot Name  : XyPush
⎙ Build On  : 09/12/2023
⎙ Version   : 2.0
⎙ Framework : MD || Pairing Code
⎙ Subscribe for Updates : youtube.com/@Xietyy


MENU LIST:
➜ .push
➜ .pushid
➜ .jpm
➜ .join
➜ .savecontact
➜ .save
➜ .listidgc
➜ .getidgc 
➜ .sendcontactname
➜ .cleardatabase
➜ .postw
➜ .postswimage
➜ .postswvideo
➜ .toptv
➜ .cekmember
➜ .stoppush
➜ .shutdown
➜ .self
➜ .public
➜ .owner
`;

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
    delete require.cache[file];
    require(file);
});
