Ext.define("India.view.MovieScreen",{
	extend : "Ext.Panel",
	alias : "widget.moviescreen",
	config : {
		items : [
			{
				xtype : "titlebar",
				title : "Movies",
				height : "5%"
			},
			{
				xtype : "list",
				height : "100%",
				id : "movielist",
				store : "MovieStore",
				itemTpl : MovieScreenUtil.movieListTemplate
			}
		]
	}
});