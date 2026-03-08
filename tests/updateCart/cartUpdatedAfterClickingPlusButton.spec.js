import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage.js';
import { CartPage } from '../../src/pages/CartPage.js';

test('Cart updated correctly after clicking plus for drinks', async ({page}) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.cappuccinoLocatorClick();
  await menuPage.espressoLocatorClick();
  await menuPage.cartLocatorClick();
  await cartPage.waitForLoading();

  await cartPage.verifyEspressoTotalCost('$10.00');
  await cartPage.addOneEspressoButtonClick();
  await cartPage.verifyEspressoTotalCost('$20.00');

  await cartPage.verifyCappuccinoTotalCost('$19.00');
  await cartPage.addOneCappuccinoButtonClick();
  await cartPage.verifyCappuccinoTotalCost('$38.00');
  
  await cartPage.verifyEspressoTotalCost('$20.00');

  await cartPage.checkoutCartLocatorContainText('$58.00');
});
