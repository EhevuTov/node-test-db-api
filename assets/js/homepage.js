require([
		"dojo/dom"
	, "dojo/dom-style"
	, "dojo/_base/declare"
	, "dojo/_base/fx"
	, 'dstore/RequestMemory'
	, 'dgrid/OnDemandGrid'
	, 'dgrid/Keyboard'
	, 'dgrid/Selection'
	, 'dgrid/Editor'
	, 'dijit/form/TextBox'
	, "dijit/layout/BorderContainer"
	, "dijit/layout/ContentPane"
	, "dijit/layout/TabContainer"
	,	'dojo/parser'
	, "dojo/domReady!"]
	, ready ); // the callback function to run when done asynchronously

function ready(dom,style,declare,fx,RequestMemory,Grid,Keyboard,Selection,Editor) {
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
		UnitID: {label: 'UnitID', sortable: true, editor: 'text', editOn:'click'},
		Disposition: {label: 'Disposition', sortable: true, editor: 'text', editOn:'click'},
		OPC: {label: 'OPC', sortable: true, editor: 'text', editOn:'click'},
		TCIC: {label: 'TCIC', sortable: true, editor: 'text', editOn:'click'},
		DPC: {label: 'DPC', sortable: true, editor: 'text', editOn:'click'},
		LinkSet: {label: 'LinkSet', sortable: true, editor: 'text', editOn:'click'}
	};

	var editGrid = new (declare([ Grid, Keyboard, Selection, Editor ]))({
		collection: new RequestMemory({ target:'/cdr' }),
		columns: columnHeaders,
	}, 'createRecord');
}
