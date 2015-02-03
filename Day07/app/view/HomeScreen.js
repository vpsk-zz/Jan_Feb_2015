Ext.define("MyCabs.view.HomeScreen",{
	extend : "Ext.Panel",
	alias : "widget.homescreen",
	config : {
		items : [
			{
				xtype : "toolbar",
				docked : "top",
				items : [
					{
						iconCls : "list",
						align : "left"
					}
				]
			}
		]
	}
});