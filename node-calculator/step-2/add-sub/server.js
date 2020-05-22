
var express = require('express');
var app = express();

app.get('/add/:num1/:num2', function (req, res) {
  const { num1, num2 } = req.params;
  if(isNaN(parseInt(num1)) || isNaN(parseInt(num2))){
      return res.send('Número inválidos!');
  }
  const add = parseInt(num1) + parseInt(num2);

  res.send(`La suma es: ${add}`);
});

app.get('/sub/:num1/:num2', function (req, res) {
    const { num1, num2 } = req.params;
    if(isNaN(parseInt(num1)) || isNaN(parseInt(num2))){
        return res.send('Número inválidos!');
    }
    const sub = parseInt(num1) - parseInt(num2);
  
    res.send(`La resta es: ${sub}`);
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});