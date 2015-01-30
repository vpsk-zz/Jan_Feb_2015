Ext.define("India.view.MovieScreenUtil",{
	singleton : true,
	alternateClassName : "MovieScreenUtil",
	movieListTemplate : Ext.create("Ext.XTemplate",
							"<tpl if='rating == \"A\"'>",
								"<span style='color:red;'>{name}</span>",
							"<tpl else>",
								"{name}",
							"</tpl>"
						)
});