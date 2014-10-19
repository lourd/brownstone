Template.createGroupPane.events({
	'click #fratTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","Fraternity");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#fratTypeBtn").addClass("selectedButton");
	},
	'click #soroTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","Sorority");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#soroTypeBtn").addClass("selectedButton");
	},
	'click #ilgTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","ILG");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#ilgTypeBtn").addClass("selectedButton");
	},
	'click #otherTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","otherType");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#otherTypeBtn").addClass("selectedButton");
	},	
	'submit #newGroupForm': function(event, template){
		event.preventDefault();

		var groupName = template.find("#newGroupName").value;

		
	}
});


Template.createGroupPane.helpers({
	isActiveTab: function() {
		
	},
	governingBody: function () {
		switch (Session.get("newGroupTypeSelected")) {
			case 'Fraternity':
				return 'IFC';
			case 'Sorority':
				return 'Panhel';
			case 'ILG':
				return 'Living Group Council';
			default:
				return 'None';
		}
	}
});