const path = require("path");
const _ = require("lodash");
const yargs = require("yargs/yargs");

// Importa directamente desde la librería oficial
const { Low, JSONFile} = require("lowdb");

let cloudDBAdapter, mongoDB;
try {
  cloudDBAdapter = require("../lib/cloudDB");
} catch {}
try {
  mongoDB = require("../lib/mongoDB");
} catch {}

global.opts = Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
const dbURL = global.opts["db"] || "";
let adapter;

// Selección dinámica del adaptador según el tipo de base de datos
if (/^https?:\/\//.test(dbURL) && cloudDBAdapter) {
  adapter = new cloudDBAdapter(dbURL);
} else if (/mongodb/.test(dbURL) && mongoDB) {
  adapter = new mongoDB(dbURL);
} else {
  adapter = new JSONFile(path.join("database.json"));
}

global.db = new Low(adapter);
global.DATABASE = global.db;

global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise((resolve) => {
      let i = setInterval(() => {
        if (!global.db.READ) {
          clearInterval(i);
          resolve(
            global.db.data == null? global.loadDatabase(): global.db.data,
);
}
}, 1000);
});
}

  if (global.db.data!== null) return;
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;

  // Estructura base de la base de datos
  global.db.data = Object.assign(
    {
      users: {},
      chats: {},
      settings: {},
},
    global.db.data || {},
);

  // Permite usar lodash encadenado sobre los datos
  global.db.chain = _.chain(global.db.data);
};

// Guardado automático cada segundo
if (global.db) {
  setInterval(async () => {
    if (global.db.data) await global.db.write();
}, 1000);
}

module.exports = global.db;
