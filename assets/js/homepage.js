require([
    "dojo/dom"
  , "dojo/parser"
  , "dojo/data/ObjectStore"
  , "dojo/store/Cache"
  , "dojo/store/Memory"
  , "dojo/store/Observable"
  , "dojo/store/JsonRest"
  , "dijit/layout/BorderContainer"
  , "dijit/layout/TabContainer"
  , "dijit/layout/ContentPane"
  , "dijit/registry"
  , "dojox/grid/DataGrid"
	, "dgrid/Grid"
//	, "dgrid"
  , "dojo/domReady!"]
  , function(q,w,e,r,t,y,u,i,a,s,d,f,dgrid,grid) {dojo.ready( ready ) } ); // the callback function to run when done asynchronously

function ready(q,w,e,r,t,y,u,i,a,s,d,f,dgrid,Grid) {
  // init needed to begin program after successful loading
  // run loading icon for start of program
  var n = dojo.byId("preLoader");
  dojo.fadeOut({
		node:n,
		duration:720,
		onEnd:function(){
			dojo.style(n,"display","none");
		}
	}).play();

	var data = [
		{ first: 'Bob', last: 'Barker', age: 89 },
		{ first: 'Vanna', last: 'White', age: 55 },
		{ first: 'Pat', last: 'Sajak', age: 65 }
	];

	var grid = new Grid({
		columns: {
							 first: 'First Name',
			last: 'Last Name',
			age: 'Age'
						 }
	}, 'grid');
	grid.renderArray(data);

/*
var store = [{
    0: "Lab 46", 1: "DA1", 2: "130.020.002", 3: "4721", 4: "130.020.001"
  , 5: "A01", 6: "3456", 7: "", 8: "2012-09-27 21:40:25", 9: "I", 10: "1"
  , 11: "2129991721", 12: "6305799800", 13: "6309756721", 14: "181.275"
  , 15: "0.000", 16: "268536255", 17: "", 18: "", 19: "F", 20: "6305799880"
}];
*/

//create the store with the data

//var cdrStore = new dojo.store.Memory();
//var dataStore = new dojo.data.ObjectStore({objectStore: cdrStore});
//var dataStore = dojo.store.Cache(dojo.store.JsonRest({target:"/filter/"}), dojo.store.Memory());
//console.dir(store);
//console.dir(dataStore.get(1));
//dojo.store.JsonRest({target:"/filter/"}).then(function(results){ console.dir(results);});
//var store = dojo.store.JsonRest({target:"/filter/"}).get();
//console.dir(store);
//dojo.store.JsonRest({target:"/filter/"}).get().then(function(results){ console.dir(results.filters);});
// wrap the store with Observable to make it possible to monitor
//cdrStore = new dojo.store.Observable(cdrStore);

//dijit.registry.byId('grid').setStore(dataStore);

// Socket.IO connection
};
