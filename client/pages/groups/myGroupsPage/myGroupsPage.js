Template.myGroupsPage.helpers({
	groupOfMine: function () {
		groupIds = Meteor.user().profile.groups;
		
		var myGroups=[];
		for (var i = groupIds.length - 1; i >= 0; i--) {
			myGroups[i] = Groups.findOne(groupIds[i]);
		}
		return myGroups;
	}
});