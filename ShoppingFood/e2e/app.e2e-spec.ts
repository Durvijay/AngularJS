import { ShoppingFoodPage } from './app.po';

describe('shopping-food App', () => {
  let page: ShoppingFoodPage;

  beforeEach(() => {
    page = new ShoppingFoodPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
