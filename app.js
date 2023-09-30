const express = require('express');
const app = new express();
const router = require('./src/Routes/api')

//application router
app.use('/api', router);

//undefined route
app.use('*', (req, res)=>{
    res.status(404).json({status:"fail", data:"Not found"})
});

module.exports = app;