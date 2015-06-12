require([
		"dojo/dom"
	, "dojo/dom-style"
	, "dojo/_base/fx"
	, 'dgrid/OnDemandGrid'
	, 'dstore/RequestMemory'
	, 'dijit/form/TextBox'
	, "dijit/layout/BorderContainer"
	, "dijit/layout/ContentPane"
	, "dijit/layout/TabContainer"
	,	'dojo/parser'
	, "dojo/domReady!"]
	, ready ); // the callback function to run when done asynchronously

function ready(dom,style,fx,Grid,RequestMemory) {
	// init needed to begin program after successful loading
	// run loading icon for start of program
	var n = dom.byId("preLoader");
	fx.fadeOut({
		node:n,
		duration:720,
		onEnd:function(){
			style.set(n,"display","none");
		}
	}).play();

	var columnHeaders = {
			UnitID: 'Unit ID',
			Disposition: 'Disposition',
			OPC: 'OPC',
			TCIC: 'TCIC',
			DPC: 'DPC',
			LinkSet: 'LinkSet'
	};

	// load Grid
	var grid = new Grid({
		collection: new RequestMemory({ target:'/cdr' }),
		columns: columnHeaders
	}, 'showRecords');
	grid.startup();
}
