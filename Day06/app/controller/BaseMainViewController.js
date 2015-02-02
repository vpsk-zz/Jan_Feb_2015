Ext.define("ProfilesApp.controller.BaseMainViewController",{
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mainViewButton : "#mainviewbutton"
		},
		control : {
			mainViewButton : {
				tap : "onMainViewButtonTapped"
			}
		}
	},
	onMainViewButtonTapped : function(){
		//common code
	}
});