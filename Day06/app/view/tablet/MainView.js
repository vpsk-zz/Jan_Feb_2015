Ext.define("ProfilesApp.view.tablet.MainView",{
	extend : "Ext.Panel",
	alias : "widget.tablet-mainview",
	config : {
		items : [
			{
				xtype : "titlebar",
				title : "TABLET MAIN",
				height : "5%"
			},
			{
				xtype : "button",
				id : "mainviewbutton",
				text : "Tablet button"
			}
		]
	}
});