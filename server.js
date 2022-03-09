var express = require('express');
var request = require('request');
const { isContext } = require('vm');

var app = express();
app.set('view engine', 'ejs');

// console.log(__dirname);

// app.get('/', function (req, res){
//     res.render('index')
// });


var url = `https://api.openweathermap.org/data/2.5/weather?q=Davao%20City,%20Ph&units=metric&appid=31e1b0455c6f190c119c4c2ec90b3c87`;
var url2 = `http://api.openweathermap.org/data/2.5/weather?q=Panabo%20City,%20Ph&units=metric&appid=31e1b0455c6f190c119c4c2ec90b3c87`;
// var url3 = `https://api.openweathermap.org/data/2.5/weather?q=Mati%20City,%20Ph&units=metric&appid=31e1b0455c6f190c119c4c2ec90b3c87`;

app.get('/',function(req, res, next){
    request(url, function(error, response, body){
        weather_json = JSON.parse(body);
        console.log(weather_json);

        var weather = {
            city : weather_json.name,
            longitude: weather_json.coord.lon,
            latitude: weather_json.coord.lat,
            temperature: weather_json.main.temp,
            description: weather_json.weather[0].description,
            icon: weather_json.weather[0].icon
        };
        
        var weather_data = {weather : weather};

        res.render('index', weather_data);
        next();

    });
});

// //Panabo
app.get('/',function(req, res2, next){
    request(url2, function(error, response, body){
        weather_json = JSON.parse(body);
        console.log(weather_json);

        var pweather = {
            pcity : weather_json.main.city,
            plongitude: weather_json.coord.lon,
            platitude: weather_json.coord.lat,
            ptemperature: weather_json.main.temp,
            pdescription: weather_json.weather[0].description 
        };
        var weather_data = {weather : pweather};

        res2.render('index', weather_data);
        next();
    });
});

//Mati

// app.get('/',function(req, res){
//     request(url3, function(error, response, body){
//         weather_json = JSON.parse(body);
//         console.log(weather_json);


//         var matiweather = {
//             mcity : weather_json.main.city,
//             mlongitude: weather_json.coord.lon,
//             mlatitude: weather_json.coord.lat,
//             mtemperature: weather_json.main.temp,
//             mdescription: weather_json.weather[0].description 
//         };

        

//         var weather_data3 = {matiweather : mweather};

//         res.render('index', weather_data3);

//     });
// });


// app.post('/', (req, res) => {
//     const city = req.body.city;
//     const urlapi = `https://api.openweathermap.org/data/2.5/weather?q={Davao City}&appid={31e1b0455c6f190c119c4c2ec90b3c87}`;
    
//     try{
//         await fetch(urlapi)
//         .then(res => res.json())
//         .then(data =>{
//             if(data.message == 'city not found'){
//                 res.render('index',{
//                     city: data.message,
//                     temp:null,
//                     lat: null,
//                     long: null,
//                     degreetype: null,
//                     skytext: null

//                 })
//             } else{
//                 const city = data.name;
//                 const temp = data.temp;
//                 const lat = data.lat;
//                 const long = data.long;
//                 const degt = data.degreetype;
//                 const skytext = data.skytext;

//                 res.render('index',{
//                     city, temp, lat, long, degt, skytext
//                 });

//             }
//         })
//     }

// })


// module.exports = app;


// Weatherjs 

// var weather = require('weather-js');


// Options:
// search:     location name or zipcode
// degreeType: F or C



// weather.find({search: 'Davao City', degreeType: 'C'}, function(err, result) {
//     if(err) console.log(err);
//     //   console.log(JSON.stringify(result.location.lat, null, 2));
//     let city = result.long

    
      
//   });




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
