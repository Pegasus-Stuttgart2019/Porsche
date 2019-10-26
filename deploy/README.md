## Prerequisites:
- NodeJS
- Angular
- SCP for copying files

## In order to develop an application for the Taycan Infotainment system, you need to follow the next steps:
1. Install the dependencies by running an <npm i> command
2. In the folder <application> create a new Angular project or copy an existing one. 
	If there is another folder inside the <application> folder, update the path in the <build> script from the package.json file. 
	Example: "cd ./application/hackathon && npm run build"
3. Open and edit the file <sdk/config.json> with the application information (see structure explanations below)
4. Join the Wifi network iBlubber (pass: Monster0.5l)
5. Deploy the web application using the following command <npm run deploy>
6. When prompted for the password, type the password <d>

## Configuration file settings:
- serviceId - the name of the application with lowercase characters, no spaces and special characters
- frontendBuildPath - the path where the Angular application build folder is.
- icon - the icon that will be displayed on the launcher screen of the infotainment. 
	It's part of the system icon set, use the default one or contact the Porsche support team for extra information.
- labels - the list of labels that will be registered for your application. It contains objects with name and language.
- entrypoints - the entrypoint where the application will be registered on the infotainment. 
	Default value is <main> which registeres on the main launcher screen. 
	It is recommended to use the HashLocationStrategy when using routes in the Angular application. 
