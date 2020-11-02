const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

app.use(cors());

app.get('/', async (req, res) => {

  try {
    // axios returns data on response.data
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');
    console.log(data);
  
    return res.status(200).json(data)
    
  } catch (error) {
    console.log(error);
  }
  
});

app.listen('3333');