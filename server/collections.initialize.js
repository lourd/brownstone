/*
* Create the dummy data if the collections do not have any inputs. 
* Will be used to test all the possible workflows in development
*/

Meteor.startup(function() {
	//Create some fake groups
	
	var ifcId, panhelId, lgcId, deltaAlphaId, phiSigId, aPhiId, sigmaKappaId, wilgId, fenwayHouseId;
	if (Groups.find().count() === 0) {
		//A dummy IFC
		ifcId = Groups.insert({
			name: 'Interfraternity Council',
			type: 'GOVERNING BODY',
			members: [],
			positions: [],
			admins: []
		});

		//Two frats
		deltaAlphaId = Groups.insert({
			name: 'Delta Alpha',
			type: 'FRATERNITY',
			members: [],
			positions: [],
			admins: []
		});

		phiSigId = Groups.insert({
			name: 'Phi Sigma',
			type: 'FRATERNITY',
			members: [],
			positions: [],
			admins: []
		});

		// // A dummy panhel is there another kind?)
		// panhelId = Groups.insert({
		// 	name: 'Panhellic Association',
		// 	type: 'GOVERNING BODY',
		// 	members: [],
		// 	positions: [],
		// 	admins: []
		// });

		// // And a dummy LGC
		// lgcId = Groups.insert({
		// 	name: 'Living Group Council',
		// 	type: 'GOVERNING BODY',
		// 	members: [],
		// 	positions: [],
		// 	admins: []
		// });

		// // Two sororities
		// aPhiId = Groups.insert({
		// 	name: 'Alpha Phi',
		// 	type: 'SORORITY',
		// 	members: [],
		// 	positions: [],
		// 	admins: []
		// });

		// sigmaKappaId = Groups.insert({
		// 	name: 'Sigma Kappa',
		// 	type: 'SORORITY',
		// 	members: [],
		// 	positions: [],
		// 	admins: []
		// });

		// // Two ILGs
		// wilgId = Groups.insert({
		// 	name: 'WILG',
		// 	type: 'ILG',
		// 	members: [],
		// 	positions: [],
		// 	admins: []
		// });

		// fenwayHouseId = Groups.insert({
		// 	name: 'Fenway House',
		// 	type: 'ILG',
		// 	members: [],
		// 	positions: [],
		// 	admins: []
		// });
	}

	var dorneId, louisId, craigId;
	if (Meteor.users.find().count() === 0 ) {
		/////////////////////////////////////////////////////
		// Make an account for Dorne with his two groups
		dorneId = Accounts.createUser({
			email: 'dorne@mit.edu',
			password: 'password',
			profile: {
				firstName: 'Andrew',
				lastName: 'Dorne',
				groups: [ifcId, phiSigId]
			}
		});
		// Update the IFC group
		Groups.update({ _id: ifcId }, {
			$push: { 
				members: dorneId,
				positions: {
					$each: [
						{
							type: 'PRESIDENT',
							term: 'SPRING 2013',
							userId: dorneId
						},
						{
							type: 'PRESIDENT',
							term: 'FALL 2013',
							userId: dorneId
						}
					]
				},
				admins: dorneId
			}
		});
		// Update the phi sig group
		Groups.update({ _id: phiSigId }, {
			$push: {
				members: dorneId
			}
		});
		/////////////////////////////////////////////////////

		// Make an account for louis, add his past position to IFC, and add to frat
		louisId = Accounts.createUser({
			email: 'descioli@mit.edu',
			password: 'password',
			profile: {
				firstName: 'Louis',
				lastName: 'DeScioli',
				groups: [deltaAlphaId]
			}
		});
		Groups.update({ _id: ifcId }, {
			$push: {
				positions: 'VICE-PRESIDENT',
				term: 'SPRING 2012',
				userId: louisId
			}
		});
		Groups.update({ _id: deltaAlphaId }, {
			$push: {
				members: louisId,
				positions: {
					$each: [
						{
							type: 'PRESIDENT',
							term: 'FALL 2013',
							userId: louisId
						},
						{
							type: 'RISK MANAGER',
							term: 'FALL 2012',
							userId: louisId
						}
					]
				},
				admins: louisId
			}
		});
		/////////////////////////////////////////////////////

		// Make an account for Craig
		craigId = Accounts.createUser({
			email: 'ccheney@mit.edu',
			password: 'password',
			profile: {
				firstName: 'Craig',
				lastName: 'Cheney',
				groups: [deltaAlphaId, phiSigId]
			}
		});
		Groups.update({ _id: deltaAlphaId }, {
			$push: {
				members: craigId,
				positions: {
					$each: [
						{
							type: 'HOUSE MANAGER',
							term: 'FALL 2012',
							userId: craigId
						},
						{
							type: 'PRESIDENT',
							term: 'SPRING 2013',
							userId: craigId
						}
					]
				}
			}
		});
		/////////////////////////////////////////////////////

		// Make an account for Guillaume
		guillaumeId = Accounts.createUser({
			email: 'gkugener@mit.edu',
			password: 'password',
			profile: {
				firstName: 'Guillaume',
				lastName: 'Kugener',
				groups: [deltaAlphaId]
			}
		});
		Groups.update({ _id: deltaAlphaId }, {
			$push: {
				members: guillaumeId,
				positions: {
					type: 'PRESIDENT',
					term: 'SPRING 2014',
					userId: guillaumeId
				}
			}
		});
		/////////////////////////////////////////////////////





	}

});