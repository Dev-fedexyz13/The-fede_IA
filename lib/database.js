const path = require("path");
const _ = require("lodash");
const yargs = require("yargs/yargs");

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

(async () => {
  let Low, JSONFile;

  try {
    const lowdb = await import("lowdb");
    Low = lowdb.Low;
    JSONFile = lowdb.JSONFile;
} catch (err) {
    console.error("Error al importar lowdb:", err);
    process.exit(1);
}

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
        const i = setInterval(() => {
          if (!global.db.READ) {
            clearInterval(i);
            resolve(global.db.data == null? global.loadDatabase(): global.db.data);
}
}, 1000);
});
}

    if (global.db.data!== null) return;
    global.db.READ = true;
    await global.db.read();
    global.db.READ = false;

    global.db.data = Object.assign(
      {
        users: {},
        chats: {},
        settings: {},
},
      global.db.data || {},
);

    global.db.chain = _.chain(global.db.data);
};

  // Guardado automático cada segundo
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) await global.db.write();
}, 1000);
}
})();
