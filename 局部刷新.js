//导入express模块
const express = require('express');

//导入path模块
const path = require('path');

//创建Web服务器实例对象
const app = express();

//设置静态资源托管
app.use(express.static(path.join(__dirname,'public')));

//创建GET请求方式路由
app.get('/user/index',(req,res) => {
    res.send('<h1>这是用户首页</h1>');
});

//创建GET请求方式路由
app.get('/user/username',(req,res) => {
    res.send('<h1>姓名：小李</h1>');
});

//创建GET请求方式路由
app.get('/user/usercode',(req,res) => {
    res.send('<h1>编号：2021012</h1>');
});

//监听3000端口
app.listen(3000,() => {
    console.log('服务器已启动...');
});