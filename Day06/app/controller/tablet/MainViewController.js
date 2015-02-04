Ext.define("ProfilesApp.controller.tablet.MainViewController",{
	extend : "ProfilesApp.controller.BaseMainViewController",
	onMainViewButtonTapped : function(){
		this.someCommonCode();
		console.log("***Tablet Button tapped");
	}
});