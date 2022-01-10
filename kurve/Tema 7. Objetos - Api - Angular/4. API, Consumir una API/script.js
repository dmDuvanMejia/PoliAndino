const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts', response => {
    let data = '';
    response.on('data', chunk => {
        data += chunk;
    });

    response.on('end', () => {
        console.log( JSON.parse(data) );
    });
});