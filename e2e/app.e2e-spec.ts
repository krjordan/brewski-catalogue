import { BrewskiCataloguePage } from './app.po';

describe('brewski-catalogue App', () => {
  let page: BrewskiCataloguePage;

  beforeEach(() => {
    page = new BrewskiCataloguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
