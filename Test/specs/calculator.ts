import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import protractor = require('protractor');

describe('calc App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var history = element.all(by.repeater('result in memory'));
  let value = element(by.xpath("//*[@class='table']/tbody//tr[1]/td[3]"));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

 beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should add correctly', function() {
    add(1, 2);
    browser.sleep(3000);
    expect<any>(value.getText()).toEqual('3');
  })

  it('should have a history', function() {
    add(3, 4);
    browser.sleep(3000);
    add(5, 6);
    browser.sleep(3000);
    expect<any>(history.count()).toEqual(2);
  })

});


  //var latestResult = element(by.binding('latest'));
