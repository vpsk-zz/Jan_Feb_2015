Ext.define("ProfilesApp.view.phone.MainView",{
	extend : "Ext.Panel",
	alias : "widget.phone-mainview",
	config : {
		items : [
			{
				xtype : "titlebar",
				title : "Phone MAIN",
				height : "5%"
			},
			{
				xtype : "button",
				id : "mainviewbutton",
				text : "Phone Button"
			}
		]
	}
});