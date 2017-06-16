# Protractor-typescript
Getting started with protractor in typescript

Download visual studio code

clone the project or create your own folder structure open VScode from Test folder

Key press ctrl+` to open terminal and type 

webdriver-manager update

and then type 
webdriver-manager start
This will activate selenium server with port 4444

Then create another instance of terminal by clicking the + sign and type
npm install 
This will create a folder node_modules under Test folder with prerequisites mentioned under dependencies section of package.json
then type
npm test
this will invoke chrome browser and validate the calc demo app.
