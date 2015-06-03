const SqliteToJson = require('sqlite-to-json');
const sqlite3 = require('sqlite3');
const db = new SqliteToJson({
	  client: new sqlite3.Database(__dirname+'/../db/mydb.sqlite3')
});
db.tables(function (err, tables) {
	// all your table names here 
});
