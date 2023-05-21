/*
    全局包:
        安装: npm i 包名 -g
        安装: npm uninstall 包名 -g
        只有工具性质的包，才有全局安装的必要性。
        例子：
            i5ting_toc 是一个可以把 md 文档转为 html 页面的小工具，使用步骤如下：
                npm install -g i5ting_toc
                i5ting_toc -f 要转换的md文件路径 -o

    项目包
        那些被安装到项目的 node_modules 目录中的包，都是项目包。
        1. 开发依赖包
            npm install 包名 -D
        2. 核心依赖包
            npm install 包名
*/