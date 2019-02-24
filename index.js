const express = require('express');
const morgan = require('morgan');
const consign = require('consign');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use(morgan('dev'));

consign({
  cwd: 'src'
}).include('routes').into(app);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});