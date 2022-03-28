const express = require('express');



var app = express();
app.set('view engine', 'ejs');
// app.use(express.static(__dirname + 'styles'));

app.get('/', function (req, res){
    // res.render('index');
});


app.listen(3000, 'localhost', () => {
    console.log("Server is running");
});
    
