// const express = require('express');
// const app = express();
// const path = require('path');

// // Setting
// app.set('port', 4000);

// // Middlewares
// app.use(express.static(path.join(__dirname, 'views')))

// console.log(__dirname);

// // Routes
// app.get('/', (req, res) => {
//   res.send('bienvenidos');
// })

// app.listen(app.get('port'), () => {
//   console.log(`Aplicacion escuchada en el puerto ${app.get('port')}`);

// })


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const app = express();
const path = require('path');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  // send homepage
  res.sendFile(__dirname + '/views/');

});

router.use(express.static(path.join(__dirname, 'views')))



app.use('/', router);

app.listen(process.env.PORT || 4000);
console.log(`App is listening at ${process.env.PORT || 4000}`);
