require('babel-runtime/regenerator')

require("webpack-hot-middleware/client?reload=true")

require('./main.css')
require("./index.html")

// 需要引入sass
//  require("./main.sass")

// 需要引入 less
require("./main.less")
require
var a = async args =>{
   const {a , b} = args
   await console.log("Hello Future!")
   console.log("Done")
}


a({a:1,b:2})