Template.groupTile.helpers({
	leaveJoinBtns: function () {
		pane =Session.get("groupBtnSelected");
		if(pane =="myGroupsPane"){
			return "leaveBtn";
		}

		else if (pane=="joinGroupPane") {
			return "joinBtn";
		}
	}
});