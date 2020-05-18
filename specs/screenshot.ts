import {browser} from 'protractor';
let fs = require('fs');

afterEach(function () {
    var currentSpec = jasmine.getEnv().currentSpec,
        passed = currentSpec.results().passed(),
        filename = "specs/";

    browser.takeScreenshot().then(function (png) {
        browser.getCapabilities().then(function (capabilities) {
            var browserName = capabilities.get('browseName'),
                passFail = (passed) ? 'pass' : 'FAIL';
            filename = filename + browserName + ' ' + passFail + ' - ' + currentSpec.description + '.png';
            var stream = fs.createWriteStream(filename);
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    });
});