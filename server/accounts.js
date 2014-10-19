// http://docs.meteor.com/#accounts_config
Accounts.config({
  restrictCreationByEmailDomain: 'mit.edu'
});

Accounts.urls.resetPassword = function(token) {
  return Meteor.absoluteUrl('reset-password/' + token);
};