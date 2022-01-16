const http = require('http');
const express = require('express');
const next = require('next');
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({dev});
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
    console.log('preparing next app...');
    const app = express();
    app.use(cors());
    const server = http.createServer(app);
    const io = new socketio.Server();
    io.attach(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    app.get('/test', async (req, res) => {
        res.send('Server is running');
    });
    
    io.on('connection', (socket) => {
        socket.emit('me', socket.id);
    
        socket.on('disconnect', () => {
            socket.broadcast.emit('callended');
        });
    
        socket.on('calluser', ({userToCall, signalData, from, name}) => {
            console.log(`Server - calluser`);
            io.to(userToCall).emit('calluser', {signal: signalData, from, name});
        });
    
        socket.on('answercall', (data) => {
            io.to(data.to).emit('callaccepted', data.signal);
        });
    });

    app.all('*', (req, res) => nextHandler(req, res));

    server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
