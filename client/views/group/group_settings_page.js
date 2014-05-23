Template.groupSettingsPage.events({
    'submit form#group-edit-form': function (evt) {
        evt.preventDefault();
        var name = $(evt.target).find('#groupNameInput').val();
        Groups.update({_id: Meteor.user().profile.groupId},
                        { $set: {
                            name: name
                        }});
    }
});