const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  return res.json([
    { 
      name : 'wolf',
      userId : '1'
    },
    {
      name: 'bruno',
      userId : '2'
    }
  ])
});

app.listen('3333');