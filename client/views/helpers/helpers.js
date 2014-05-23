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

/*
 *  Return the group name of the signed in user
*/
UI.registerHelper("groupName", function() {
    // Must wait for the groups subscription to be there: Groups.find().count()
    if (Meteor.user() && Groups.find().count() ) {
      var group = Groups.findOne(Meteor.user().profile.groupId);
      return group.name;
    }
});

UI.registerHelper("groupApps", function() {
    if (Meteor.user() && Groups.find().count() ) {
      var group = Groups.findOne(Meteor.user().profile.groupId);
      return group && Apps.find({
          _id: { $in: group.apps}
      });
    }
})