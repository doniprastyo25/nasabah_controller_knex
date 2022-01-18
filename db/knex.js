const knex = require('knex')
const connectedKnex = knex({
	client: "sqlite3",
	connection: {
		// filename: "cwc.sqlite3"
		filename: "nasabah.db"
}
	
});



module.exports = {
  connectedKnex
}