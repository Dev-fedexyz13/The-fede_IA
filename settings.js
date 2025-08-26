const fs = require("fs");
const chalk = require("chalk");

global.owner = ["5491156178758"]; // Pon tu número aqui
global.sessionName = "FedeSession";
global.version = "v2.4.0 | The-fede_IA";
global.namebot = "The-fede_IA - 𝖣𝖾𝗏𝖥𝖾𝖽𝖾𝟣𝟥";
global.author = "𝖣𝖾𝗏𝖥𝖾𝖽𝖾𝟣𝟥 | The-fede_IA";

//Modifica los mensajes a tu preferencia
global.mess = {
  admin: "→ Esta función está reservada para los administradores del grupo",
  botAdmin: "→ Para ejecutar esta función debo ser administrador",
  owner: "→ Solo mi creador puede usar este comando",
  group: "→ Esta función solo funciona en grupos",
  private: "→ Esta función solo funciona en mensajes privados",
  wait: "→ Espera un momento...",
};

global.thumbnailUrl = "https://i.ibb.co/P0VXh06/5faea421e58b.jpg"; //Cambia esta imagen

global.my = {
  ch: "120363401477412280@newsletter", //Cambia este id por el de tu canal
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Actualización '${__filename}'`));
  delete require.cache[file];
  require(file);
});
