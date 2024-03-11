import { test, expect } from '@playwright/test';

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle'})

  await page.getByLabel('Seu e-mail').fill('evertoniee@yahoo.com.br')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('enviamos um link de autenticação para seu email')
  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
});

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle'})

  await page.getByLabel('Seu e-mail').fill('wrong@yahoo.com.br')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais invalidas.')
  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
});

test('navigate to a new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle'})

  await page.getByRole('link', { name: 'novo estabelecimento' }).click()

  await expect(page.url()).toContain('sign-up')
  
});

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle'})

  await page.getByRole('link', { name: 'Fazer Login' }).click()

  await expect(page.url()).toContain('sign-in')
  
});

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle'})

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu email').fill('johndoe@yahoo.com.br')
  await page.getByLabel('Seu celular').fill('9999999999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso')

  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000)

});

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle'})

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Rocket')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu email').fill('johndoe@yahoo.com.br')
  await page.getByLabel('Seu celular').fill('9999999999')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar o restaurante')

  await expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
  
});
