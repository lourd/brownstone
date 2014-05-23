Template.groupCreatePage.events({
    'submit form#group-create-form': function (evt) {
        evt.preventDefault();
        var group = {
            name: $(evt.target).find('#groupNameInput').val(),
        }
        Meteor.call('newGroup', group);
        Router.go('createAccountPage');
    }
});