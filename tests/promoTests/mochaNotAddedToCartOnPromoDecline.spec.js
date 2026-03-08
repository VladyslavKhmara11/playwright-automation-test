import { test } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage.js';
import { CartPage } from '../../src/pages/CartPage.js';

test('Discounted Mocha added to the Cart after promo rejecting', async ({page}) => {
    const menuPage = new MenuPage(page);
    const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.cappuccinoLocatorClick();
  await menuPage.espressoLocatorClick();
  await menuPage.americanoLocatorClick();
  await menuPage.extraMochaMessageBeVisible();
  await menuPage.nahSkipButtonClick();
  await menuPage.cartLocatorClick();
  await cartPage.waitForLoading();
  // Espresso
  await cartPage.verifyEspressoInCart();
  // (Discounted) Mocha BeHidden
  await cartPage.verifyDiscountedMochaBeHidden();
  // Cappuccino
  await cartPage.verifyCappuccinoInCart();
  // Americano
  await cartPage.verifyAmericanoInCart();
});
