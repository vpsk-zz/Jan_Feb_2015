Ext.define("India.controller.AuthenticationController",{
	extend : "Ext.app.Controller",
	config : {
		refs : {
			userName : "#usernametext",
			password : "#passwordtext",
			message : "#messagelabel",
			loginButton : "#loginbutton"
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
		if(userName == "admin" && password == "admin")
			this.getMessage().setHtml("Signing in ...");
		else
			this.getMessage().setHtml("Invalid Credentials");
	}
});