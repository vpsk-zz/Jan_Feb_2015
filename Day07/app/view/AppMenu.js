Ext.define("MyCabs.view.AppMenu",{
	extend : "Ext.Menu",
	alias : "widget.appmenu",
	alternateClassName : "AppMenu",
	config : {
		items : [
			{
			    text: 'Settings',
			    iconCls: 'settings'
			},
			{
			    text: 'Book my ride',
				iconCls: 'compose'
			},
			{
			    text: 'Ola Money',
			    iconCls: 'star'
			}
		]
	}
});