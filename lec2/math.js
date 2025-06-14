// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// // we cannot asign like that
// // module.export = add;
// //module.export = sub;
// // it will overwrite the function so we use fllowing  method to  export multiple function

// // module.exports ={
// //     add,
// //     sub,
// // };

// // we can also write int this froom also
// module.exports ={
//     addfn:add,
//     subfn:sub,
// };
exports.add1= (c,d)=>c+d;
exports.sub2=(c,d)=> c-d;
