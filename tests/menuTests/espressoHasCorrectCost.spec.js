import { test, expect } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage.js';

test('Espresso cup has correct cost', async ({ page }) => {
  const menuPage = new MenuPage(page);

  await menuPage.open();
  await menuPage.verifyEspressoPrice();
});
