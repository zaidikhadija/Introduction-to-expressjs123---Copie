const express = require('express');

const app = express();
console.log(app);

const port = 5000;
app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);

})
/*
app.get('/khadija',(req,res) => {
    console.log('method',req.method)
    console.log('url',req.url)
    res.send('Home Page')
}) ;

app.get('/Adress',(req,res) => {
    console.log('method',req.method)
    console.log('url',req.url)
    res.send('this is my adress')
}) ;*/
const logger = require ("./middelware/logger");
app.use (logger);
app.use (express.static(__dirname + "/Public"));

/*app.get('/',(req,res) => {
console.log('')
    res.sendFile(__dirname + "/Public/HomePage.html")
}) ;

app.get('/Contact',(req,res) => {
    console.log('')
        res.sendFile(__dirname + "/Public/ContactUs.html")
    }) ;
    app.get('/OurServices',(req,res) => {
        console.log('')
            res.sendFile(__dirname + "/Public/OurServices.html")
        }) ;
        app.get('/CSS/style.css',(req,res) => {
            console.log('')
                res.sendFile(__dirname + "/Public/CSS/style.css")
            }) ;*/
app.use('/api/users', require ("./routes/api/users"));
