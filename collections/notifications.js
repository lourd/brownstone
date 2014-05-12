Notifications = new Meteor.Collection('notifications');

Notifications.allow({
    update: ownsDocument
});

// Meteor.methods({
//     createNotification: function(doc) {
        
//     }
// })