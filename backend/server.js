const express = require('express');
const axios = require('axios')
const app = express();


console.log(axios);



app.listen(5000, () => {
    console.log(`Server is Listening on 5000`);
})