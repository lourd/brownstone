/*
* Create the dummy data if the collections do not have any inputs. Will be used to test all the possible workflows 
* in development
*/

Meteor.startup(function() {
	//Create some fake groups
	if (Groups.find().count() == 0) {
		//A dummy IFC
		var ifcId = Groups.insert({
			name: 'IFC',
			type: 'GOVERNING BODY',
			governingBody: null,
			members: [
				'Hal',
				'Darell',
				'Lincoln',
				'Wallis'
			],
			positions: [
				{
					type: 'PRESIDENT',
					term: 'FALL2014',
					name: 'Hal',
					userId: null
				},
				{
					type: 'RUSH CHAIR',
					term: 'FALL2014',
					name: 'Wallis'
					userId: null
				},
				{
					type: 'PRESIDENT',
					term: 'SPRING 2014',
					name: 'Wallis',
					userId: null
				},
				{
					type: 'RUSH CHAIR',
					term: 'SPRING2014',
					nameL 'Lincoln',
					userId: null
				}
			],
			users: []
		});

		//Two dummy frats
		var deltaAlphaId = Groups.insert({
			name: 'Delta Alpha',
			type: 'FRATERNITY',
			governingBody: ifcId
			members: [
				'John Smith',
				'Michael Smith',
				'McCoy',
				'Tony'
			],
			positions: [
				{
					type: 'PRESIDENT',
					term: 'FALL2014',
					name: 'McCoy',
					userId: null
				},
				{
					type: 'SOCIAL CHAIR',
					term: 'FALL2014',
					name: 'Michael Smith',
					userId: null
				}
			],
			users: []
		});

		var phiSigmaId = Groups.insert({
			name: 'Phi Sigma',
			type: 'FRATERNITY',
			governingBody: ifcId,
			members: [
				'Sam B',
				'Alfred O',
				'Gerald N',
				'Steve E',
				'Rick R'
			],
			positions: [
				{	
					type: 'PRESIDENT',
					term: 'FALL2014',
					name: 'Sam B',
					userId: null
				}
			],
			users: []
		});

		//A dummy panhell
		var panhellId = Groups.insert({
			name: 'Panhellic Association',
			type: 'GOVERNING BODY',
			governingBody: null,
			members: [
				'Jamie',
				'Sarah',
				'Jasmine',
				'Kim'
			],
			positions: [
				{
					type: 'PRESIDENT',
					term: 'FALL2014',
					name: 'Jasmine',
					userId: null
				}
			],
			users: []
		});

		//A dummy sorority
		var alphaPhi = Groups.insert({
			name: 'Alpha Phi',
			type: 'SORORITY',
			governingBody: panhellId,
			members: [
				'Jen',
				'Rachel',
				'Melissa',
				'Katie',
				'Claire'
			],
			positions: [
				{
					type: 'PRESIDENT',
					term: 'FALL2014',
					name: 'Rachel',
					userId: null
				},
				{
					type: 'SOCIAL CHAIR',
					term: 'FALL2014',
					name: 'Jen',
					userId: null
				}
			],
			users: []
		});

		//A dummy sorority
		var sigmaKappa = Groups.insert({
			name: 'Sigma Kappa',
			type: 'SORORITY',
			governingBody: panhellId,
			members: [
				'Sarah',
				'Gen',
				'Lisa',
				'Kat',
				'Kelly'
			],
			positions: [
				{
					type: 'PRESIDENT',
					term: 'FALL2014',
					name: 'Kelly',
					userId: null
				},
				{
					type: 'SOCIAL CHAIR',
					term: 'FALL2014',
					name: 'Gen',
					userId: null
				}
			],
			users: []
		});

	}

		//A dummy living group council
		var lgcId = Groups.insert({
			name: 'Living Group Council',
			type: 'GOVERNING BODY',
			governingBody: null,
			members: [
				'John',
				'Wayne',
				'Jane',
				'Tessa'
			],
			positions: [
				{
					type: 'PRESIDENT',
					term: 'FALL2014',
					name: 'Tessa',
					userId: null
				}
			],
			users: []
		});

		// An ILG
		var fenwayHouseId = Groups.insert({
			name: 'Fenway House',
			type: 'ILG',
			governingBody: lgcId,
			members: [
				'Tessa',
				'Leroy',
				'Margaret',
				'Brit'
			],
			positions: [
				{
					type: 'PRESIDENT',
					term: 'FALL2014',
					name: 'Brit',
					userId: null
				}
			]

		});


});