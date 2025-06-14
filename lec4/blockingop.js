const fs = require("fs");
//blocking
const result = fs.readFileSync("./contacts.txt","utf-8");
console.log(result);
//non-blocking
fs.writeFile("./contacts.txt","Hello.world async",(err)=>{})