/*
    身份认证:
        服务端渲染推荐使用 Session 认证机制
        前后端分离推荐使用 JWT 认证机制

    cookie:
        保存在客户端,存在伪造的风险
    session:
        1.保存在服务端
        2.工作原理:
            1.用户第一次请求服务器时，服务器端会生成一个sessionid
            2.服务器端将生成的sessionid返回给客户端，通过set-cookie
            3.客户端收到sessionid会将它保存在cookie中，当客户端再次访问服务端时会带上这个sessionid
            4.当服务端再次接收到来自客户端的请求时，会先去检查是否存在sessionid，不存在就新建一个sessionid重复1,2的流程，如果存在就去遍历服务端的session文件，找到与这个sessionid相对应的文件，文件中的键值便是sessionid，值为当前用户的一些信息
            5.此后的请求都会交换这个 Session ID，进行有状态的会话。
        3.Session 认证机制需要配合 Cookie 才能实现。
          由于 Cookie 默认不支持跨域访问(不同域名下)，
          所以，当涉及到前端跨域请求后端接口的时候，
          需要做很多额外的配置，才能实现跨域 Session 认证。
*/ 