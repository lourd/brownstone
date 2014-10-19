Template.registerHelper('isLoggedIn', function() {
  return Meteor.userId() ? true : false;
});

Template.registerHelper("signedInAs", function(date) {
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

Template.registerHelper('pluralizeS', function(word, len){
  // Simple pluralize function that only works with words that are 
  // plurarized with "s"
  if(len===1){
    return word;
  }
  return  word+"s";

});