const express = require("express");
const bodyParser = require("body-parser");



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', async function(req, res){
    res.send("Hello Node js");
});



app.listen( process.env.PORT || 8000 , function(){
    console.log("server running on Port: " + (process.env.PORT || 8000));
})