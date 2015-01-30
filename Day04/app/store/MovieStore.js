Ext.define("India.store.MovieStore",{
	extend : "Ext.data.Store",
	config : {
		model : "India.model.Movie",
		autoLoad : true,
		proxy : {
			type : "ajax",
			url : "movies",
			reader : {
				type : "json",
				rootProperty : "moviesInIndia"
			}
		}
	}
});