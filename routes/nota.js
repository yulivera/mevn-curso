import express from 'express';
const router = express.Router();

// importar el modelo nota
import Nota from '../models/nota';
import Habi from '../models/habi';

// Agregar una nota
router.post('/nueva-nota', async(req, res) => {

	const body = req.body;

	try{

		const notaDB = await Nota.create(body);

		res.status(200).json(notaDB);

	} catch (error) {

		return res.status(500).json({
			mensaje:'Ocurrio un error',
			error
		})
	
	}

});

// Get con parametro
router.get('/nota/:id', async(req, res) => {

	const _id = req.params.id;

	try {

		const notaDB = await Nota.findOne({_id});
		res.json(notaDB);

	} catch (error) {
		return res.status(500).json({
			mensaje:'Ocurrio un error',
			error
		})
	}

});

// Get con todos los documentos
router.get('/nota', async(req, res) => {

	try {

		const notaDb = await Nota.find();
		res.json(notaDb);

	} catch (error) {
		return res.status(400).json({
			mensaje:'Ocurrio un error',
			error
		})	
	}

});

// Delete eliminar una Nota
router.delete('/nota/:id', async(req, res) => {
	
	const _id = req.params.id;
	try {

		const notaDb = await Nota.findByIdAndDelete({_id});

		if(!notaDb){
			return res.status(400).json({
			mensaje:'Ocurrio un error',
			error
			})
		}

		res.json(notaDb);

	} catch (error) {
		return res.status(400).json({
			mensaje:'Ocurrio un error',
			error
		})	
	}
});

// Put actualizar nota
router.put('/nota/:id', async(req, res) => {
	const _id = req.params.id;
	const body = req.body;

	try {

		const notaDb = await Nota.findByIdAndUpdate(_id,body,{new: true});
		res.json(notaDb);

	}catch (error){
		return res.status(400).json({
			mensaje:'Ocurrio un error',
			error
		})	
	}
});

// +++ habilidades ++++
// Agregar
router.post('/nueva-habi', async(req, res) => {

	const body = req.body;

	try{

		const notaDB = await Habi.create(body);

		res.status(200).json(notaDB);

	} catch (error) {

		return res.status(500).json({
			mensaje:'Ocurrio un error',
			error
		})
	
	}

});

// Get con todos las habilidades
router.get('/habi', async(req, res) => {

	try {

		const notaDb = await Habi.find();
		res.json(notaDb);

	} catch (error) {
		return res.status(400).json({
			mensaje:'Ocurrio un error',
			error
		})	
	}

});


// exportacion de router
module.exports = router;
