const express = require('express');
const app = express();

// app.use((req ,res)  => {
//   res.send('Hello World');
// });

app.use('/', (req, res) => {
  res.send('Hellor this is dashboard');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});