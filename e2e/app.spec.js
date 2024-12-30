import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('login').click();
  await page.getByPlaceholder('login').fill('Dima');
  await page.getByPlaceholder('password').click();
  await page.getByPlaceholder('password').fill('12345678');
  await page.getByRole('button', { name: 'Войти' }).click();
  await page.locator('li').filter({ hasText: 'Наименование: Fjallraven -' }).locator('label').nth(1).click();
  await page.locator('li').filter({ hasText: 'Наименование: Mens Casual Premium Slim Fit T-Shirts Цена: 22.3 ₽Описание: Slim-' }).locator('label').nth(1).click();
  await page.getByText('Добавить в корзину (1)').nth(1).click();
  await page.getByRole('link', { name: 'Корзина (3)' }).click();
  await expect(page.getByText('154.55 ₽')).toBeVisible();
});