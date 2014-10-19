Template.groupTile.helpers({
	leaveJoinBtns: function () {
		pane =Session.get("groupBtnSelected");
		if(pane =="myGroupsPane"){
			return "leaveBtn";
		}

		else if (pane=="joinGroupPane") {
			return "joinBtn";
		}
	},

	readType: function (){
		//make a name to display that is clean
		switch (this.type){
			case "FRATERNITY":
				return "Fraternity - ";
			case "SORORTITY":
				return "Sororty - ";
			case "ILG":
				return "ILG - ";
			default:
				return "";
		}
	}
});