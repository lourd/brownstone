UI.registerHelper("debug", function(optionalValue) { 
  console.log("Current Context");
  console.log("====================");
  console.log(this);

  if (optionalValue) {
    console.log("Value"); 
    console.log("===================="); 
    console.log(optionalValue); 
  } 
});

/*
 *  Return the group of the signed in user
*/
UI.registerHelper("currentGroup", function() {
    if (Meteor.user()) {
        return Groups.findOne({_id: Meteor.user().profile.groupId});
    }
});