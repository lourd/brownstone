Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function(evt) {
        evt.stopPropagation();
        Template._loginButtons.toggleDropdown();
    }
})