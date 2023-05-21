/*
    node第三方模块叫: 包
        注意：Node.js 中的包都是免费且开源的，不需要付费即可免费下载使用

    使用npm安装第三方模块
        npm install 包名@版本号
            忽略版本号默认下载最新的
            npm i 包名@版本号
    
    node_modules 文件夹用来存放所有已安装到项目中的包。require() 导入第三方包时，
    就是从这个目录中查找并加载包。

    package-lock.json 配置文件用来记录 node_modules 目录下的每一个包的下载信息，
    例如包的名字、版本号、下载地址等。
*/ 