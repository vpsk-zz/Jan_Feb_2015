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
			noInternetView : "nointernetview",
			homeScreen : "homescreen",
			appMenu : "appmenu",
			menuButton : "homescreen toolbar button"
		},
		control : {
			menuButton : {
				tap : "menuButtonTapped"
			}
		}
	},
	menuButtonTapped : function(){
		if(!this.getAppMenu()){
			var appMenu = Ext.create("AppMenu");
			Ext.Viewport.setMenu(appMenu,{
				side : "left",
				reveal : true
			});
			Ext.Viewport.showMenu("left");
		}
		else{
			if(this.getAppMenu().isHidden()){
				Ext.Viewport.showMenu("left");	
			}
			else{
				Ext.Viewport.hideMenu("left");
			}
		}
	},
	checkConnection : function(){
		var me = StartupController.self;
		Ext.Viewport.setMasked({xtype:"loadmask"});
		if(!navigator.onLine){
			if(!me.getNoInternetView())
				Ext.Viewport.setActiveItem({xtype:"nointernetview"});
			else if(Ext.Viewport.getActiveItem() != me.getNoInternetView())
				Ext.Viewport.setActiveItem(me.getNoInternetView());
		}
		else{
			if(!me.getHomeScreen()){
				Ext.Viewport.setActiveItem({
					xtype : "homescreen",
					id : "id-homescreen"
				});				
			}
			else if(Ext.Viewport.getActiveItem() != me.getHomeScreen()){
				Ext.Viewport.setActiveItem(me.getHomeScreen());	
			}
		}
		Ext.Viewport.setMasked(false);
	}
});