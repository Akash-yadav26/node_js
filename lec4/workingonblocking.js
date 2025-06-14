const fs = require("fs");

//blocking...
// const res = fs.readFileSync('contacts.txt','utf-8');
// console.log(res);

//non-blocking..
fs.readFile("contacts.txt","utf-8",(err,result)=>{
    console.log(result);
})
console.log("1");
console.log("2");
console.log("3");
//this come because non- blocking give result asynchrounous

//default size of non blocking is  thread pool--> 4
// we can increase the size according to cpu like--> 8core => 8core cpu--> 8