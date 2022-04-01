const express = require('express');
const http = require('http');
const fs = require('fs');

var app = express();
app.set('view engine', 'ejs');
// app.use(express.static(__dirname + 'styles'));
// console.log(__dirname);

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.setHeader('Content-Type', 'text/html');
    let url1 = './views/';

    if(req.url == '/'){
        url1 += 'pages/index';
        res.statusCode = 200;
    } else if(req.url == '/adoption'){
        url1 += 'pages/adoption';
        res.statusCode = 200;
    } else if(req.url == '/account'){
        url1 += 'pages/account';
        res.statusCode = 200;
        res.end();
    }

    fs.readFile(url1, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    });


});

var admin = require("firebase-admin");

var serviceAccount = require("./animal-adoption-management.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://animal-adoption-management-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = admin.firestore();
// console.log(db.collection('adoption'));
const itemcoll = db.collection('adoption');

app.get('/',function (req, res){
    let data = {
        url: req.url,
    }
    res.render('pages/index', data);
});

app.get('/adoption', async function (req, res){
    // res.render('index');
    const foradoption = await itemcoll.get();
    // foradoption.forEach(doc => {
    //     console.log(doc.id, '=>', doc.data());
    // })

    // console.log(foradoption.docs);


    
    let data ={
        url: req.url,
        itemData: foradoption.docs,
        
    }
    res.render('pages/adoption', data);

});

app.get('/account',function (req, res){
    let data = {
        url: req.url,
    }
    res.render('pages/account', data);
});


app.listen(3000, 'localhost', () => {
    console.log("Server is running");
});
    
