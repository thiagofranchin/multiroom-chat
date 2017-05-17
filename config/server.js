var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

/* Iniciar objeto do express */
var app = express();

/* Setar variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* Configurar o middleware express.static */
app.use(express.static('./app/public'));

/* Configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* Configurar o middleware express-validator */
app.use(expressValidator());

/* Efetua as rotas dos models e dos controllers para o objeto app */
consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;