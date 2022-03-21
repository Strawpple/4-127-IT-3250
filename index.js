'use strict';
import express from 'express';
import { json } from 'express';
import cors from 'cors';
import { json as _json } from 'body-parser';
import { port } from './config.js';
import { routes } from './routes/adoption-routes.js';

const app = express();

app.use(json());
app.use(cors());
app.use(_json());


app.use('/api', routes);

app.get('/', function (req, res){
    res.render('index');
})

app.listen(port, () => console.log('app is listening on url http://localhost:' + port));