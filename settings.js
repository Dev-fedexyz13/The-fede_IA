import { watchFile, unwatchFile} from 'fs';
import { fileURLToPath} from 'url';
import chalk from 'chalk';
import fs from 'fs';
import moment from 'moment-timezone';
import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';

// 🧑‍💻 Datos del bot
global.owner = [
  ['5491156178758', 'DevFede', true],
  ['573001533523', 'Brayan', true],
];
global.botNumber = '';
global.sessionName = "FedeSession";
global.version = "v2.4.0 | The-fede_IA";
global.namebot = "The-fede_IA - DevFede13";
global.author = "DevFede13 | The-fede_IA";

// 🎨 Stickers
global.packname = '🎀 The-fede_IA 🎋';
global.author = `⟦ 📅 ${moment.tz('America/Los_Angeles').format('DD/MM/YY')} ⟧
⟦ ⏰ ${moment.tz('America/Los_Angeles').format('HH:mm:ss')} ⟧
⟦ 🧠 Powered by: DevFede ⟧`;

// 📢 Canales y enlaces
global.channel = 'https://whatsapp.com/channel/0029Vai28FR7dmea9gytQm3w';
global.group = 'https://chat.whatsapp.com/IbADO35sBSC4G1FBTGbHIE?mode=ac_t';
global.youtube = 'https://www.youtube.com/@ElCarlos.87';
global.github = 'https://github.com/thecarlos19/black-clover-MD';

// 🛠️ APIs
global.APIKeys = {
  'https://api.xteam.xyz': 'tu-key-xteam',
  'https://api.lolhuman.xyz': 'tu-key-lol',
};
global.APIs = {
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
};

// 🧩 Utilidades
global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
global.multiplier = 69;
global.maxwarn = 3;

// 🔁 Recarga automática
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("🔄 Config.js actualizado"));
  import(`${file}?update=${Date.now()}`);
});
