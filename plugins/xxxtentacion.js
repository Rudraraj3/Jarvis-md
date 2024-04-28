/*Copyright (C) 2021 Ameen-Rafi.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Ameen Ser-Rafi Ser */


const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'xxxtentacion', fromMe: true, desc: 'random xxxtentacion images'}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://telegra.ph/file/68b67c927b31143670e3d.jpg";

r_text[1] = "https://telegra.ph/file/d145b6ce91e5d5759be79.jpg";

r_text[2] = "https://telegra.ph/file/ef1a09d50d10501e30462.jpg";

r_text[3] = "https://telegra.ph/file/5608162553badd19db2f2.jpg";

r_text[4] = "https://telegra.ph/file/3af30a729b90c7a3a67a9.jpg";

r_text[5] = "https://telegra.ph/file/1a1da56a16c2c0529459f.jpg";

r_text[6] = "https://telegra.ph/file/40bf3b52227a78a2a222e.jpg";

r_text[7] = "https://telegra.ph/file/2267f089901e4fb5aae5c.jpg";

r_text[8] = "https://telegra.ph/file/451135c048b53eb588c8d.jpg";

r_text[9] = "https://telegra.ph/file/84f2a0bd440a1c278be9b.jpg";

r_text[10] = "https://telegra.ph/file/c7aa25c0448cead42172a.jpg";

r_text[11] = "https://telegra.ph/file/b64defd3aae7b4e0d1894.jpg";

r_text[12] = "https://telegra.ph/file/687befc02abbda2dbcb6b.jpg";

r_text[13] = "https://telegra.ph/file/42f8b493bec22ce513b75.jpg";

r_text[14] = "https://telegra.ph/file/9244f93fb8ab4eb17a05f.jpg";

r_text[15] = "https://telegra.ph/file/00a4732edf86b425ecdea.jpg";


var i = Math.floor(15*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '𝐌𝐚𝐝𝐞 𝐁𝐲 💝MAALUTTY💝'})

    }));

}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'xxxtentacion', fromMe: false, desc:'random xxxtentacion images '}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://telegra.ph/file/68b67c927b31143670e3d.jpg";

r_text[1] = "https://telegra.ph/file/d145b6ce91e5d5759be79.jpg";

r_text[2] = "https://telegra.ph/file/ef1a09d50d10501e30462.jpg";

r_text[3] = "https://telegra.ph/file/5608162553badd19db2f2.jpg";

r_text[4] = "https://telegra.ph/file/3af30a729b90c7a3a67a9.jpg";

r_text[5] = "https://telegra.ph/file/1a1da56a16c2c0529459f.jpg";

r_text[6] = "https://telegra.ph/file/40bf3b52227a78a2a222e.jpg";

r_text[7] = "https://telegra.ph/file/2267f089901e4fb5aae5c.jpg";

r_text[8] = "https://telegra.ph/file/451135c048b53eb588c8d.jpg";

r_text[9] = "https://telegra.ph/file/84f2a0bd440a1c278be9b.jpg";

r_text[10] = "https://telegra.ph/file/c7aa25c0448cead42172a.jpg";

r_text[11] = "https://telegra.ph/file/b64defd3aae7b4e0d1894.jpg";

r_text[12] = "https://telegra.ph/file/687befc02abbda2dbcb6b.jpg";

r_text[13] = "https://telegra.ph/file/42f8b493bec22ce513b75.jpg";

r_text[14] = "https://telegra.ph/file/9244f93fb8ab4eb17a05f.jpg";

r_text[15] = "https://telegra.ph/file/00a4732edf86b425ecdea.jpg";


    var i = Math.floor(15*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '𝐌𝐚𝐝𝐞 𝐁𝐲 💝MAALUTTY💝'})

    }));

}
