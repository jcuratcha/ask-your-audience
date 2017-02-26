# Ask Your Audience

## Server Setup

Current Production Server: [](http://ec2-52-60-106-250.ca-central-1.compute.amazonaws.com:8080)
Testing Server: [](http://ec2-54-213-112-197.us-west-2.compute.amazonaws.com:8080)

## Mobile Setup

The mobile framework behind our Ask Your Audience mobile apps is [Telerik's NativeScript](https://www.nativescript.org/). 

### NativeScript Setup & Dependencies

In order to build and run the mobile clients from source, you'll need to have NativeScript installed.

- All of the steps needed to install NativeScript are outlined [here](http://docs.nativescript.org/start/quick-setup).
	- If you get any errors during installation or when trying to run the app, make sure you have these installed: 
		1. Node.js v4.4.x
		2. Java v1.8.x
		3. (Android) Android SDK 22 or later
		4. (Android) Android SDK Build-Tools 25.02 or later
	- Additionally, having an Android Virtual Device, or an Android device with USB debugging enabled is required to run the client.

### Running Ask Your Audience Mobile client:

To run the client, you'll need to clone the repository, change into the `mobile/ask-your-audience/` directory, then run the command to build. Here are the steps:
```bash
git clone https://github.com/jcuratcha/ask-your-audience.git #or, if you have valid SSH keys in GitHub, git clone git@github.com:jcuratcha/ask-your-audience.git
cd mobile/ask-your-audience
tns run android
```

This will start up an AVD/Android Emulator and install the app on that device.

### Troubleshooting

- If you get a message that looks like `Exception: The plugin tns-android@2.5.0 is already installed` when trying to run `tns run android`, follow these steps ([source](https://github.com/NativeScript/nativescript-cli/issues/2487)):
	- open the `package.json` in your text editor
	- remove the `tns-android` dependency under `"dependencies: {}"
	- remove the `android` entry from the `"nativescript: { }"` key if it's there
	- in the command line, run `npm cache clear`
	- then run `tns platform add android`