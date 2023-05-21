/*
    JWT 通常由三部分组成，
    分别是 Header（头部）、Payload（有效荷载）、Signature（签名）。

    三者之间使用英文的“.”分隔，格式如下：Header.Payload.Signature

    Payload 部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串。
    Header 和 Signature 是安全性相关的部分，只是为了保证 Token 的安全性。

    客户端收到服务器返回的 JWT 之后，通常会将它储存在 localStorage 或 sessionStorage 中。
    推荐的做法是把 JWT 放在 HTTP请求头的 Authorization 字段中

    ------------------------------------------------------

    安装如下两个 JWT 相关的包：
        jsonwebtoken 用于生成 JWT 字符串
        express-jwt 用于将 JWT 字符串解析还原成 JSON 对象



*/