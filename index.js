const express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const app = express();
app.use(cookieParser());
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/home', (req, res, next) => {
  let userData = {
        email : req.body.email,
        password : req.body.password
    };
    res.cookie(req.body.email,userData);
    res.render('home', {user: req.body.email});
});
app.post('/setimagedata', (req, res, next) => {
    res.cookie(req.body.email,req.body);
    res.render('home', {user: req.body.email});
});

app.get('/getuser', (req, res)=> {
    /*let a = JSON.parse(JSON.stringify(req.cookies));
    console.log(a);*/
    res.render('home', {urlName:JSON.stringify(req.cookies), user: req.body.email});
});
