const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(__dirname+'/../db/cdr.sqlite3');

db.serialize(function() {
	db.each("SELECT * FROM cdr", function(err, row) {
		console.dir(row);
	});
});

db.close();
