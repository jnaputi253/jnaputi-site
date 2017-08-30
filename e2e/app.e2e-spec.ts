import { JnaputiSitePage } from './app.po';

describe('jnaputi-site App', () => {
  let page: JnaputiSitePage;

  beforeEach(() => {
    page = new JnaputiSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
