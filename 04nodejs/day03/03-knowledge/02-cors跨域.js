/*
    解决接口跨域问题的方案主要有两种：
        1. CORS（主流的解决方案，推荐使用）
        2. JSONP（有缺陷的解决方案：只支持 GET 请求）
    

    使用 cors 中间件解决跨域问题
        1.运行 npm install cors 安装中间件
        2.使用 const cors = require('cors') 导入中间件
        3.在路由之前调用 app.use(cors()) 配置中间件
        4.设置相关请求头
            1.允许来自任何域的请求: Access-Control-Allow-Origin: "*"
            2.通过 Access-Control-Allow-Headers 对额外的请求头进行声明
            3. Access-Control-Allow-Methods: "*"

    CORS请求的分类：
        1.简单请求：
            1.请求方式：GET、POST、HEAD 三者之一
            2.HTTP 头部信息不超过以下几种字段：无自定义头部字段、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width 、Content-Type（只有三个值application/x-www-formurlencoded、multipart/form-data、text/plain）
        2.预检请求：
            1.只要符合以下任何一个条件的请求
                1. 请求方式为 GET、POST、HEAD 之外的请求 Method 类型
                2. 请求头中包含自定义头部字段
                3. 向服务器发送了 application/json 格式的数据
            2.在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求，所以这一
              次的 OPTION 请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。


    简单请求的特点：客户端与服务器之间只会发生一次请求。
    预检请求的特点：客户端与服务器之间会发生两次请求，OPTION 预检请求成功之后，才会发起真正的请求。


              */ 