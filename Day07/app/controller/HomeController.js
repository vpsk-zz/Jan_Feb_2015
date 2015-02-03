Ext.define("MyCabs.controller.HomeController",{
	extend : "Ext.app.Controller",
	config : {
		refs : {
			mapView : "map"
		},
		control : {
			"homescreen" : {
				show : "onHomeScreenShow"
			}
		}
	},
	onHomeScreenShow : function(){
		this.loadGeoLocation();
	},
	showMap : function(geo){
		var coords = new google.maps.LatLng(geo.getLatitude(),
						geo.getLongitude());
		var myOptions = {
	      zoom: 20, center: coords,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
		this.getMapView().setMapOptions(myOptions);
    	var map = this.getMapView().getMap();  // Get the Map Element

	    var marker = new google.maps.Marker({
	        position: coords, 
	        map: map, 
	        title:"You're here"
	    }); 
	},
	loadGeoLocation : function(){
		var me = this;
		var geo = Ext.create('Ext.util.Geolocation', {
		    autoUpdate: false,
		    listeners: {
		        locationupdate: function(obj) {
		            me.showMap(obj);
		        },
		        locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
					console.log("Error");
					console.log(geo);
					console.log(bTimeout);
		        }
		    }
		});
		geo.updateLocation();
	}
});