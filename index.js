const express = require('express');
const cors = require('cors');
const axios = require('axios');

const server = express();

const PORT = process.env.PORT || 8080;

server.use(cors());

server.get('/', (req, res) => {
    axios.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US').then(response => {
        res.json(response.data);
    });
});

server.listen(PORT, () =>{
    console.log(`server running on port: ${PORT}`);
});