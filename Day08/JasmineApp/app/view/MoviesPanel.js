Ext.define("JasmineApp.view.MoviesPanel",{
	extend : "Ext.Panel",
	alias : "widget.moviespanel",
	config : {
		items : [
			{
				xtype : "titlebar",
				title : "Movies",height : "5%",
				items : [
					{
						xtype : "button",
						align : "right",
						text : "Load"
					}
				]
			},
			{
				xtype : "list",
				store : "MovieStore",height:"100%",
				itemTpl : "{name}({rating})"					
			}
		]
	}
});