// file handling
const fs = require("fs"); // fs is used for file handling

//syncorouns--> this will return something

// fs.writeFileSync("./test.txt","world"); // if we write sommething new it overwrite the current text and genrate new file

//async--> this will not return anything

// fs.writeFile("./test.txt","hello  11 async 667",(arr)=>{});

// this when directory is default

    const res = fs.readFileSync("./contacts.txt","utf-8");
console.log(res);

// to read form custom diectory --> when your file is in subdirectory but your file is in a parent directory

const path =require("path");
const filePath= path.join(__dirname,"./akash.txt");//
const akash = fs.readFileSync(filePath,"utf-8");
console.log(akash);
//__dirname: This is a special variable in Node.js that holds the 
// absolute path of the directory where the current script is located.

//path.join(): This method joins multiple path segments into a single path.
//  It ensures the correct path separator is used based on the operating system
 // asyn read
 fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    }
 })