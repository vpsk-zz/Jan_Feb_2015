Ext.define("India.controller.MovieController",{
	extend : "Ext.app.Controller",
	config : {
		recordToBeDeleted : null,
		refs : {
			movieList : "list",
			deleteMovieConfirmationPanel : "deletemovieconfirmationpanel",
			movieScreen : "moviescreen",
			yesDeleteButton : "deletemovieconfirmationpanel button[text=Yes]",
			noDeleteButton : "deletemovieconfirmationpanel button[text=No]",
			deleteMovieTitleBar : "deletemovieconfirmationpanel titlebar"
			
/*			movieList : "#movielist",
			deleteMovieConfirmationPanel : "#id-deletemovieconfirmationpanel",
			movieScreen : "#id-moviescreen",
			yesDeleteButton : "#yes-deletemoviebutton",
			noDeleteButton : "#no-deletemoviebutton",
			deleteMovieTitleBar : "#id-deletemovieconfirmationpaneltitlebar",
*/
		},
		control : {
			movieList : {
				itemtaphold : "movieListItemTapHold"
			},
			yesDeleteButton : {
				tap : "yesDeleteButtonTapped"
			},
			noDeleteButton : {
				tap : "noDeleteButtonTapped"
			}
		}
	},
	yesDeleteButtonTapped : function(){
		this.getDeleteMovieConfirmationPanel().hide();
		this.getRecordToBeDeleted().destroy();
	},
	noDeleteButtonTapped : function(){
		this.getDeleteMovieConfirmationPanel().hide();
	},
	movieListItemTapHold : function(src,b,c,record,target){
		this.setRecordToBeDeleted(record);
		this.showDeleteMovieConfirmationPanel();
	},
	showDeleteMovieConfirmationPanel : function(){
		var panel = this.getDeleteMovieConfirmationPanel();
		if(panel == undefined){
			panel = Ext.create("DelMoviePanel",{
				id : "id-deletemovieconfirmationpanel",
				width : "75%",margin:"5",
				modal : true
			});	
		}
		this.getDeleteMovieTitleBar().setTitle("Delete " + 
				this.getRecordToBeDeleted().get("name") +
			 	"?");
		panel.showBy(this.getMovieScreen());	
	}
	
});