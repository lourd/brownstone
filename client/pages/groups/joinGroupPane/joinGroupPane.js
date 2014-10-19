Template.joinGroupPane.helpers({
	groups: function () {
		if (Meteor.user() !==undefined) {
			return Groups.find({ _id: { $not:{$in: Meteor.user().profile.groups}}},
								{sort: {name: 1 }});
		}
	}

	
});

Template.joinGroupPane.events({
	'click .joinGroupBtn': function (event, template) {
		reply = confirm("Are you sure you want to join " + this.name + "?");
		if(reply){
			//add user id to group list
			Groups.update({_id:this._id}, {
				$push:{
					members:Meteor.userId()
				}
			});

			//add group to user profile 
			Meteor.users.update({_id:Meteor.userId()}, {
				$push:{
					"profile.groups":this._id
				}
			});


		}
		else{
		}
	}
});