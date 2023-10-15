const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const axios = require('axios');

app.use( function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
})

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/api/diagnoses', async (req, res) => {
    const response = await axios.get('https://global.lakmus.org/Dictionaries/icpc2?IsPublic=true');
    res.json(response.data);
});

