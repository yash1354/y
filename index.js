const express = require("express");
const app = express();
const port = 3000;

app.get('/',function(req,res){
    res.send('Hello World');
})
app.get('/selection',function(req,res){
    res.send("HI THERE MAN");
})
app.post('/selection',function(req,res){
    console.log(req.headers);
    res.send("2+2=4");
})

app.listen(port);