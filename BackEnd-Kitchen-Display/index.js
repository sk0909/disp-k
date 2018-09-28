require('dotenv').config();
let express = require('express'),
app = express() ,
path = require('path')
mongoose = require('mongoose'),
server = app.listen(process.env.PORT  || 5300);
console.log(server)
var bodyParser = require('body-parser'),
cors = require('cors'),
adminRoute = require('./routes/adminRoutes');

var io = require('socket.io')(server);

app.use(function(req, res, next){
    res.io = io;
    next();
  });

app.use(cors());
app.use(bodyParser.json());

app.use('/',adminRoute);
app.io = io;
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });


mongoose.connect(process.env.DBConnectionString,{useMongoClient:true},(err)=>{
    if(err)
    console.error(`something bad happen ${err}`);
    else
    console.log('connected')
    })
    