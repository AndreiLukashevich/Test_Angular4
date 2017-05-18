import { AppAngular4Page } from './app.po';

describe('app-angular4 App', () => {
  let page: AppAngular4Page;

  beforeEach(() => {
    page = new AppAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
