Groups = new Meteor.Collection('groups');

Meteor.methods({
    newGroup: function(doc) {
        // Initialize apps array
        doc.apps = [];
        return Groups.insert(doc);
    },

    addGroupApp: function(appId, groupId) {
        return Groups.update(
                {_id: groupId},
                { $push: { apps: appId } }
            );
    },

    removeGroupApp: function(appId, groupId) {
        return Groups.update(
                {_id: groupId},
                { $pull: { apps: appId} }
            );
    }
})