import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppTitle() {
    return element(by.className('navbar-brand')).getText();
  }

  getHardcoverFiction() {
    var hardcoverFiction =  element.all(by.tagName('option')).get(3);
    var EC = ExpectedConditions;
    browser.wait(EC.visibilityOf(hardcoverFiction), 5000);
    hardcoverFiction.click();
  }

  getTable() {
    return element(by.tagName('table'));
  }

  getLinkFromFooter() {
    return element(by.id('resume-link'));
  }
}
