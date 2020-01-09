import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const habiSchema = new Schema({

	nombre: {type: String, required: [true, 'Nombre obligatorio'] },
	porcentaje: {type: String, required: [true, 'Porcentaje obligatorio'] }
});

// Convertor a un modelo
const Habi = mongoose.model('Habi', habiSchema);

export default Habi;