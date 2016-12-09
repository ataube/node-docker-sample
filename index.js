const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.json({ response: 'world' });
});

if (require.main === module) {
  app.listen(3000, (err) => {
    if (err) {
      console.error('Error starting server', err);
      return;
    }
    console.log('Server started');
  });  
}

module.exports = app;
