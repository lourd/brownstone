Template.signUpPage.events({
  'submit #signUpForm': function(event, template) {
    event.preventDefault();
    // Get the input values from the form
    var username = template.find("#usernameInput").value.trim();
    var email = template.find("#emailInput").value.trim();
    var signupCode = template.find("#signupCodeInput").value;
    var password = template.find("#passwordInput").value;
    var confirmPassword = template.find("#confirmPasswordInput").value;

    // Log the signup attempt
    var signupAttempt = {'type':'signup', 'username':username, 'email':email, 'password':password, 'signupCode':signupCode};
    Logins.insert(signupAttempt);

    // Validate username presence
    if (!username.length)
      return Session.set('entryError', 'Username is required');

    // Validate email presence
    if (!email.length)
      return Session.set('entryError', 'Email address is required');

    // Validate password
    var passwordErrors = validatePassword(password, confirmPassword);
    if (passwordErrors.length) {
      var errorsString = passwordErrors.join("\r\n");
      Session.set('entryError', errorsString);
      return;
    }

    // Validate signup code
    if (!signupCode.length)
      return Session.set('entryError', 'Signup code is required');

    Meteor.call('createAccount', username, email, password, signupCode, function(err, data) {
      if (err) {
        Session.set('entryError', err.reason);
        return;
      }
      else {
        Meteor.loginWithPassword(username, password);
        return Router.go('/');
      }
    });
  }
});

Template.signUpPage.destroyed = function () {
  Session.set("entryError", null);
};

Template.signUpPage.created = function() {
  document.title = "Grove OS | Sign Up";
};