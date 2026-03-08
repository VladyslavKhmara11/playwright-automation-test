import { test } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage.js';
import { CartPage } from '../../src/pages/CartPage.js';

test('Cappuccino removed from Cart after clicking Remove', async ({ page }) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.cappuccinoLocatorClick();
  await menuPage.cartLocatorClick();
  await cartPage.waitForLoading();
  await cartPage.removeAllCappuccinoButtonClick();
  await cartPage.errorMessageBeVisible();
});
