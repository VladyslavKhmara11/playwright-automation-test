import { expect } from '@playwright/test';

export class MenuPage {
  constructor(page) {
    this.page = page;
    this.cappuccinoLocator = page.getByTestId('Cappuccino');
    this.cartLocator = page.getByLabel('Cart page');
    this.espressoLocator = page.getByTestId('Espresso');
    this.americanoLocator = page.getByTestId('Americano');
    this.checkoutLocator = page.getByTestId('checkout');
    this.cappuccinoCard = page.getByRole('listitem').filter({ has: this.cappuccinoLocator });
    this.espressoCard = page.getByRole('listitem').filter({ has: this.espressoLocator });
    this.extraMochaMessage = page.getByText("It's your lucky day! Get an extra cup of Mocha for $4.");
    this.yesOfCourseButton = page.getByRole('button', { name: 'Yes, of course!' });
    this.nahSkipButton = page.getByRole('button', { name: "Nah, I'll skip." });
  }

  async open() {
    await this.page.goto('https://coffee-cart.app/');
  }

  async cappuccinoLocatorClick() {
    await this.cappuccinoLocator.click();
  }

  async cartLocatorClick() {
    await this.cartLocator.click();
  }

  async espressoLocatorClick(){
    await this.espressoLocator.click();
  }

  async checkoutLocatorContainText(checkoutText) {
    await expect(this.checkoutLocator).toContainText(checkoutText);
  }

  async verifyCappuccinoPrice() {
    await expect(this.cappuccinoCard).toContainText('$19.00');
  }

  async verifyEspressoPrice() {
    await expect(this.espressoCard).toContainText('$10.00');
  }

  async americanoLocatorClick() {
    await this.americanoLocator.click();
  }

  async extraMochaMessageBeVisible() {
    await expect(this.extraMochaMessage).toBeVisible();
  }

  async yesOfCourseButtonClick () {
    await this.yesOfCourseButton.click();
  }

  async nahSkipButtonClick () {
    await this.nahSkipButton.click();
  }
}

