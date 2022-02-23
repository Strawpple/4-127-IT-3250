var express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
var app = express();

app.set('view engine', 'ejs');
require('dotenv').config();

let countries = [
    {id: 1, cname: 'Philippines', price: 2000},
    {id: 2, cname: 'South Korea', price: 2000},
    {id: 3, cname: 'Dell', price: 2000}
]
let cities = [
    {id: 1, ciname: 'Carmen, Davao del Norte', price: 2000},
    {id: 2, ciname: 'Davao City, Davao del Sur', price: 2000},
    {id: 3, ciname: 'Manila, Philippines', price: 2000}
]

app.get('/', (req, res) =>{
    res.render('views/index', data);
})

app.post("/", async (req, res) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q={Davao City}&appid=${process.env}`;
    const response = await fetch(url);
    const weatherdata = await response.json();
    console.log(weatherdata);

})

var weather = require('weather-js');
 
// Options:
// search:     location name or zipcode
// degreeType: F or C
 
weather.find({search: 'Davao City, Ph', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
});



app.get('/index', function (req, res){
    let data = {
        url: req.url,
    }
    res.render('views/index', data);
})

app.listen(3000,  () => {
    console.log("Server is running");
});
    