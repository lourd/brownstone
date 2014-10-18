Template.resetPasswordPage.helpers({
  error: function() {
    return Session.get('entryError');
  }
});

Template.resetPasswordPage.events({
  'submit #resetPasswordForm': function(event, template) {
    event.preventDefault();
    var password = template.find('#passwordInput').value;
    var confirmPassword = template.find('#confirmPasswordInput').value;
    // Validate password
    var passwordErrors = validatePassword(password, confirmPassword);
    if (passwordErrors.length) {
      var errorsString = passwordErrors.join("\r\n");
      return Session.set('entryError', errorsString);
    } else {
      return Accounts.resetPassword(Session.get('resetToken'), password, function(error) {
        if (error) {
          return Session.set('entryError', error.reason || "Unknown error");
        } else {
          Session.set('resetToken', null);
          return Router.go("/");
        }
      });
    }
  }
});


Template.resetPasswordPage.created = function () {
  document.title = "Grove OS | Reset Password";
};