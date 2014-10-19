Session.set("newGroupTypeSelected","FRATERNITY");



Template.createGroupPane.events({
	'click #fratTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","FRATERNITY");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#fratTypeBtn").addClass("selectedButton");
	},
	'click #soroTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","SORORITY");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#soroTypeBtn").addClass("selectedButton");
	},
	'click #ilgTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","ILG");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#ilgTypeBtn").addClass("selectedButton");
	},
	'click #otherTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","OTHER");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#otherTypeBtn").addClass("selectedButton");
	},	
	'submit #newGroupForm': function(event, template){
		event.preventDefault();
		var groupName = template.find("#newGroupName").value;
		var groupType = Session.get("newGroupTypeSelected");

		if (!groupName.length){
			return Session.set("newGroupError", "Name is Blank");
					}

		
		groupId = Groups.insert({
			name: groupName,
			type: groupType,
			members: [Meteor.userId()],
			positions: [],
			admins: [Meteor.userId()]
		});

		Meteor.users.update({_id:Meteor.userId()}, {
				$push:{
					"profile.groups":groupId
				}
			});

		
		$(".selectedButton").removeClass("selectedButton");
		$("#myGroupsBtn").addClass("selectedButton");
		Session.set("groupBtnSelected","myGroupsPane");
		return Session.set("newGroupError",null);
	
	}
});

Template.createGroupPane.rendered = function () {
	$("#fratTypeBtn").addClass("selectedButton");
};


Template.createGroupPane.helpers({
	isActiveTab: function() {
		
	},
	governingBody: function () {
		switch (Session.get("newGroupTypeSelected")) {
			case 'FRATERNITY':
				return 'IFC';
			case 'SORORITY':
				return 'Panhel';
			case 'ILG':
				return 'Living Group Council';
			default:
				return 'None';
		}
	}
});