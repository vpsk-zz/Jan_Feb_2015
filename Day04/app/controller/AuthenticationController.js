Ext.define("India.controller.AuthenticationController",{
	extend : "Ext.app.Controller",
	config : {
		refs : {
			userName : "loginscreen textfield",
			password : "loginscreen passwordfield",
			message : "loginscreen label",
			loginButton : "loginscreen button[text=Login]"
			// userName : "#usernametext",
// 			password : "#passwordtext",
// 			message : "#messagelabel",
// 			loginButton : "#loginbutton"
		},
		control : {
			loginButton : {
				tap : "loginButtonTapped"
			}
		}
	},
	loginButtonTapped : function(){
		var userName = this.getUserName().getValue();
		var password = this.getPassword().getValue();
		if(userName == "admin" && password == "admin"){
			Ext.Viewport.setActiveItem({
				xtype : "moviescreen",
				id : "id-moviescreen"
			});
		}
		else
			this.getMessage().setHtml("Invalid Credentials");
	}
});