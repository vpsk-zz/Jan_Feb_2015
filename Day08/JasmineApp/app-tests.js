var App = {};
App.init = function(callback){
	return Ext.create('Ext.app.Application', {
					name: 'JasmineApp',
					models : [
						"Movie"
					],
					stores : [
						"MovieStore"
					],
					controllers : [
						"MoviesController"
					],
				    views: [
						"MoviesPanel"
				    ],
					launch : callback
	});		
}
