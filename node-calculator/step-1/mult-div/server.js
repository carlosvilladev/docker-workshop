
var express = require('express');
var app = express();

app.get('/mult/:num1/:num2', function (req, res) {
  const { num1, num2 } = req.params;
  if(isNaN(parseInt(num1)) || isNaN(parseInt(num2))){
      return res.send('Número inválidos!');
  }
  const add = parseInt(num1) * parseInt(num2);

  res.send(`La multiplicación es: ${add}`);
});

app.get('/div/:num1/:num2', function (req, res) {
    const { num1, num2 } = req.params;
    if(isNaN(parseInt(num1)) || isNaN(parseInt(num2))){
        return res.send('Número inválidos!');
    }
    if(parseInt(num2) == 0) return res.send('La división entre 0 no está definida.');
    const sub = parseInt(num1) / parseInt(num2);
  
    res.send(`La división es: ${sub}`);
  });

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});