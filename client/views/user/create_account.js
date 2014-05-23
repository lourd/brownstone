Template.createAccountPage.helpers({
    groups: function () {
        return Groups.find();
    }
});

Template.createAccountPage.events({
    'submit form#signup-form': function (evt) {
        evt.preventDefault();
        groupId = $(evt.target).find('#group').val();
        var newUser = {
            email : $(evt.target).find('#emailInput').val(),
            password : $(evt.target).find('#passwordInput').val(),
            profile : {
                firstName : $(evt.target).find('#firstNameInput').val(),
                lastName : $(evt.target).find('#lastNameInput').val(),
                groupId : groupId
            }
        }
        Accounts.createUser(newUser, function(error) {
            if (error) {
                // error handling
            } else {
                Router.go('groupPage', {groupId: groupId})
            }
        });
    }
});