UI.registerHelper('isLoggedIn', function() {
  return Meteor.userId() ? true : false;
});

UI.registerHelper("signedInAs", function(date) {
  // Make sure they're signed in
  if (Meteor.user()) {
    if (Meteor.user().username) {
      return Meteor.user().username;
    } else if (Meteor.user().profile.name) {
      return Meteor.user().profile.name;
    } else if (Meteor.user().emails && Meteor.user().emails[0]) {
      return Meteor.user().emails[0].address;
    } else {
      return "Signed In";
    }
  } else {
    return "Not Signed In";
  }
});