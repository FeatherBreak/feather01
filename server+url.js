const http = require('http');
/* const url = require('url');//引入url模块,用于解析url */
const querystring = require('querystring');//引入querystring模块,用于解析url中的参数
const app = http.createServer();

app.on('request', (req, res) => {
    /* const urlArr = req.url;//获取url
    const urlObj = url.parse(urlArr);//解析url
    const params = querystring.parse(urlObj.query);//解析url中的参数
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'});
    res.end(`请求地址：${urlObj.pathname}\n请求参数：${urlObj.query}`)//返回请求地址和参数 */

    let qString = '';
    req.on('data',(data) => {
        qString += data;
    });
    req.on('end',() => {
        const params = querystring.parse(qString);
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'});
        res.end(`请求地址：${req.url},请求参数：${params.username}`)
    })
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});