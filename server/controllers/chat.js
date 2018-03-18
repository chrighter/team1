'use strict';

// const Chat = require('./models/chat');

exports.chat = (req, res) => {
    req.locals = {};
    req.locals.messages = ['a', 'b', 'c'];
    // // middleware: req.user = ...
    // req.locals.messages = Chat.getChatsByUserId(req.user.id).getMessages();    
    res.send('chat', req.locals);
};