Ext.define("MyCabs.view.HomeScreen",{
	extend : "Ext.Panel",
	alias : "widget.homescreen",
    requires: [
        'Ext.Map'
    ],
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
			},
			{
			    xtype: 'map',
				height : "100%"
			}
		]
	}
});