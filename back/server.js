const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server is running!');
});


app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
  
