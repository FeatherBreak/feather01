//导入dgram模块
const dgram = require('dgram');
// 导入fs模块
const fs = require('fs');
//创建UDP服务器
const socket = dgram.createSocket('udp4');
//绑定端口
socket.bind(6666,'127.0.0.1');
//接收数据
socket.on('message', (data, rinfo) => {
    fs.writeFile('./uploads/目标文件.jpg',data, (err) => {
        if (err) console.log(err.message);
    })
    //回复数据
    socket.send(`文件上传成功`, rinfo.port, rinfo.address)
})
//链接异常
socket.on('error', (err) => {
    console.log(`服务器异常：${err.message}`);
})
