Template.forgotPasswordPage.events({
  'submit #forgotPasswordForm': function(event, template) {
    event.preventDefault();
    var email = template.find("#emailInput");
    if (!email.length) {
      return Session.set('entryError', 'Email is required');
    } else {
      return Accounts.forgotPassword({
        email: email
        }, function(error) {
          if (error)
            return Session.set('entryError', error.reason);
          else
            return Router.go("/");
      });
    }
  }
});

Template.forgotPasswordPage.created = function () {
  document.title = "Grove OS | Forgot Password";
};