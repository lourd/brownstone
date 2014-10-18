Template.createGroupPage.events({
	'click #fratTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","fratType");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#fratTypeBtn").addClass("selectedButton");
	},
	'click #soroTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","soroType");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#soroTypeBtn").addClass("selectedButton");
	},
	'click #ilgTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","ilgType");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#ilgTypeBtn").addClass("selectedButton");
	},
	'click #otherTypeBtn' : function(event, template){
		Session.set("newGroupTypeSelected","otherType");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#otherTypeBtn").addClass("selectedButton");
	},	
});
