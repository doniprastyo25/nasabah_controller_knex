const knex = require("./knex");

//create
function createNasabah(car) {
	return knex.connectedKnex("dnasabah").insert(car);
	
}

//read
function getAllNasabah() {
	return knex.connectedKnex("dnasabah").select('*')
}

//delete
function deleteNasabah(id) {
	return knex.connectedKnex("dnasabah").where("id", id).del(id);
}
//update
function updateNasabah(id, car) {
	return knex.connectedKnex("dnasabah").where("id", id).update(car)
}

module.exports = {
	createNasabah,
	getAllNasabah,
	deleteNasabah,
	updateNasabah
}