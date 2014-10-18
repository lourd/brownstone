
Session.setDefault("groupBtnSelected", "myGroupsPage");
$("#myGroupsBtn").addClass("selectedButton");

Template.groupsPage.events({
	'click #myGroupsBtn' : function(event, template){
		Session.set("groupBtnSelected","myGroupsPage");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#myGroupsBtn").addClass("selectedButton");
	},
	
	'click #joinGroupBtn':function(event, template){
		Session.set("groupBtnSelected","joinGroupPage");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#joinGroupBtn").addClass("selectedButton");
	},
	
	'click #createGroupBtn':function(event, template){
		Session.set("groupBtnSelected","createGroupPage");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#createGroupBtn").addClass("selectedButton");
	}
});

Template.groupsPage.helpers({
	groupContent: function(){
		return Session.get("groupBtnSelected");
	}
});
