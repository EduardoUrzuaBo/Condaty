import { test, expect } from '@playwright/test';

test.describe('Authentication Tests', () => {
  test('Admin should log in successfully', async ({ page }) => {
    await page.goto('https://admin.condaty.com');
    await page.fill('#email', '123456'); // assuming an ID for username input
    await page.fill('#password', '12345678'); // assuming an ID for password input
  
    
    // Declarar el locator usando el XPath del botón de iniciar sesión
  const btnIniciarSesion = page.locator('//*[@id="__next"]/div/div[2]/div/div[2]/div/form/button');

   // Validar que el texto del botón sea "Iniciar sesión"
   await expect(btnIniciarSesion).toHaveText('Iniciar sesión');
   btnIniciarSesion.click();



    //const activarBtn = page.locator('//*[@id="__next"]/div/main/div/section[2]/div[3]/div/div[2]/div[2]/div/button')
    //await expect(activarBtn).toHaveText('Iniciar sesión');
    //activarBtn.click();
  
    const dashboardTitle = page.locator('//p[@class="text-tWhite text-xl font-semibold "]');

     // Validate that the element contains the text "Resumen general"
     await expect(dashboardTitle).toHaveText('Resumen general');
      });

  test('log in successfully checking URL', async ({ page }) => {
    await page.goto('https://admin.condaty.com');
    await page.fill('#email', '123456'); // assuming an ID for username input
    await page.fill('#password', '12345678'); // assuming an ID for password input
  
    const loginBtn = page.locator('xpath=//*[@id="__next"]/div/div[2]/div/div[2]/div/form/button');
    loginBtn.click();

    await expect(page).toHaveURL('https://admin.condaty.com/');
  });
});
