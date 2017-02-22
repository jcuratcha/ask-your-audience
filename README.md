# Ask Your Audience

## Server Setup

## Mobile Setup

The mobile framework behind our Ask Your Audience mobile apps is ![Telerik's NativeScript](https://www.nativescript.org/). 

### NativeScript Setup

In order to build and run the mobile clients from source, you'll need to have NativeScript installed.

- All of the steps needed to install NativeScript are outlined ![here](http://docs.nativescript.org/start/quick-setup).
	- If you get any errors during installation or when trying to run the app, make sure you have these installed: 
		1. Node.js v4.4.x
		2. Java v1.8.x
		3. (Android) Android SDK 22 or later
		4. (Android) Android SDK Build-Tools 25.02 or later

### Troubleshooting

- If you get a message that looks like `Exception: The plugin tns-android@2.5.0 is already installed` when trying to run `tns run android`, follow these steps (![source](https://github.com/NativeScript/nativescript-cli/issues/2487)):
	- open the `package.json` in your text editor
	- remove the `tns-android` dependency under `"dependencies: {}"
	- remove the `android` entry from the `"nativescript: { }"` key if it's there
	- in the command line, run `npm cache clear`
	- then run `tns platform add android`