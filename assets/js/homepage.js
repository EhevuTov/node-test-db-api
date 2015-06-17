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
	'dgrid/ColumnSet',
	'dgrid/extensions/ColumnResizer',
	'dijit/form/TextBox',
	"dijit/layout/BorderContainer",
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer",
	'dojo/parser',
	"dojo/domReady!"],
	ready ); // the callback function to run when done asynchronously

function ready(dom,style,has,declare,fx,Rest,RequestMemory,SimpleQuery,Cache,Trackable,Grid,Keyboard,Selection,Editor,ColumnSet, ColumnResizer) {
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
	var columnSet = [
		[
		[
		{field: 'UnitID', label: 'UnitID', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		{field: 'Disposition', label: 'Disposition', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true}
	]],
		[[
		{field: 'OPC', label: 'OPC', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		{field: 'TCIC', label: 'TCIC', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		{field: 'DPC', label: 'DPC', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		{field: 'CdPA',label: 'CdPA', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		{field: 'CgPA',label: 'CgPA', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		{field: 'OpCode', label: 'Op Code', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		{field: 'TranslationType', label: 'Xlation', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true},
		{field: 'LinkSet', label: 'Link Set', sortable: true, editor: 'text', editOn:(has('touch')?'click':'dblclick'), autoSave:true}
		]
		]
	];


	var RestMem = declare([Rest, RequestMemory, SimpleQuery, Cache, Trackable]);

	var editGrid = new (declare([ Grid, ColumnSet, Keyboard, Selection, Editor, ColumnResizer ]))({
		collection: new RestMem({ target:'/cdr/' }),
			columnSets: columnSet,
			loadingMessage: 'Loading data...',
			noDataMessage: 'No results found.'
	}, 'showRecords');
}
