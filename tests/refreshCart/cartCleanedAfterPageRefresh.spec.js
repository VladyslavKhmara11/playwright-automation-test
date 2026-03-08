import { test } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage.js';
import { CartPage } from '../../src/pages/CartPage.js';

test('Cart cleaned after page refresh', async ({ page }) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);

  await menuPage.open();
  await menuPage.cappuccinoLocatorClick();
  await menuPage.espressoLocatorClick();
  await menuPage.cartLocatorClick();
  await cartPage.waitForLoading();

  await cartPage.verifyCappuccinoInCart();
  await page.reload();
  await cartPage.verifyCappuccinoBeHidden();
  await cartPage.errorMessageBeVisible();
});
