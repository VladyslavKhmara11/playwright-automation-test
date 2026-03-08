import { test } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage.js';
import { CartPage } from '../../src/pages/CartPage.js';

test('Cart updated correctly after clicking minus for drinks', async ({page}) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.cappuccinoLocatorClick();
  await menuPage.espressoLocatorClick();
  await menuPage.cartLocatorClick();
  await cartPage.waitForLoading();

  await cartPage.verifyEspressoInCart();
  await cartPage.removeOneEspressoButtonClick();
  await cartPage.verifyEspressoBeHidden();

  await cartPage.verifyCappuccinoInCart();
  await cartPage.removeOneCappuccinoButtonClick();
  await cartPage.verifyCappuccinoBeHidden();

  await cartPage.errorMessageBeVisible();
});
