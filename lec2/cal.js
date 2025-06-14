// const math = require(math); if we direct math in () than it shows the error
//  --> ./ --> means current working directory

// const math = require('./math');
// console.log("math value is: ",math.add(4,5));

// or you can also write in this form

const math = require('./math'); // if we put direct without using ./ then this function directly find things from there predefined package and prebuild module that are present in node js like || fs|| or other
// console.log("math value is: ",math.addfn(4,5),math.subfn(6,7));

//or

console.log("add = ",math.add1(4,5));
