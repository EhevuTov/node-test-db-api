const SqliteToJson = require('sqlite-to-json');
const sqlite3 = require('sqlite3');
const db = new SqliteToJson({
	  //client: new sqlite3.Database(__dirname+'/../db/mydb.sqlite3')
	client: new sqlite3.Database(":memory:")
});
db.tables(function (err, tables) {
	// all your table names here 
});

db.client.serialize(function() {
	db.client.run("CREATE TABLE lorem (info TEXT, val INT)");

	var stmt = db.client.prepare("INSERT INTO lorem VALUES (?,?)");
	for (var i = 0; i < 10; i++) {
		stmt.run("Ipsum " + i, i+1);
	}
	stmt.finalize();

	db.client.each("SELECT rowid AS id, info, val FROM lorem", function(err, row) {
		console.dir(row);
	});
	db.client.run("DROP TABLE lorem");
});

 
db.client.close();
