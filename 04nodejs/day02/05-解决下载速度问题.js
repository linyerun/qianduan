/*
    查看当前包下的镜像源:
        npm config get registry
    
    将包的镜像源切换为淘宝镜像源
        npm config set registry=https://registry.npm.taobao.org/
    
    检查镜像源是否下载成功
        npm config get registry
    
    为了更方便的切换下包的镜像源，我们可以安装 nrm 这个小工具
        npm i nrm -g
        使用:
            nrm ls
            nrm use taobao
*/