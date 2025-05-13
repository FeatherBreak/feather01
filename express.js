// 运行服务器端代码
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`接收到来自 ${rinfo.address}:${rinfo.port} 的数据: ${msg}`);
  server.send(msg, rinfo.port, rinfo.address, (err, bytes) => {
    if (err) {
      console.log(`数据发送失败: ${err}`);
    } else {
      console.log(`数据发送成功: ${bytes} 字节`);
    }
  });
});

server.bind(8888, () => {
  console.log('服务器已启动，等待客户端连接...');
});
