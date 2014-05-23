// Lists -- {name: String}
Lists = new Meteor.Collection("lists");

// Publish complete set of lists to all clients.
Meteor.publish('groupLists', function () {
    var user = Meteor.users.findOne(this.userId);
    return user && Lists.find({groupId: user.profile.groupId});
});


// Todos -- {text: String,
//           done: Boolean,
//           tags: [String, ...],
//           list_id: String,
//           timestamp: Number}
Todos = new Meteor.Collection("todos");

// Publish all items for requested list_id.
Meteor.publish('todos', function (list_id) {
  check(list_id, String);
  return Todos.find({list_id: list_id});
});