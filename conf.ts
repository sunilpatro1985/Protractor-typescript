import {Config, browser} from 'protractor';
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

//var screenreporter = require('util/screenreporter.js');

export let config: Config = {
    framework : "jasmine2",

    jasmineNodeOpts:{
        showColors : true,
        silent : true,
        defaultTimeoutInterval: 36000,
        print: function(){}
    },

    capabilities:{
        browserName : 'chrome',
        chromeOptions: {'args': ['disable-infobars']},
        //browserName : 'firefox',
        //marionette : true,
        acceptSslCerts : true
    },

    suites: {
        calc : './specs/calculator.js',
        bank : './testspec/banktest.js',
        bothtest : ['./specs/calculator.js',
            './testspec/banktest.js']
        //to run each suite
        //protractor conf.js calc
        //protractor conf.js bank
        //protractor conf.js calc,bank
        //protractor conf.js bothtest
    },
 
    //specs:['./testspec/banktestpom.js'],
    //    specs:['./specsDataReader/nestedDataSpec.js'],
    specs:['./specs/TabOrderSpec.js'],

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    onPrepare:()=>{
        var os = require('os');
        let globals = require('protractor');
        let browser = globals.browser;
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
         // doing a browser.get will lead to a transpile error. 
         // undefined does not have a get method

         jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
              displayStacktrace: 'pretty'
            },
            summary: {
              displayDuration: false
            }
          }));

       },
       // You could set no globals to true to avoid jQuery '$' and protractor '$'
       // collisions on the global namespace.
       noGlobals: true
    }

