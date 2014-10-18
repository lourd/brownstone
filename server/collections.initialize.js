/*
* Create the dummy data if the collections do not have any inputs. 
* Will be used to test all the possible workflows in development
*/

Meteor.startup(function() {
	//Create some fake groups
	if (Groups.find().count() === 0) {
		//A dummy IFC
		var ifcId = Groups.insert({
			name: 'Interfraternity Council',
			type: 'GOVERNING BODY',
			governingBody: null,
			members: [],
			positions: [],
			admins: []
		});

		// A dummy panhel is there another kind?)
		var panhelId = Groups.insert({
			name: 'Panhellic Association',
			type: 'GOVERNING BODY',
			members: [],
			positions: [],
			admins: []
		});

		// And a dummy LGC
		var lgcId = Groups.insert({
			name: 'Living Group Council',
			type: 'GOVERNING BODY',
			members: [],
			positions: [],
			admins: []
		});

		//Two frats
		var deltaAlphaId = Groups.insert({
			name: 'Delta Alpha',
			type: 'FRATERNITY',
			members: [],
			positions: [],
			admins: []
		});

		var phiSigId = Groups.insert({
			name: 'Phi Sigma',
			type: 'FRATERNITY',
			members: [],
			positions: [],
			admins: []
		});

		// Two sororities
		var aPhiId = Groups.insert({
			name: 'Alpha Phi',
			type: 'SORORITY',
			members: [],
			positions: [],
			admins: []
		});

		var sigmaKappaId = Groups.insert({
			name: 'Sigma Kappa',
			type: 'SORORITY',
			members: [],
			positions: [],
			admins: []
		});

		// Two ILGs
		var wilgId = Groups.insert({
			name: 'WILG',
			type: 'ILG',
			members: [],
			positions: [],
			admins: []
		});

		var fenwayHouseId = Groups.insert({
			name: 'Fenway House',
			type: 'ILG',
			members: [],
			positions: [],
			admins: []
		});
	}

});