import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage.js';
import { CartPage } from '../../src/pages/CartPage.js';

test('Espresso removed from Cart after clicking Remove', async ({ page }) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.espressoLocatorClick();
  await menuPage.cartLocatorClick();
  await cartPage.waitForLoading();
  await cartPage.removeAllEspressoButtonClick();
  await cartPage.errorMessageBeVisible();
});
