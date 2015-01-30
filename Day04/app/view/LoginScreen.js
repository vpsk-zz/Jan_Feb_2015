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
				id : "usernametext"
			},
			{
				xtype : "passwordfield",
				placeHolder : "Password",
				id : "passwordtext"
			},
			{
				xtype : "button",
				text : "Login",
				id : "loginbutton"
			},
			{
				xtype : "label",
				id : "messagelabel"
			}
		]
	}
});