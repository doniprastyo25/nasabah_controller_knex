const db = require("../db/nasabah");

//create data
const controllCreate = async(req, res)=>{
	const results = await db.createNasabah(req.body);
	res.status(201).json({id : results[0]})
}

//read data
const controllGet = async(req, res)=>{
	const nasabah = await db.getAllNasabah();
	res.status(200).json({
    status : "ok",
    msg : "success",
    nasabah 
  })
}

//update data
const  controlUpdate = async (req, res)=>{
	const id = await db.updateNasabah(req.params.id, req.body)
  res.status(200).json({ id })
}

//delete data
const controlDelete = async(req, res)=>{
	await db.deleteNasabah(req.params.id);
	res.status(200).json({success: true})
}

module.exports = {
  controllCreate,
  controllGet,
  controlUpdate,
  controlDelete
}