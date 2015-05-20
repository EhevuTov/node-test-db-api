const SqliteToJson = require('sqlite-to-json');
const sqlite3 = require('sqlite3');
const exporter = new SqliteToJson({
	  client: new sqlite3.Database('./db/mydb.sqlite3')
});
exporter.tables(function (err, tables) {
	// all your table names here 
});
