import { defineConfig, devices } from '@playwright/test';

const localURL = 'http://127.0.0.1:3100';
const baseURL = process.env.E2E_BASE_URL || localURL;

export default defineConfig({
  testDir: './tests',
  workers: 2,
  use: {
    baseURL,
    launchOptions: { executablePath: process.env.CHROMIUM_PATH },
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'phone-320', use: { ...devices['Pixel 7'], viewport: { width: 320, height: 568 } } },
    { name: 'phone-390', use: { ...devices['Pixel 7'], viewport: { width: 390, height: 844 } } },
    { name: 'tablet', use: { ...devices['Pixel 7'], viewport: { width: 768, height: 1024 } } },
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
  ],
  webServer: process.env.E2E_BASE_URL ? undefined : {
    command: 'npm start -- --hostname 127.0.0.1 --port 3100',
    url: localURL,
    reuseExistingServer: !process.env.CI,
  },
});
