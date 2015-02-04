Ext.define("JasmineApp.controller.MoviesController",{
	extend : "Ext.app.Controller",
	config : {
		refs : {
			loadMoviesButton : "moviespanel titlebar button",
			moviesList : "moviespanel list"
		},
		control : {
			loadMoviesButton : {
				tap : "onLoadMoviesButtonTapped"
			}
		}
	},
	onLoadMoviesButtonTapped : function(){
		console.log("onload");
		Ext.getStore("MovieStore").load();
	}
});