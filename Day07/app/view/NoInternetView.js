Ext.define("MyCabs.view.NoInternetView",{
	extend : "Ext.Panel",
	alias : "widget.nointernetview",
	config : {
		layout : {
			type  : "vbox",
			pack : "end",
			align : "center"
		},
		items : [
			{
				xtype : "image",
				src : "resources/images/olacabs.jpeg",
				height : "90%",width:"100%"
			},
			{
				xtype : "label",
				html : "No internet connection"
			},
			{
				xtype : "label",
				html : "<a href='tel:0804323434'>Call us for a ride</a>"
			}
		]
	}
});