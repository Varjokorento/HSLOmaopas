


// function haeTiedot() {
//     $.post({
//         url: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
//         data: JSON.stringify({
//             "query": "stop(id: 'HSL:1040129') { name lat lon wheelchairBoarding'}"}),
//             contentType: 'application/json'
//
//         }).done(function (response) {
//             console.log('');
//         })
//     };

//
// haeTiedot()
/*
var query =  "{'query': '{stops(name:'hertton') {id name wheelchairBoarding} }'}";
var teksti = JSON.stringify(query);

var keri = JSON.parse(teksti);
console.log(keri);
var string = "{stops(name: 'hertton') {id name wheelchairBoarding} }";



$('button').click(function() {

/*$.ajax({
    method: "POST",
    url: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    data: keri})
        .done(function (msg) {
            alert("Data Saved: " + msg)})});
            */



// $('button').click(function() {
//     event.preventDefault();
//     var entry = $('#entry').val()
//     console.log(entry);
//
//
//
/*

var string = '{stop(id: "HSL:1173210") {name, lat, lon, wheelchairBoarding}}';
console.log(string);
$('button').click(function() {

    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {

        method: 'POST',
        headers: {'Content-Type': 'application/graphql'},
        body: string
    })
        .then(res => console.log(res.data));
});
*/

// const fetch = createApolloFetch({
//     uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
// });
// function fets() {
//
//     fetch({
//         query: `stop (id: "HSL:1040129") {
//        name
//        lat
//        lon
//        wheelchairBoarding
//       }
//       }`
//     });
// }
//
// fets();
/*

var url = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
var headers = {
    Accept: 'application/json',
    'User-Agent': 'request',
    'Content-Type': 'application/json'
};

var options = {
    method: 'post',
    body: undefined,
    json: true,
    url: url,
    headers: headers
};

var request = require("request");

function makeRequest(options){
    request(options, function (error, response, body) {
        if (error) {
            console.error('error posting json: ', error);
            throw error;
        }
        var responseHeaders = response.headers;
        var statusCode = response.statusCode;
        console.log('Status code: ', statusCode);
        console.log('Body: ', body);
    });
};

options.body = {
    query: "{stops(name: 'hertton') {id name wheelchairBoarding} }"
};
makeRequest(options);
