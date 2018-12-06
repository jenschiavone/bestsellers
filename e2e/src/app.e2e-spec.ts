import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the app title', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('New York Times Bestsellers');
  });

  it('can select an item from the dropdown menu and display a table', () => {
    page.navigateTo();
    expect(page.getTable().isPresent()).toEqual(false);
    page.getHardcoverFiction();
    expect(page.getTable().isPresent()).toEqual(true);
  })

  it('has a footer link to jenschiavone.com', () => {
    page.navigateTo();
    var link = page.getLinkFromFooter();
    expect(link.getAttribute('href')).toEqual('http://jenschiavone.com/')
  })
});
