import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
  await page.goto("/")
  const title = page.locator('h1')
  await expect(page.locator('text=Next.js!').first()).toHaveAttribute('href', 'https://nextjs.org');
  await expect(title).toHaveText('Welcome to Next.js!')
});