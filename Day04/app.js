Ext.Loader.setConfig({
	enabled : true,
	disableCaching : false
});
Ext.application({
	name : "India",
	appFolder : "app",
	controllers : ["AuthenticationController","MovieController"],
	models : ["Movie"],
	stores : ["MovieStore"],
	views : ["LoginScreen","MovieScreenUtil","MovieScreen",
				"DeleteMovieConfirmationPanel"],
	profiles : [],
	launch : function(){
		Ext.Viewport.add({
			xtype : "loginscreen",
			id : "id-loginscreen"
		});
	}
});