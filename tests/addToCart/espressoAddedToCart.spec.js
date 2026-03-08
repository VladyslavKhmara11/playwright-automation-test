import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage.js';
import { CartPage } from '../../src/pages/CartPage.js';

test('Espresso correctly added to the Cart', async ({ page }) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.espressoLocatorClick();
  await menuPage.cartLocatorClick();
  await cartPage.waitForLoading();
  await cartPage.verifyEspressoInCart();
});
