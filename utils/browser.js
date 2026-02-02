import { chromium } from 'playwright';

export async function launchBrowser() {
  return chromium.launch({
    headless: true,          // must be headless on server
    args: [
      '--no-sandbox',        // required for many Linux environments
      '--disable-setuid-sandbox',
    ],
  });
}
