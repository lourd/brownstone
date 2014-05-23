Meteor.publish('singleGroup', function(id) {
    return Groups.find(id);
});

// Return all of the existing groups
Meteor.publish('groups', function() {
    return Groups.find();
});

Meteor.publish('groupUsers', function(groupId) {
    return Meteor.users.find({"profile.groupId": groupId});
});

Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId});
});

Meteor.publish('apps', function() {
    return Apps.find();
});

Meteor.publish('groupApps', function(groupId) {
    var group = Groups.findOne(groupId);
    return group && group.apps && Apps.find({
        _id: { $in: group.apps}
    });
});