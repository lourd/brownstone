( function() {



Template.createAccountPage.events({
    'click submit': function (event) {
        event.preventDefault();

        var user = {
            email : $(e.target).find('#firstNameInput').val(),
            password : $(e.target)

        }
    }
});


});