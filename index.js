const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/plant', require('./routes/plant'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
