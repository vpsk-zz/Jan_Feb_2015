Ext.define("ProfilesApp.controller.tablet.MainViewController",{
	extend : "ProfilesApp.controller.BaseMainViewController",
	onMainViewButtonTapped : function(){
		this.callParent(arguments);
		alert("Tablet Button tapped");
	}
});