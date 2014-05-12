Template.topNavBar.helpers({
    group: function () {
        return Groups.findOne(); // prefiltered by the router
    }
});

Template.topNavBar.events({
    'click #signup-link': function () {
        alert('clicked!');
    }
});