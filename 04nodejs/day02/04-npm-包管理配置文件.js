/*
    1.npm 规定，在项目根目录中，必须提供一个叫做 package.json 的包管理配置文件。
        用来记录与项目有关的一些配置信息
        项目的名称、版本号、描述等
        项目中都用到了哪些包
        哪些包只在开发期间会用到
        那些包在开发和部署时都需要用到


    2.多人协作的问题
        1.解决方案：共享时剔除node_modules
        2.在项目根目录中，创建一个叫做 package.json 的配置文件，
        即可用来记录项目中安装了哪些包。从而方便剔除
        node_modules 目录之后，在团队成员之间共享项目的源代码。
    
    3.快速创建 package.json
        npm 包管理工具提供了一个快捷命令，
        可以在执行命令时所处的目录中，
        快速创建 package.json 这个包管理配置文件：npm init -y
    
    4. 一次性安装所有的包
        npm install/npm i
    
    5. 卸载包
        npm uninstall 包名
            1.自动从 package.json 的 dependencies 中移除掉。
            2.必须加包名
    
    6.  devDependencies 节点
        1. npm i 包名 -D(完整写法: npm install 包名 --save-dev)
        2. 项目上线之后不会用到，则建议把这些包记录到 devDependencies 节点中
        3. 如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到 dependencies 节点中。

    
*/