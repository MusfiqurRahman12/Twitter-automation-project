const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://twitter.com/login');
  await page.fill('[name="session[username_or_email]"]', 'your-username');
  await page.fill('[name="session[password]"]', 'your-password');
  await page.click('[data-testid="LoginForm_Login_Button"]');
  await page.click('[data-testid="SideNav_NewTweet_Button"]');
  await page.fill('[data-testid="tweetTextarea_0"]', 'Hello, world!');
  await page.click('[data-testid="tweetButtonInline"]');
  console.log('Tweet posted!');
  await browser.close();
})();
