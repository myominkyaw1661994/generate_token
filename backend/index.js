const express = require('express');
require("express-async-errors");
const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}
);

require('./startup/routers')(app);

const port = process.env.port || 3000;
app.listen(port, ()=> console.log(`App is listen on port ${port}`))
