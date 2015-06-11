require([
    "dojo/dom"
  , "dojo/dom-style"
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
//  , "dojox/grid/DataGrid"
	, "dgrid/Grid"
//	, "dgrid"
  , "dojo/domReady!"]
  , ready ); // the callback function to run when done asynchronously

function ready(dom,style,w,e,r,t,y,u,i,a,s,d,f,Grid) {
  // init needed to begin program after successful loading
  // run loading icon for start of program
  var n = dom.byId("preLoader");
  dojo.fadeOut({
		node:n,
		duration:720,
		onEnd:function(){
			style.set(n,"display","none");
		}
	}).play();

	var data = [
		{ first: 'Bob', last: 'Barker', age: 89 },
		{ first: 'Vanna', last: 'White', age: 55 },
		{ first: 'Pat', last: 'Sajak', age: 65 }
	];

	/*
	var grid = new Grid({
		columns: {
			first: 'First Name',
			last: 'Last Name',
			age: 'Age'
		}
	}, 'grid');
	grid.renderArray(data);
	*/
}
