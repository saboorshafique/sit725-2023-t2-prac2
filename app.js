const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Both numbers are required.' });
  }

  const result = parseFloat(num1) + parseFloat(num2);
  return res.json({ result });
});

app.post('/calculate', (req, res) => {
  const { operation, num1, num2 } = req.body;
  if (!operation || !num1 || !num2) {
    return res.status(400).json({ error: 'Operation and both numbers are required.' });
  }

  let result;
  switch (operation) {
    case 'add':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtract':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiply':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation.' });
  }

  return res.json({ result });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});