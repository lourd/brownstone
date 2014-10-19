Template.myGroupsPane.helpers({
	groupOfMine: function () {
		return Groups.find({ _id: { $in: Meteor.user().profile.groups }});
	}
});