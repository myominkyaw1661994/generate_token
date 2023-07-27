const express = require('express');
const servey = require('../routers/servery')

module.exports = function(app){
    app.use(express.json());
    app.use("/api/survey", servey);
}