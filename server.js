//导入http模块
const http = require('http');
//利用http模块创建服务
const app = http.createServer();
//利用on()监听request事件，并在回调函数中处理请求
app.on('request', (req, res) => {
    /* // 通过req.method获取请求方法
    if (req.method === 'GET') {
        // 处理GET请求
        res.end('get method')
    } 
    else if (req.method === 'POST') {
        // 处理POST请求
        res.end('post method')
    }
    else {
        // 处理其他请求
        res.end('aother method')
    } */

    /* // 监听客户端请求路径
    // 通过req.url获取请求路径
    let url = req.url;
    // 根据请求路径返回不同的响应内容
    if (url == '/' || url == '/index'){
        res.end('welcome to homepage')
    } else if (url == '/list') {
        res.end('welcome to listpage')
    } else{
        res.end('404 not found')
    } */

    res.writeHead(200, {'content-type' : 'text/html;charset=utf8'})
    res.end('<h1>Hello World你好</h1>')
})
//启动服务
app.listen(3000, () => {
    console.log('服务器已启动，监听端口3000')
})