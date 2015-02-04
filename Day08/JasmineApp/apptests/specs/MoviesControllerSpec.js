describe("MoviesController", function() {
	var Application2 = null;
	var moviesController = null;
	var movieStore = null;
	
	beforeAll(function(done){
		setTimeout(function(){
				Application2 = App.init(function(){
					moviesController = this.getController("MoviesController");
					movieStore = Ext.getStore("MovieStore");
					Ext.create("JasmineApp.view.MoviesPanel",{
					});
				  done();
				});
		},1);		
	});
	
   it("should be initialized", function(done) {
	  expect(moviesController).not.toBe(undefined);	  
	  done();
  });
   it("should have reference to list",function(done){
 	 expect(moviesController.getMoviesList()).not.toBe(undefined);
	 done();
   });
   it("should respond to tap event of Load button",function(done){
	   moviesController.getLoadMoviesButton().fireEvent("tap");
	   setTimeout(function(){
		   expect(movieStore.getCount()).toBe(4);
		   done();
	   },5000);
   });
   
});  			



