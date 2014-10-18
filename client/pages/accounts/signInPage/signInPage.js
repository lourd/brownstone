Template.signInPage.events({
  'submit #signInForm': function(evt, template) {
    evt.preventDefault();
    // Making lowercase here, check on the server should be case insensitive though
    var email = template.find('#emailInput').value.trim().toLowerCase();
    var password = template.find('#passwordInput').value;

    if (!email.length)
      return Session.set('entryError', 'Email is blank');

    if (!password.length)
      return Session.set('entryError', 'Password is blank');

    return Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        return Session.set('entryError', error.reason);
      } else{
        return Router.go("/");
      }
    });
  },
  'click #signUpBtn': function(evt, template) {
    evt.preventDefault();
    Router.go("signUpRoute");
  },
  'click #forgotPasswordBtn': function(evt, template) {
    evt.preventDefault();
    Router.go("forgotPasswordRoute");
  }
});

Template.signInPage.destroyed = function () {
  Session.set("entryError", null);
};

Template.signInPage.created = function() {
  document.title = "Grove OS | Sign In";
};