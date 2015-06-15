require([
	"dojo/dom",
	"dojo/dom-style",
	"dojo/has",
 	"dojo/_base/declare",
	"dojo/_base/fx",
	'dstore/Rest',
	'dstore/RequestMemory',
	'dstore/SimpleQuery',
	'dstore/Cache',
	'dstore/Trackable',
	'dgrid/OnDemandGrid',
	'dgrid/Keyboard',
	'dgrid/Selection',
	'dgrid/Editor',
	'dijit/form/TextBox',
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	'dojo/parser',
	"dojo/domReady!"],
	ready ); // the callback function to run when done asynchronously

function ready(dom,style,has,declare,fx,Rest,RequestMemory,SimpleQuery,Cache,Trackable,Grid,Keyboard,Selection,Editor) {
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

	// build async RESTful grid
	var columnHeaders = {
		UnitID: {label: 'UnitID', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		Disposition: {label: 'Disposition', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		OPC: {label: 'OPC', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		TCIC: {label: 'TCIC', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		DPC: {label: 'DPC', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		LinkSet: {label: 'LinkSet', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true}
	};

	var RestMem = declare([Rest, RequestMemory, SimpleQuery, Cache, Trackable]);

	var editGrid = new (declare([ Grid, Keyboard, Selection, Editor ]))({
		collection: new RestMem({ target:'/cdr/' }),
		columns: columnHeaders,
		loadingMessage: 'Loading data...',
		noDataMessage: 'No results found.'
	}, 'createRecord');
}
