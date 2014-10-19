Template.joinGroupPane.helpers({
	groups: function () {
		return Groups.find({ _id: { $not:{$in: Meteor.user().profile.groups}}});
		// return Groups.find({});
	}
});

Template.joinGroupTile.helpers({
	memberPlur: function (length) {
		if(length >1){
			return "members";
		}
		return "member";
	}
});