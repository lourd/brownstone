if ( Apps.find().count() === 0 ) {
    var todoApp = Apps.insert({
        name: "To do list",
        description: "A shared to do list, with tags and assignments",
        routeName: "todosAppPage",
        collections: ["lists", "todos"]
    });
}

if ( Groups.find().count() === 0 ) {
    var groupOne = Groups.insert({
        // Name of the group
        name: 'Delta Alpha',
        // @todo figure out better looking urls
        // slug: 'delta-alpha',
        // Array of application IDs
        apps : [todoApp]
    });
}

if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        email: 'descioli@mit.edu',
        password: 'testing',
        profile: {
            firstName: 'Louis',
            lastName: 'DeScioli',
            groupId: groupOne,
        }
    });
}