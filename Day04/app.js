Ext.Loader.setConfig({
	enabled : true,
	disableCaching : false
});
Ext.application({
	name : "India",
	appFolder : "app",
	controllers : ["AuthenticationController"],
	models : [],
	stores : [],
	views : ["LoginScreen"],
	profiles : [],
	launch : function(){
		Ext.Viewport.add({
			xtype : "loginscreen",
			id : "id-loginscreen"
		});
	}
});