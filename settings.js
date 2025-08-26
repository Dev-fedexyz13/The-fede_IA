const fs = require("fs");
const chalk = require("chalk");

// 🧑‍💻 Datos del bot
global.owner = ["5491156178758"]; // ← Tu número aquí
global.sessionName = "FedeSession";
global.version = "v2.4.0 | The-fede_IA";
global.namebot = "The-fede_IA - DevFede13";
global.author = "DevFede13 | The-fede_IA";

// 💬 Mensajes personalizados
global.mess = {
  admin: "🍁 *Esta función está reservada para los administradores del grupo.*",
  botAdmin: "🍁 *Para ejecutar esta función debo ser administrador.*",
  owner: "🍁 *Solo mi creador puede usar este comando.*",
  group: "🍁 *Esta función solo funciona en grupos.*",
  private: "🍁 *Esta función solo funciona en mensajes privados.*",
  wait: "🍁 *Espera un momento...*"
};

// 🖼️ Imagen miniatura
global.thumbnailUrl = "https://files.catbox.moe/r4w38m.jpg";

// 📢 Canal oficial
global.my = {
  ch: "120363402097425674@newsletter" // ← Reemplaza con tu canal si lo deseas
};

// 🔁 Recarga automática del archivo
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`🔄 Archivo actualizado: '${__filename}'`));
  delete require.cache[file];
  require(file);
});
