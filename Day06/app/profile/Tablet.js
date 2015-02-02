Ext.define("ProfilesApp.profile.Tablet",{
	extend : "Ext.app.Profile",
	config : {
		views : ["MainView"],
		controllers : ["MainViewController"],
		stores : [],
		models : []
	},
	isActive : function(){
		return Ext.os.deviceType == "Tablet";
		
		//(Ext.os.is.iOS || Ext.os.is.Android) 
		//&& 
		//Ext.os.deviceType == "Tablet";
	},
	launch : function(){
		Ext.Viewport.add({
			xtype : "tablet-mainview"
		});
		//console.log("******Tablet");
		//alert("Tablet profile loaded");
	}
});