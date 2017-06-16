// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.

//conf.ts
import {Config, browser} from 'protractor';

export let config: Config = {
 
  framework: 'jasmine',
  
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {'args': ['disable-infobars']}
  },
       
  specs: [ './specs/calculator.js' ],

   onPrepare: () => {
     let globals = require('protractor');
   let browser = globals.browser;
   browser.ignoreSynchronization = true;
   browser.manage().window().maximize();
   browser.manage().timeouts().implicitlyWait(5000);
    // doing a browser.get will lead to a transpile error. 
    // undefined does not have a get method
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};