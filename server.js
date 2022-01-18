const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./router/nroute')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', routes.nroute)

// app.get('/test', (req, res)=>{
//     res.status(200).json({success : "true"})
// })



app.listen(1337, ()=>console.log("running on port 1337"))