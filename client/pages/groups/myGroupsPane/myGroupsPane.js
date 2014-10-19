Template.myGroupsPane.helpers({
	groupOfMine: function () {
		if ( Meteor.user() !==undefined ) {
			return Groups.find({ _id: { $in: Meteor.user().profile.groups }},
									{sort: {name: 1 }}); 
					
		}
		
		
	}
});

Template.myGroupsPane.events({
	'click .leaveGroupBtn':function(event, template){
		// console.log(this._id);
		reply=confirm("Are you sure you want to leave "+this.name+"?");

		if (reply){
			//remove user id from group list
			Groups.update({_id:this._id}, {
				$pull:{
					members:Meteor.userId()
				}
			});

			//remove groupID from user profile 
			Meteor.users.update({_id:Meteor.userId()}, {
				$pull:{
					"profile.groups":this._id
				}
			});
		}

		else{

		}
	}
});