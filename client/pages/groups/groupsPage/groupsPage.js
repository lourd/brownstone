

Session.setDefault("groupBtnSelected", "myGroupsPane");


Template.groupsPage.events({
	'click #myGroupsBtn' : function(event, template){
		Session.set("groupBtnSelected","myGroupsPane");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#myGroupsBtn").addClass("selectedButton");
	},
	
	'click #joinGroupBtn':function(event, template){
		Session.set("groupBtnSelected","joinGroupPane");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#joinGroupBtn").addClass("selectedButton");
	},
	
	'click #createGroupBtn':function(event, template){
		Session.set("groupBtnSelected","createGroupPane");
		template.$(".selectedButton").removeClass("selectedButton");
		template.$("#createGroupBtn").addClass("selectedButton");
	}
});

Template.groupsPage.helpers({
	groupContent: function(){
		return Session.get("groupBtnSelected");
	}
});

Template.groupsPage.rendered = function () {
	$("#myGroupsBtn").addClass("selectedButton");
};