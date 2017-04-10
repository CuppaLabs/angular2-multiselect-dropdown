import { Angular2MultiselectDropdownPage } from './app.po';

describe('angular2-multiselect-dropdown App', () => {
  let page: Angular2MultiselectDropdownPage;

  beforeEach(() => {
    page = new Angular2MultiselectDropdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
