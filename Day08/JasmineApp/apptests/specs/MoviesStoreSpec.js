describe("MovieStore", function() {
	var movieStore;
	var Application = null;
	
	beforeAll(function(done){
		setTimeout(function(){
				Application = App.init(function(){
				  movieStore = Ext.getStore("MovieStore");
				  done();
				});
		},1);		
	});
	afterEach(function(){
		movieStore.removeAll();
	});		
  
    it("should have zero records initially", function(done) {
	  expect(movieStore.getCount()).toEqual(0);
	  done();
    });
  
   it("should have 4 records on loading", function(done) {
	   movieStore.load();
	   setTimeout(function(){
		   expect(movieStore.getCount()).toEqual(4);
		   done();
	   },2000);
   });
   
});  			



