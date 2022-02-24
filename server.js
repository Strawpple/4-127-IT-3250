// const http = require('http');
// const fs = require('fs');

var express = require('express');
var app = express();


app.set('view engine', 'ejs');






//Weatherjs 

var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C




weather.find({search: 'Davao City, Ph', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
      // res.render('views/index', country1);
      console.log(JSON.stringify(result, null, 2));
  });




app.listen(3000, 'localhost', () => {
    console.log("Server is running");
});
    




// require('dotenv').config();

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '/public', 'index'));
// })

// let countries = [
//     {id: 1, cname: 'Philippines', price: 2000},
//     {id: 2, cname: 'South Korea', price: 2000},
//     {id: 3, cname: 'Dell', price: 2000}
// ]
// let cities = [
//     {id: 1, ciname: 'Carmen, Davao del Norte', price: 2000},
//     {id: 2, ciname: 'Davao City, Davao del Sur', price: 2000},
//     {id: 3, ciname: 'Manila, Philippines', price: 2000}
// ]






// app.get('/', function (req, res){
//     let data = {
//         url: req.url,
//     }
//     res.render('index', data);
// })
// app.get('/index', function (req, res) {
//     let data = {
//         url: req.url,
//         array: [
//             {fname: "Adrian", lname: "Requillo"}
//         ],
//     }
//     res.render('index');
// })






//Node Server - Routing

// const server = http.createServer((req, res) =>{
//     console.log(req.url);

//     res.setHeader('Content-Type', 'text/html');
    // let urll = './views'

    // if (req.url == '/'){
    //     urll += 'index.html';
    //     res.statusCode = 200;
    // }else if (req.url == '/about'){
    //     urll += 'about.html';
    //     res.statusCode = 200;
    // }else if (req.url == '/contacts'){
    //     urll += 'contactus.html';
    //     res.statusCode = 200;
    // }else if (req.url == '/aboutus'){
    //     res.statusCode = 301;
    //     res.setJeader('Location', '/about');
    //     res.end();
            
    // }else{
    //     urll += '404.html';
    //     res.statusCode = 404;
    
//     // }

//     fs.readFile('./index.html', (err, data) => {
//         if(err){
//             console.log(err);
//             res.end();

//         }else{
//             res.end(data);
//         }
//     });

// });


//weatherjs get data

// app.get('/', (req, res) =>{
//     res.render('views/index', data);
// })

// app.post("/", async (req, res) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q={Davao City}&appid=${process.env}`;
//     const response = await fetch(url);
//     const weatherdata = await response.json();
//     console.log(weatherdata);

// })

// console.log(__dirname);
 
// app.get('/', function (req, res) {
//     res.sendFile('./views/index.ejs', { root: __dirname });
// });

// // app.get('/countries', function (req, res) {
// //     res.sendFile('./views/countries.ejs', { root: __dirname });
// // });
// //
// // app.get('/', function (req, res) {
// //     res.sendFile('./views/other.ejs', { root: __dirname });
// // });
// app.use((req, res) =>{
//     res.status(404).sendFile('./views/404.ejs', { root: __dirname });
// });
