import { test, expect } from '@playwright/test';

test('update profile successful', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle'})

    await page.getByRole('button', { name: 'Pizza Shop' }).click()

    await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

    await page.getByLabel('Nome').fill('Rocket Pizza')

    await page.getByLabel('Descrição').fill('another description')

    await page.getByRole('button', { name: 'Salvar' }).click()

    await page.waitForLoadState('networkidle')

    const toast = page.getByText('Perfil atualizado com sucesso!')

    await expect(toast).toBeVisible()
  
    await page.getByRole('button', { name: 'Close' }).click()

    await page.waitForTimeout(1000) 

    await expect (page.getByRole('button', { name: 'Rocket Pizza' }) ).toBeVisible()

  });