Template.topNavBar.events({
    'click #logout': function(evt) {
        evt.preventDefault();
        Meteor.logout();
    },

    // Stop the signin dropdown from closing
    'click .login-dropdown' : function(evt) {
        evt.stopPropagation();
    },

    // Login
    'submit form.sign-in' : function(evt) {
        evt.preventDefault();
        var email = $(evt.target).find('#login-email').val();
        var password = $(evt.target).find('#login-password').val();
        Meteor.loginWithPassword(email, password);
    }
});
