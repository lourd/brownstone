if ( Groups.find().count() === 0 ) {
    var groupOne = Groups.insert({
        name: 'Delta Alpha'
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