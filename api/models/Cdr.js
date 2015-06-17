/**
* Cdr.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

		UnitID:{
			type: "string",
			required: true
		},
		Disposition:{
			type: "string",
			required: true
		},
		OPC:{
			type: "string",
			required: true
		},
		DPC:{
			type: "string",
			required: true
		},
		TCIC:{
			type: "integer",
			required: true
		},
		CdPA:{
			type: "integer",
			required: true
		},
		CgPA:{
			type: "integer",
			required: true
		},
		OpCode:{
			type: "integer",
			required: true
		},
		TranslationType:{
			type: "integer",
			required: true
		},
		LinkSet:{
			type: "string",
			required: true
		}
		/*
					 ,DPC,LinkSet,CARRierID,ExmOGT,StartDateTime,Direction,International,Calling#,Charge#,Called#,Hold Seconds,Bill Seconds,Sequence#,OLII,JIP,LNP dipped,LRN
		*/
  }
};

