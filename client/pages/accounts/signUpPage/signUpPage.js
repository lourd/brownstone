Template.signUpPage.events({
  'submit #signUpForm': function(event, template) {
    event.preventDefault();
    // Get the input values from the form
    var firstName = template.find("#firstNameInput").value.trim();
    var lastName = template.find("#lastNameInput").value.trim();
    var email = template.find("#emailInput").value.trim();
    var password = template.find("#passwordInput").value;
    var confirmPassword = template.find("#confirmPasswordInput").value;

    // Validate username presence
    if (!firstName.length)
      return Session.set('entryError', 'First name is required');

    // Validate last name presence
    if (!lastName.length)
      return Session.set('entryError', 'Last name is required');

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

    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        firstName: firstName,
        lastName: lastName,
        groups: []
      }
    }, function(error) {
      if (error) {
        Session.set('entryError', error.reason);
      } else {
        Router.go('/dashboard');
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