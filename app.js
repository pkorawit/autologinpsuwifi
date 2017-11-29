
var request = require('request');

// Set the headers
var headers = {
    'Content-Type':'application/x-www-form-urlencoded'
}

// Configure the request
var options = {
    url: 'https://cp-xml-40g.psu.ac.th:6082/php/uid.php',
    method: 'POST',
    headers: headers,
    form: {
        'ipv6': '',
        'Login': 'Login',
        'password': 'abc123**',
        'username': 'lecturer'
    }
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})