import { test, expect } from '@playwright/test';

test.describe('Authentication Tests', () => {
  test('Admin should log in successfully', async ({ page }) => {
    await page.goto('https://admin.condaty.com');
    await page.waitForTimeout(2000);
    await page.fill('#email', '123456'); // assuming an ID for username input
    await page.fill('#password', '12345678'); // assuming an ID for password input
  
    await page.waitForTimeout(2000);
    // Declarar el locator usando el XPath del botón de iniciar sesión
  const btnIniciarSesion = page.locator('//*[@id="__next"]/div/div[2]/div/div[2]/div/form/button');
  await page.waitForTimeout(2000);
  await btnIniciarSesion.scrollIntoViewIfNeeded();
  await btnIniciarSesion.click();
   // Validar que el texto del botón sea "Iniciar sesión"
   //await expect(btnIniciarSesion).toHaveText('Iniciar sesión');
   //btnIniciarSesion.click();
   //await page.waitForTimeout(2000);
   // Handle the "Change your password" alert by clicking "OK"
   //await page.locator('role=alert >> text=OK').click();

    const activarBtn = page.locator('//*[@id="__next"]/div/main/div/section[2]/div[3]/div/div[2]/div[2]/div/button');
    //activarBtn.click();
    // Validate the dashboard is visible (based on "Resumen general")

    const alternativeCloseBtn = page.locator('svg.mk-icon.absolute.top-4.right-4')
    await page.waitForTimeout(2000);
    //alternativeCloseBtn.click();



    // Si existe una solicitud de notificación, la permitimos
    
    if (await alternativeCloseBtn.isVisible()) {
      await alternativeCloseBtn.click();
    }

    
    //await page.waitForTimeout(2000);
    //const dashboardTitle = page.locator('text=Condominio Prueba');
    //await page.waitForTimeout(2000);
    //await expect(dashboardTitle).toBeVisible();

    //In case this is a mobile test this will run a step to male the option visible
    const burgerMenuBtn = page.locator('xpath=//*[@id="__next"]/div/main/div/section[2]/div[2]/div[3]/div/div/button');
    if (await burgerMenuBtn.isVisible()) {
      await burgerMenuBtn.click();
      await page.waitForTimeout(2000);
      const homeOptionMobile = page.locator('xpath=//*[@id="__next"]/div/main/div/section[2]/div[2]/div[1]/div/div/div[3]/div[1]/a[1]');
      await expect(homeOptionMobile).toBeVisible()
    }else{
      const homeOption = page.locator('xpath=//*[@id="__next"]/div/main/div/section[1]/div/div[3]/div[1]/a[1]');
      await page.waitForTimeout(2000);
      await expect(homeOption).toBeVisible(); 
    }  
      });

     

  test('log in successfully checking URL', async ({ page }) => {
    await page.goto('https://admin.condaty.com');
    await page.fill('#email', '123456'); // assuming an ID for username input
    await page.fill('#password', '12345678'); // assuming an ID for password input
    await page.waitForTimeout(2000);
    const loginBtn = page.locator('xpath=//*[@id="__next"]/div/div[2]/div/div[2]/div/form/button');
    await page.waitForTimeout(2000);
    await loginBtn.scrollIntoViewIfNeeded();
    await loginBtn.click();

    await expect(page).toHaveURL('https://admin.condaty.com/');
  });
});
