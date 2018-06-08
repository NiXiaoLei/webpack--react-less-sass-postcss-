require('babel-runtime/regenerator')

require("webpack-hot-middleware/client?reload=true")
require("babel-register")
require('./main.css')
require("./index.html")
require("./app")
// var a = async args =>{
//    const {a , b} = args
//    await console.log("Hello Future!")
//    console.log("Done")
// }


// a({a:1,b:2})