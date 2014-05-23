Template.profilePage.helpers({
    email: function() {
        return this.emails[0].address;
    }
})

Template.profilePage.events({
    'submit form#profile-edit-form': function (evt) {
        evt.preventDefault();

        var email = $(evt.target).find('#emailInput').val();
        var firstName = $(evt.target).find('#firstNameInput').val();
        var lastName = $(evt.target).find('#lastNameInput').val();
        Meteor.users.update({ _id: Meteor.user()._id},
                            { $set : {
                                // "emails": [{address:email}], // have to set the allow for this
                                "profile.firstName": firstName,
                                "profile.lastName": lastName
                                }
                            });
    },

    'submit form#password-form' : function(evt) {
        evt.preventDefault();
        var oldPassword = $(evt.target).find('#oldPasswordInput').val();
        var newPassword = $(evt.target).find('#newPasswordInput').val();
        Accounts.changePassword(oldPassword, newPassword, function(error) {
            if (error) {
                alert("Password not changed");
            } else {
                alert("Password successfully changed");
                $(evt.target).find('#oldPasswordInput').val("");
                $(evt.target).find('#newPasswordInput').val("");
            }
        });
    }
});