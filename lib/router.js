/*
 *  The settings for the whole router
*/
Router.configure({
    layoutTemplate: 'application',
    loadingTemplate: 'loading',
    waitOn: function() {
        if (Meteor.user()) {
            return [Meteor.subscribe('singleGroup', Meteor.user().profile.groupId)];
        } else {
            return []
        }
    }
});

// Including this here because it seems like a router-level thing
// Accounts.onLogin( function(attempt) {
//     Meteor.subscribe('singleGroup', attempt.user.profile.groupId)
// });

Router.map(function() {

    this.route('homePage', {
        path: '/'
    });


    this.route('profilePage', {
        path: '/profile'
    })

    this.route('createAccountPage', {
        path: '/sign_up'
    });

    this.route('groupPage', {
        path: '/:groupId'
    });


});

Router.onBeforeAction('loading');