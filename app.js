const port = process.env.PORT || 8080
// Base Variables for Express
var path = require('path');
var express = require('express');
// var falsh = require('express-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var mysql = require('mysql2');
var app = express();

var conn = require('./lib/db')
// ---------- ROUTING SECTION ----------
var indexRoute = require('./routes/index');
var authRoute = require('./routes/auth');
var studentRoute = require('./routes/students');
var gradesRoute = require('./routes/grades');
// -------------------------------------

// setup View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
// Finish Setup View Engine

// Setup BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Setup session
app.use(cookieParser());
app.use(session({
    secret: 'itsASecret',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 12000}
}));
// app.use(flash());
// End Session Setup

// Routing Middlewares
app.use('/students', studentRoute);
// app.use('/auth', authRoute);
// app.use('/grades', gradesRoute);
app.use('/', indexRoute);
// End Routing Middlewares

app.listen(port, () => console.log(`listening on port ${8080}..`));