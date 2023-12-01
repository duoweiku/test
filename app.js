// 1. 引入 http 模块
const http = require('http');

// 2. 创建服务器对象
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8;'); // 设置响应头（去除乱码）
    response.end('服务器搭建成功！'); // 设置响应体（默认内容）
});

// 3. 监听端口（启动服务）
let port = 1314;
server.listen(port, () => {
    console.log(`服务器启动成功！\n访问地址：http://127.0.0.1:${port}/`);
});