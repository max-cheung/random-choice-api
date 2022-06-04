const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 3000;

app.listen(process.env.PORT || PORT, function() {
    console.log('listening on port 3000')
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:str', (request, response) => {
    const arr = request.params.str.split(' ');
    const arrLength = arr.length;

    const randomNum = Math.ceil(Math.random() * arrLength);

    response.json(arr[randomNum-1]);
})