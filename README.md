# Protractor-typescript

## Getting started with protractor in typescript

For the detailed explanation of code base, watch the step by step tutorial 

[YouTube playlist qavbox_ProtractorTS](https://www.youtube.com/watch?v=-zNFZjRo9Cc&list=PLPO0LFyCaSo1yMwM8VQZrE7japdwypBvb)


* Download & install visual studio code (https://code.visualstudio.com/download)  
* Clone the project or create your own folder structure and place this project   
* Open the project in VSCode  
* Key press **ctrl+`** to open terminal and make sure you are in current project folder

Enter ```npm install``` //This will create a folder **node_modules** under you project folder with prerequisites mentioned under dependencies section of ```package.json```

and then Enter  
```webdriver-manager update``` //For 1st time or needed only when you need to update selenium and browser divers versions

and then Enter 
```webdriver-manager start``` //This will activate selenium server with port 4444

Then create another instance of terminal by clicking the **+** sign and then Enter  
```npm test``` //this will invoke chrome browser and validate the browser functionalities.

For more Protractor related topics like async/await, better way of handling protractor element actions, refer  
https://github.com/sunilpatro1985/Ptotractor_TS_Async
