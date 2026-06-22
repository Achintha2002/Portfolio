const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to local dev server
  await page.goto('http://localhost:3000/');
  
  // Wait for the project cards to load
  await page.waitForSelector('.project-card');
  
  // Find all Project Details buttons
  const buttons = await page.$$('.case-study-btn');
  console.log(`Found ${buttons.length} Project Details buttons.`);
  
  if (buttons.length > 0) {
    const firstButtonHref = await page.evaluate(el => el.href, buttons[0]);
    console.log(`First button href: ${firstButtonHref}`);
    
    // Click the first button
    await buttons[0].click();
    
    // Wait for navigation
    await page.waitForNavigation();
    
    // Check URL and title after navigation
    console.log(`URL after click: ${page.url()}`);
    console.log(`Title after click: ${await page.title()}`);
    
    // Take a screenshot
    await page.screenshot({ path: 'puppeteer_screenshot.png' });
    console.log('Saved screenshot to puppeteer_screenshot.png');
  } else {
    console.log('No Project Details buttons found!');
  }
  
  await browser.close();
})();
