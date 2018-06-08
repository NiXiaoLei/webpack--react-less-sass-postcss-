# react 脚手架
> 在原有的基础上
> npm install react --save
> npm install react-dom --save

* 在html 中创建一个 根节点容器
* 创建一个app.js 作为react 的入口文件,并导入react 所依赖的两个库


## 支持 jsx 语法
> npm install   babel-preset-react   --save
* 在.babelrc文件中配置如下
```
{
    "presets":[
        [
            "env",
            {
                "targets":{
                    "browsers":["last 2 versions"]
                },
                "debug":true
            }
        ],
        //支持 jsx 语法
        "babel-preset-react"
    ],
    "plugins":[
        "transform-runtime"
    ]
}
```

# 转换EJS模板引擎


* 修改webpack.dev.js
```
  plugins:[
        new webpack.HotModuleReplacementPlugin()
        ,new HTMLWebpackPlugin({
            // 配置要找到的html 文件
            // template:"./src/index.html"
            template:"./src/index.ejs",
            title:"米斯特吴"
        })
    ]
```
* 修改图片路径
```
 <img src="<%=require("./images/link.jpg")%>" alt="">
```

#  postcss 让css 自动兼容浏览器,添加前缀
> 安装
> npm install  postcss   postcss-loader  --save 
* 首先 进入 webpack.dev.js  文件, 在需要处理的 css 文件类型的   `css-loader` 后加上 `postcss-loader`   , 如 在 less 中
```
 {
                test:/\.less$/,
                use:[
                    {
                         // 负责把css写入html
                         // 这里的顺序千万不能有问题
                         loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                   		//postcss-loader处理前缀
                        loader:"postcss-loader"
                    },
                    {
                        loader:"less-loader"
                    }
                ]
            },
```
*  还要创建一个 postcss.config.js  
*  postcss.config.js  配置如下
```
module.exports = {
    plugins:[require("autoprefixer")]
}
```
* 然后就Ok了


# 处理 less / sass / styl
## 处理sass
> 安装 sass  和 sass loader
> npm install node-sass   	sass-loader --save

* main.js 中引入sass 文件
```
require("./main.sass")
```
* 首先 sass 语法不需要 `{ }` 和 ` ;`   并且 ` : `  后要带空格,  像这样,
```
img
    border-radius: 100%
    width: 300px
    box-shadow: 0 0 20px black
h1
    color: white
    font-size: 5em
    font-family:sans-serif
    text-shadow: 0 0 20px #000
```

* 并在weback.dev.js 中配置Loader
在其中加入
```
 {
     test:/\.sass$/,
     use:[
     {
     // 这里的顺序千万不能有问题
     loader:"style-loader"
     },
     {
     // 负责把css样式放到mian-bundle.js
     loader:"css-loader"
     },
     {
     loader:"sass-loader"
     }
     ]
},
```




  {
      test:/\.js$/,
      use:[
      {
      // 使用babel-loader进行语法转换
      loader:"babel-loader"
      }
      ],
      // 忽略哪个文件不需要转换
      exclude:/node_modules/
 },

## 处理 less 和 stuls
> npm install less  less-loader stylus stylus-loader   --save

* main.js 中引入less 文件
```
require("./main.less")
```
* 在 webpack 中增加 loader
```
========less===========
 {
     test:/\.less$/,
     use:[
     {
     // 负责把css写入html
     // 这里的顺序千万不能有问题
     loader:"style-loader"
     },
     {
     // 负责把css样式放到mian-bundle.js
     loader:"css-loader"
     },
     {
     loader:"less-loader"
     }
     ]
},
=================styls================
 {
     test:/\.styl$/,
     use:[
     {
     // 负责把css写入html
     // 这里的顺序千万不能有问题
     loader:"style-loader"
     },
     {
     // 负责把css样式放到mian-bundle.js
     loader:"css-loader"
     },
     {
     loader:"stylus-loader"
     }
     ]
},
```


