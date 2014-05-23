/*
 *  The settings for the whole router
*/
Router.configure({
    layoutTemplate: 'application',
    loadingTemplate: 'loading',
    waitOn: function() {
        if (Meteor.user()) {
            var groupId = Meteor.user().profile.groupId;
            return [
                Meteor.subscribe('singleGroup', groupId),
                Meteor.subscribe('notifications'),
                Meteor.subscribe('groupApps', groupId)
            ];
        } else {
            return []
        }
    }
});

Router.map(function() {

    this.route('homePage', {
        path: '/'
    });

    this.route('profilePage', {
        path: '/profile'
    })

    this.route('createAccountPage', {
        path: '/sign_up',
        waitOn: function() {
            return Meteor.subscribe('groups');
        }
    });

    this.route("appsPage", {
        path: '/apps',
        waitOn: function() {
            return Meteor.subscribe('apps');
        }
    });

    //////////////////////////////////////////////////  
    this.route("todosAppPage", { // the route name must match the one in fixtures!!!
        path: '/apps/todos' 
    });
    //////////////////////////////////////////////////  









    // Group paths
    // Must be at bottom because of catch-all params
    this.route('groupPage', {
        path: '/:groupId'
    });

    this.route('groupMembersPage', {
        path: '/:groupId/members',
        waitOn: function() {
            return Meteor.subscribe('groupUsers', this.params.groupId);
        }
    });

    this.route('groupSettingsPage', {
        path: '/:groupId/settings'
    });

    this.route('groupAppsPage', {
        path: '/:groupId/apps'
    });

});

// Including this here because it seems like a router-level thing
// Accounts.onLogin( function(attempt) {
//     console.log(attempt);
//     Router.go('groupPage', {groupId: attempt.user.profile.groupId});
// });

Router.onBeforeAction('loading');