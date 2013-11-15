var webdriver = require('browserstack-webdriver'),remote = require('browserstack-webdriver/remote');
var fs = require('fs');

if (process.argv.length !== 3) {
  console.log('Usage: node ' + __filename + ' selenium_server_jar');
  process.exit(1);
}

var capabilities = {
  'browserName' : 'firefox', 
  'browserstack.user' : 'himanshuverma',
  'browserstack.key' : 'sUt3pLpo9zsCY9LPZvz6',
  'acceptSslCerts' : 'true',
  'browserstack.debug' : 'true'
}
var jar = process.argv[2];
if (!fs.existsSync(jar)) {
  throw Error('The specified jar does not exist: ' + jar);
}
var server = new remote.SeleniumServer(jar, {port:4444});
server.start();
var driver = new webdriver.Builder().
    usingServer(server.address()).
    withCapabilities({'browserName': 'firefox'}).
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
    
  });
}, 1000);
}catch(e)
{
console.log(e.message);
}
driver.quit();
