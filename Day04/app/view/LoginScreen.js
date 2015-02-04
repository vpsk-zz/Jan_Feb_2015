Ext.define("India.view.LoginScreen",{
	extend : "Ext.Panel",
	alias : "widget.loginscreen",
	config : {
		items : [
			{
				xtype  : "titlebar",
				title : "India",
				height : "5%"
			},
			{
				xtype : "textfield",
				placeHolder : "User Name",
				//id : "usernametext",
				value : "admin"
			},
			{
				xtype : "passwordfield",
				placeHolder : "Password",
				//id : "passwordtext",
				value : "admin"
			},
			{
				xtype : "button",
				text : "Login",
				//id : "loginbutton"
			},
			{
				xtype : "button",
				text : "Cancel",
				//id : "loginbutton"
			},
			{
				xtype : "label",
				//id : "messagelabel"
			}
		]
	}
});