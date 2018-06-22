var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors')
var fetchnorm = require('isomorphic-fetch');
const { createApolloFetch } = require('apollo-fetch');
var request = require("request");

//eka kutsu
var headers = {
    'Content-Type': 'application/graphql'
};

var dataString = '{stop(id: "HSL:1431143") {name, stoptimesWithoutPatterns {scheduledArrival, realtimeArrival}}}';

var options = {
    url: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    method: 'POST',
    headers: headers,
    body: dataString
};

var data = "ei toimi";
var lahtoaikaarvio = 0;
var lahtoaikaReaali = 0;
var lahtoaikatod = 0;

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        data = body;
        var parsittu = "";
        for (var t = 0; t < 150; t++) {

        parsittu += data[t];
        }
        lahtoaikaarvio = parsittu.substring(84, 89);
        lahtoaikatod = secondsToTime(lahtoaikaarvio);
        if (lahtoaikatod["m"] < 10) {
        lahtoaikaparsittuna = lahtoaikatod["h"] + ":" + "0" + lahtoaikatod["m"];
        } else {
        lahtoaikaparsittuna = lahtoaikatod["h"] + ":" + lahtoaikatod["m"];
        }
        if (lahtoaikatod["h"] < 10) {
        lahtoaikaparsittuna = "0" + lahtoaikatod["h"] + ":" + lahtoaikatod["m"]
        }
        if (lahtoaikatod["h"] < 10 && lahtoaikatod["m"] < 10) {
        lahtoaikaparsittuna = "0" + lahtoaikatod["h"] + ":" + "0" + lahtoaikatod["m"]
        }
        
        console.log(lahtoaikatod);
        lahtoaikaReaali = parsittu.substring(108, 113);
        
    }
}

function secondsToTime(secs)
{
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = {
        "h": hours,
        "m": minutes,
    };
    return obj;
}



request(options, callback);

//tokakutsu 

var headers = {
    'Content-Type': 'application/graphql'
};

var dataString2 = '{stop(id: "HSL:1431139") {name, stoptimesWithoutPatterns {scheduledArrival, realtimeArrival}}}';

var options2 = {
    url: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
    method: 'POST',
    headers: headers,
    body: dataString2
};


var lahtoaikaarvio2 = 0;
var lahtoaikaReaali2 = 0;
var lahtoaikatod2 = 0;

function callback2(error, response, body) {
    if (!error && response.statusCode == 200) {
        data = body;
        var parsittu = "";
        for (var t = 0; t < 150; t++) {

        parsittu += data[t];
        }
        console.log(parsittu)
        lahtoaikaarvio = parsittu.substring(90, 95);
        console.log(lahtoaikaarvio)
        lahtoaikatod = secondsToTime(lahtoaikaarvio);
        if (lahtoaikatod["m"] < 10) {
        lahtoaikaparsittuna2 = lahtoaikatod["h"] + ":" + "0" + lahtoaikatod["m"];
        } else {
        lahtoaikaparsittuna2 = lahtoaikatod["h"] + ":" + lahtoaikatod["m"];
        }
        if (lahtoaikatod["h"] < 10) {
        lahtoaikaparsittuna2 = "0" + lahtoaikatod["h"] + ":" + lahtoaikatod["m"]
        }
        if (lahtoaikatod["h"] < 10 && lahtoaikatod["m"] < 10) {
        lahtoaikaparsittuna2 = "0" + lahtoaikatod["h"] + ":" + "0" + lahtoaikatod["m"]
        }
        
        console.log(lahtoaikatod);
       
        
    }
}

function secondsToTime(secs)
{
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = {
        "h": hours,
        "m": minutes,
    };
    return obj;
}


request(options2, callback2);

app.use(cors())

/*app.get('/', function (req, res) {
	res.send('Hello node with Express');
})*/

var parser = bodyParser.urlencoded({ extended: false });

app.use(express.static('files'));

app.set("view engine", "ejs"); 
app.set("views", __dirname + "/files"); 

app.get("/", (req, res) =>  { res.render("index", { arvioitulahtoaika: lahtoaikaparsittuna, arvioitusaapumisaika: lahtoaikaparsittuna2}); });


app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var app = express();

