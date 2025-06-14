const http = require("http");
const fs = require("fs");
const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} new req recieved\n`
    fs.appendFile("log1.txt",log,(err,data)=>{
        // res.end("end url") you can aslo use a switch case
        switch(req.url){
            case '/': res.end("Homepage");
            break
            case '/about': res.end("I am akash yadav");
            break
            default: res.end("404 Not found");
        }
    })
})
myserver.listen(8000,()=> console.log("server started !"));