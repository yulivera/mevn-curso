import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// para acceder al directorio actual
import path from 'path';

const app = express();

// conexion a DB
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/udemy';
const options = {
	useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
}
mongoose.connect(uri, options).then(
	() => { console.log('conectado a mongoDB'); },
	err => { err }
	);


// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas
// app.get('/', function(req, res){
// 	res.send('hola mundo');
// });

app.use('/api', require('./routes/nota'));

// Middleware para vuejs router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function(){
	console.log('escuchando el puerto: ', app.get('puerto'));
});