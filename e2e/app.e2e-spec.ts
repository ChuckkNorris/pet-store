import { PetStorePage } from './app.po';

describe('pet-store App', function() {
  let page: PetStorePage;

  beforeEach(() => {
    page = new PetStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
