Template.createAccountPage.helpers({
    groups: function () {
        return Groups.find();
    }
});

Template.createAccountPage.events({
    'submit form#signup-form': function (evt) {
        evt.preventDefault();

        var newUser = {
            email : $(evt.target).find('#emailInput').val(),
            password : $(evt.target).find('#passwordInput').val(),
            profile : {
                firstName : $(evt.target).find('#firstNameInput').val(),
                lastName : $(evt.target).find('#lastNameInput').val(),
                groupId : $(evt.target).find('#group').val()
            }
        }
        console.log(newUser);
        Accounts.createUser(newUser);
    }
});