var webdriver = require('selenium-webdriver');

var capabilities = {
  'browserName' : 'firefox', 
  'browserstack.user' : 'himanshuverma',
  'browserstack.key' : 'sUt3pLpo9zsCY9LPZvz6',
  'acceptSslCerts' : 'true',
  'browserstack.debug' : 'true'
}

var driver = new webdriver.Builder().
  usingServer('http://hub.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();
try{
driver.get('https://ignite.where2stageit.com/login.html');
driver.findElement(webdriver.By.name('loginid')).sendKeys('qa_tester');
driver.findElement(webdriver.By.name('password')).sendKeys('Where2getit!');
driver.findElement(webdriver.By.id('submit')).click();
driver.findElement(webdriver.By.id('accounts_chzn').click();
driver.findElement(webdriver.By.id('accounts_chzn_o_80').click();
driver.findElement(webdriver.By.id('change_account').click();


driver.wait(function() {
  return driver.getTitle().then(function(title) {
    return title === 'BrowserStack - Google Search';
  });
}, 1000);
}catch(e)
{
console.log(e.message);
}
driver.quit();
