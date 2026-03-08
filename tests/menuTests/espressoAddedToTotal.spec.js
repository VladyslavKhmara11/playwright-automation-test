import { test } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage.js';

test('Espresso cost is added to Total on menu page', async ({ page }) => {
  const menuPage = new MenuPage(page);

  await menuPage.open();
  await menuPage.espressoLocatorClick();
  await menuPage.checkoutLocatorContainText('Total: $10.00');
});
