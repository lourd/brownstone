// Meteor.users is a collection already created by Meteor

Meteor.methods({
    newUser: function () {
        // ...
    }
});

Meteor.users.allow({
    insert: function (userId, doc) {
        //...
    },
    update: function (userId, doc, fields, modifier) {
        //...
    },
    remove: function (userId, doc) {
        //...
    },
    fetch: ['owner'],
    transform: function () {
        //...
    }
});