const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });

console.log('WebSocket server started on ws://localhost:8081');

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
