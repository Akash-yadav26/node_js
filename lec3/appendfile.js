const fs = require("fs");
 fs.appendFileSync("./contacts.txt",new Date().getDate().toLocaleString());
