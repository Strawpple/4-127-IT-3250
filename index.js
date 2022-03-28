const express = require('express');

var app = express();
app.set('view engine', 'ejs');
// app.use(express.static(__dirname + 'styles'));


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

    let data ={
        url: req.url,
        itemData: foradoption.docs,
        
    }
    res.render('adoption', data);


});



app.listen(3000, 'localhost', () => {
    console.log("Server is running");
});
    
