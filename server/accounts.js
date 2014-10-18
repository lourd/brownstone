// http://docs.meteor.com/#accounts_config
Accounts.config({
  forbidClientAccountCreation: true,
  restrictCreationByEmailDomain: 'grovelabs.io'
});

// Tack on some additional functionality to Accounts
Accounts.signupCode = 'gogrove';

Accounts.urls.resetPassword = function(token) {
  return Meteor.absoluteUrl('reset-password/' + token);
};

Meteor.methods({
  createAccount: function(username, email, password, signupCode) {
    if (signupCode != Accounts.signupCode) {
      throw new Meteor.Error(403, "Incorrect signup code");
    } else {
      return Accounts.createUser({
        username: username,
        email: email,
        password: password
      });
    }
  }
});

Accounts.onCreateUser( function(options, user) {
  if (options.profile)
    user.profile = options.profile;
  else
    user.profile = {};
  user.profile.orgs = [];
  return user;
});