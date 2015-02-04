Ext.define("India.view.DeleteMovieConfirmationPanel",{
	extend : "Ext.Panel",
	alternateClassName : "DelMoviePanel",
	alias : "widget.deletemovieconfirmationpanel",
	config : {
		items : [
			{
				xtype : "titlebar",
				title : "Delete?",
				id : "id-deletemovieconfirmationpaneltitlebar",
				height : "5%"
			},
			{
				xtype : "panel",
				layout : {
					type : "hbox",
					pack : "center",
					align : "center"
				},
				defaults : {
					xtype : "button",
					height:"15%",margin:"2",
					width : "25%"
				},
				items : [
					{
						text : "Yes",
						id : "yes-deletemoviebutton"
					},
					{
						text : "No",
						id : "no-deletemoviebutton"
					}
				]
			}
		]
	}
});