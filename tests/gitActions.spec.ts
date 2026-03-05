import { test, expect } from "@playwright/test"

test('Git action practice 1', async ({ page }) => {
    console.log("Start practice test 1")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 1")

});

test('Git action practice 2', async ({ page }) => {
    console.log("Start practice test 2")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright2/);
    console.log("End practice test 2")
});
test.describe('Describe test 3,4,5', async () => {
    test('Git action practice 3', async ({ page }) => {
        console.log("Start practice test 3")
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('Git action practice 4', async ({ page }) => {
        console.log("Start practice test 4")
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
        console.log("End practice test 4")
    });

    test('Git action practice 5', async ({ page }) => {
        console.log("Start practice test 5")
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
        console.log("End practice test 5")
    });
});

test('Git action practice 6', async ({ page }) => {
    console.log("Start practice test 6")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 6")
});

test('Git action practice 7', async ({ page }) => {
    console.log("Start practice test 7")
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log("End practice test 7")
});