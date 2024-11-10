const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('Form');
});

app.post('/submit', (req, res) => {
  const { input_text, input_text2, input_text3,input_text4 } = req.body;
  res.render('wyniki', { input_text, input_text2, input_text3,input_text4 });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});