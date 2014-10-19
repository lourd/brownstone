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
		console.log(this.type);

		switch (this.type){
			case "FRATERNITY":
				return "Frat - ";
			case "SORORTITY":
				return "Sororty - ";
			case "ILG":
				return "ILG - ";
			default:
				return "";
		}
	}
});