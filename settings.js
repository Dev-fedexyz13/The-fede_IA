const fs = require("fs");
const chalk = require("chalk");

global.owner = ["5491156178758"]; // 𝖯𝗈𝗇 𝗍𝗎 𝗇𝗎́𝗆𝖾𝗋𝗈 𝖺𝗊𝗎𝗂
global.sessionName = "FedeSession";
global.version = "𝗏𝟤.𝟦.𝟢 | 𝖳𝗁𝖾-𝖿𝖾𝖽𝖾_𝖨𝖠";
global.namebot = "𝖳𝗁𝖾-𝖿𝖾𝖽𝖾_𝖨𝖠 - 𝖣𝖾𝗏𝖥𝖾𝖽𝖾𝟣𝟥";
global.author = "𝖣𝖾𝗏𝖥𝖾𝖽𝖾𝟣𝟥 | 𝖳𝗁𝖾-𝖿𝖾𝖽𝖾_𝖨𝖠";

// 𝖬𝗈𝖽𝗂𝖿𝗂𝖼𝖺 𝗅𝗈𝗌 𝗆𝖾𝗇𝗌𝖺𝗃𝖾𝗌 𝖺 𝗍𝗎 𝗉𝗋𝖾𝖿𝖾𝗋𝖾𝗇𝖼𝗂𝖺
global.mess = {
  admin: "🍁 *𝖤𝗌𝗍𝖺 𝖿𝗎𝗇𝖼𝗂𝗈́𝗇 𝖾𝗌𝗍𝖺́ 𝗋𝖾𝗌𝖾𝗋𝗏𝖺𝖽𝖺 𝗉𝖺𝗋𝖺 𝗅𝗈𝗌 𝖺𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝖽𝗈𝗋𝖾𝗌 𝖽𝖾𝗅 𝗀𝗋𝗎𝗉𝗈...*",
  botAdmin: "🍁 *𝖯𝖺𝗋𝖺 𝖾𝗃𝖾𝖼𝗎𝗍𝖺𝗋 𝖾𝗌𝗍𝖺 𝖿𝗎𝗇𝖼𝗂𝗈́𝗇 𝖽𝖾𝖻𝗈 𝗌𝖾𝗋 𝖺𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝖽𝗈𝗋...*",
  owner: "🍁 *𝖲𝗈𝗅𝗈 𝗆𝗂 𝖼𝗋𝖾𝖺𝖽𝗈𝗋 𝗉𝗎𝖾𝖽𝖾 𝗎𝗌𝖺𝗋 𝖾𝗌𝗍𝖾 𝖼𝗈𝗆𝖺𝗇𝖽𝗈...*",
  group: "🍁 *𝖤𝗌𝗍𝖺 𝖿𝗎𝗇𝖼𝗂𝗈́𝗇 𝗌𝗈𝗅𝗈 𝖿𝗎𝗇𝖼𝗂𝗈𝗇𝖺 𝖾𝗇 𝗀𝗋𝗎𝗉𝗈𝗌...*",
  private: "🍁 *𝖤𝗌𝗍𝖺 𝖿𝗎𝗇𝖼𝗂𝗈́𝗇 𝗌𝗈𝗅𝗈 𝖿𝗎𝗇𝖼𝗂𝗈𝗇𝖺 𝖾𝗇 𝗆𝖾𝗇𝗌𝖺𝗃𝖾𝗌 𝗉𝗋𝗂𝗏𝖺𝖽𝗈𝗌...*",
  wait: "🍁 *𝖤𝗌𝗉𝖾𝗋𝖺 𝗎𝗇 𝗆𝗈𝗆𝖾𝗇𝗍𝗈...*",
};

global.thumbnailUrl = "https://i.ibb.co/P0VXh06/5faea421e58b.jpg"; // 𝖢𝖺𝗆𝖻𝗂𝖺 𝖾𝗌𝗍𝖺 𝗂𝗆𝖺𝗀𝖾𝗇

global.my = {
  ch: "120363401477412280@newsletter", // 𝖢𝖺𝗆𝖻𝗂𝖺 𝖾𝗌𝗍𝖾 𝗂𝖽 𝗉𝗈𝗋 𝖾𝗅 𝖽𝖾 𝗍𝗎 𝖼𝖺𝗇𝖺𝗅
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Actualización'${__filename}'`));
  delete require.cache[file];
  require(file);
});
