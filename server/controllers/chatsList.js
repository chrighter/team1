'use strict';

// const Chat = require('./models/chat');

exports.chatsList = (req, res) => {
    req.locals = {};

    //заглушка:
    req.locals.chats = [1, 2, 3, 4];
    // отглушка
    // middleware: req.user = ...
    // req.locals.chats = Chat.getChatsByUserId(req.user.id);
    // chats.forEach(chat => {
    //     chat.getMessages()[chat.length - 1];
    //     chat.getUnreadMessages().length;
    //     // chat.getChatImage();
    // });
    res.send(req.locals);
};
