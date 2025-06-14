// always name main file to--> index.js devloper prefer to name it either it can aslo get named other words
const http = require("http");
const fs = require("fs");
const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}: New req Received\n`;
 fs.appendFile("log.txt",log,(err,data)=>{
res.end("Hello form server again");
 });
    // console.log(req);
    // res.end("Hello from server again");
});
myserver.listen(8000,()=> console.log("Server Started!"));
// if you start server than aplly any chances chance will not display in host screen to apply
// changes we have to first stop the server than applay anykind
//of changes

// click ctrl c in terminal to stop server
