import { test, expect } from '@playwright/test';

test('Add two numbers in Salesforce LWC', async ({ page }) => {
  // Go to your Salesforce Sandbox Lightning page where LWC is added
  await page.goto('https://<your-sandbox>.lightning.force.com/lightning/page/home');

  // Fill inputs
  await page.getByLabel('Number 1').fill('5');
  await page.getByLabel('Number 2').fill('7');

  // Click add
  await page.getByRole('button', { name: 'Add' }).click();

  // Check result
  await expect(page.locator('text=Result: 12')).toBeVisible();
});