Ext.define("MyCabs.controller.StartupController",{
	extend : "Ext.app.Controller",
	alternateClassName : "StartupController",
	statics : {
		self : undefined
	},
	init : function(){
		this.statics().self = this;
		this.checkConnection();
		window.setInterval(this.checkConnection,3000);
	},
	config : {
		refs : {
			noInternetView : "nointernetview"
		}
	},
	checkConnection : function(){
		Ext.Viewport.setMasked({xtype:"loadmask"});
		if(!navigator.onLine){
			if(!StartupController.self.getNoInternetView())
				Ext.Viewport.setActiveItem({xtype:"nointernetview"});
			else
				Ext.Viewport.setActiveItem(StartupController.self.getNoInternetView());
		}
		else{
			Ext.Viewport.setActiveItem({
				xtype : "panel",
				html : "You are online now"
			});
		}
		Ext.Viewport.setMasked(false);
	}
});