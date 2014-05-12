Meteor.publish('singleGroup', function(id) {
    return Groups.find(id);
});

Meteor.publish('groupUsers', function(groupId) {
    return Users.find({groupId: groupId});
});

Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId});
});