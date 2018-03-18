'use strict'

const { error404 } = require('./controllers/errors');
const { chat } = require('./controllers/chat');
const { chatsList } = require('./controllers/chatsList');

module.exports = app => {
    app.get('/chats', function(req, res) {
        chatsList(req, res);
        console.info(req.locals.chats);
    });

    app.ws('/chats', function(ws, req) {
        ws.on('message', function(msg) {
            console.log(msg);
        });
        console.log('socket', req.testing);
    });

    app.ws('/users/:userId([0-9]+)', function(ws, req) {
        ws.on('message', function(msg) {
            console.log(msg);
        });
        console.log('socket', req.testing);
    });
}
