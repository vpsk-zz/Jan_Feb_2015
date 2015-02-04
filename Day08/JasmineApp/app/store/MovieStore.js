Ext.define("JasmineApp.store.MovieStore",{
	extend : "Ext.data.Store",
	config : {
		model : "JasmineApp.model.Movie",
		proxy : {
			type : "ajax",
			autoLoad : false,
			url : "movies",
			reader : {
				type : "json",
				rootProperty : "moviesInIndia"
			}
		}
	}
});