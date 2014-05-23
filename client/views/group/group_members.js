Template.groupMembersPage.helpers({
    members: function () {
        // Should already be filtered by mongo
        return Meteor.users.find({"profile.groupId": Meteor.user().profile.groupId});
    }
});