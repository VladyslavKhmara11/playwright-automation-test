import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartList = page.getByRole('list').nth(1);
    
    this.cappuccinoItem = this.cartList.getByRole('listitem').filter({ hasText: 'Cappuccino' });
    this.cappuccinoName = this.cappuccinoItem.locator('div').nth(0);
    this.cappuccinoUnit = this.cappuccinoItem.locator('div').nth(1);
    this.cappuccinoTotalCost = this.cappuccinoItem.locator('div').nth(3);

    this.espressoItem = this.cartList.getByRole('listitem').filter({ hasText: 'Espresso' });
    this.espressoName = this.espressoItem.locator('div').nth(0);
    this.espressoUnit = this.espressoItem.locator('div').nth(1);
    this.espressoTotalCost = this.espressoItem.locator('div').nth(3);

    this.americanoItem = this.cartList.getByRole('listitem').filter({ hasText: 'Americano' });
    this.americanoName = this.americanoItem.locator('div').nth(0);
    this.americanoUnit = this.americanoItem.locator('div').nth(1);
    this.americanoTotalCost = this.americanoItem.locator('div').nth(3);

    this.discountedMochaItem = this.cartList.getByRole('listitem').filter({ hasText: '(Discounted) Mocha' });
    this.discountedMochaName = this.discountedMochaItem.locator('div').nth(0);
    this.discountedMochaUnit = this.discountedMochaItem.locator('div').nth(1);
    this.discountedMochaTotalCost = this.discountedMochaItem.locator('div').nth(3);

    this.errorMessage = page.getByText('No coffee, go add some.');

    this.removeAllCappuccinoButton =page.getByLabel('Remove all Cappuccino');
    this.removeAllEspressoButton = page.getByLabel('Remove all Espresso');

    this.removeOneCappuccinoButton =page.getByRole('button', { name: 'Remove one Cappuccino' });
    this.removeOneEspressoButton =page.getByRole('button', { name: 'Remove one Espresso' });

    this.addOneCappuccinoButton =page.getByRole('button', { name: 'Add one Cappuccino' });
    this.addOneEspressoButton =page.getByRole('button', { name: 'Add one Espresso' });

    this.checkoutCartLocator = page.getByTestId('checkout');
  }

  async open() {
    await this.page.goto('https://coffee-cart.app/cart');
  }

  async waitForLoading() {
    await this.page.waitForURL('https://coffee-cart.app/cart');
  }

  async verifyCappuccinoInCart() {
    await expect(this.cappuccinoName).toContainText('Cappuccino');
    await expect(this.cappuccinoUnit).toContainText('$19.00 x 1');
    await expect(this.cappuccinoTotalCost).toContainText('$19.00');
  }

  async verifyCappuccinoTotalCost(CappuccinoTotalCost) {
    await expect(this.cappuccinoTotalCost).toContainText(CappuccinoTotalCost);
  }

  async verifyEspressoInCart() {
    await expect(this.espressoName).toContainText('Espresso');
    await expect(this.espressoUnit).toContainText('$10.00 x 1');
    await expect(this.espressoTotalCost).toContainText('$10.00');
  }

  async verifyEspressoTotalCost(EspressoTotalCost) {
    await expect(this.espressoTotalCost).toContainText(EspressoTotalCost);
  }

  async verifyAmericanoInCart() {
    await expect(this.americanoName).toContainText('Americano');
    await expect(this.americanoUnit).toContainText('$7.00 x 1');
    await expect(this.americanoTotalCost).toContainText('$7.00');
  }

  async verifyDiscountedMochaInCart() {
    await expect(this.discountedMochaName).toContainText('(Discounted) Mocha');
    await expect(this.discountedMochaUnit).toContainText('$4.00 x 1');
    await expect(this.discountedMochaTotalCost).toContainText('$4.00');
  }

  async verifyDiscountedMochaBeHidden() {
    await expect(this.discountedMochaName).toBeHidden();
    await expect(this.discountedMochaUnit).toBeHidden();
    await expect(this.discountedMochaTotalCost).toBeHidden();
  }

  async verifyCappuccinoBeHidden() {
    await expect(this.cappuccinoName).toBeHidden();
    await expect(this.cappuccinoUnit).toBeHidden();
    await expect(this.cappuccinoTotalCost).toBeHidden();
  }

  async verifyEspressoBeHidden() {
    await expect(this.espressoName).toBeHidden();
    await expect(this.espressoUnit).toBeHidden();
    await expect(this.espressoTotalCost).toBeHidden();
  }
  


  async errorMessageBeVisible () {
    await expect(this.errorMessage).toBeVisible();
  }

  async removeAllCappuccinoButtonClick () {
    await this.removeAllCappuccinoButton.click();
  }

  async removeAllEspressoButtonClick () {
    await this.removeAllEspressoButton.click();
  }

  async removeOneCappuccinoButtonClick () {
    await this.removeOneCappuccinoButton.click();
  }

  async removeOneEspressoButtonClick () {
    await this.removeOneEspressoButton.click();
  }

  async addOneCappuccinoButtonClick () {
    await this.addOneCappuccinoButton.click();
  }

  async addOneEspressoButtonClick () {
    await this.addOneEspressoButton.click();
  }

    async checkoutCartLocatorContainText(checkoutText) {
    await expect(this.checkoutCartLocator).toContainText(checkoutText);
  }
}
