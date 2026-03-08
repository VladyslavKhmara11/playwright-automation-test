import { test } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage.js';

test('Cappuccino cost is added to Total on menu page', async ({ page }) => {
  const menuPage = new MenuPage(page);

  await menuPage.open();
  await menuPage.cappuccinoLocatorClick();
  await menuPage.checkoutLocatorContainText('Total: $19.00');
});
