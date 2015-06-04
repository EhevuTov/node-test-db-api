const SqliteToJson = require('sqlite-to-json');
const sqlite3 = require('sqlite3');
const db = new SqliteToJson({
	client: new sqlite3.Database(__dirname+'/../db/cdr.sqlite3')
});

db.client.serialize(function() {
	db.client.each("SELECT * FROM cdr", function(err, row) {
		console.dir(row);
	});
});

 
db.client.close();
