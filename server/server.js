require('./config/config');

const colors = require('colors');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(  require('./routes/usuario')  );

mongoose.set('findIoneAndUpdate', true);
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.URLDB, {useNewUrlParser: true}, (err, res) => {
    if(err) throw err;

    console.log('base de datos ONLINE'.green);
})

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto:`, process.env.PORT)
});