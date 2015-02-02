Ext.define("ProfilesApp.profile.Phone",{
	extend : "Ext.app.Profile",
	config : {
		views : ["MainView"],
		controllers : ["MainViewController"],
		stores : [],
		models : []
	},
	isActive : function(){
		return Ext.os.deviceType == "Phone";
		//(Ext.os.is.iOS || Ext.os.is.Android) 
		//		&& 
		//Ext.os.deviceType == "Phone";
	},
	launch : function(){
		Ext.Viewport.add({
			xtype : "phone-mainview"
		});
		//alert("Phone profile loaded");
	}
});