if (Meteor.isClient) {


    Template.appsPage.helpers({
        apps: function () {
            return Apps.find();
        },
        haveApp: function() {
            var group = Groups.findOne(Meteor.user().profile.groupId);
            return group && group.apps && group.apps.indexOf(this._id) >= 0;
        }
    });

    Template.appsPage.events({
        'click #add-app': function (evt) {
            var appName = this.name;
            Meteor.call("addGroupApp", this._id, Meteor.user().profile.groupId, function() {
                alert(appName + " added");
            });
        },

        'click #remove-app': function(evt) {
            var appName = this.name;
            Meteor.call("removeGroupApp", this._id, Meteor.user().profile.groupId, function() {
                alert(appName + " removed");
            });
        }
    });
    
}