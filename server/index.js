'use strict'

const dotenv = require('dotenv');
const server = require('express')();
const next = require('next');
const path = require('path');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const expressWs = require('express-ws')(server);
const { parse } = require('url');

const defaultValues = dotenv.config({ path: path.join(__dirname, '.env') }).parsed;
const routes = require('./routes');

// const render = pageName => (req, res) => app.render(req, res, `/${pageName}`);
const handleRequest = (req, res) =>
    app.getRequestHandler()(req, res, parse(req.url, true));

routes(server);
app.prepare().then(() => {
    server
        .get('*', handleRequest)
        .listen(3000,
            () => console.log('Listening on http://localhost:3000'));
});         
