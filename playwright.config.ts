import { EyesFixture } from '@applitools/eyes-playwright/fixture';
import { defineConfig, devices } from '@playwright/test';


export default defineConfig<EyesFixture>({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: '@applitools/eyes-playwright/reporter',
  expect: {
    timeout: 10_000, // Expect timeout in the config
  },
  use: {
    /* Configuration for Eyes VisualAI */
    eyesConfig: {
      /* The following and other configuration parameters are documented at: https://applitools.com/tutorials/playwright/api/overview */
      apiKey: 'ft5100mV6yfYUTD9TnN99rpd7770Z02TK0DSDeZbYqXZ0U110', // alternatively, set this via environment variable APPLITOOLS_API_KEY
      // serverUrl: 'https://eyes.applitools.com',

      // failTestsOnDiff: false,
      // appName: 'My App',
      // matchLevel: 'Strict',
      // batch: { name: 'My Batch' },
      // proxy: {url: 'http://127.0.0.1:8888'},
      // stitchMode: 'CSS',
      // matchTimeout: 0,
      // waitBeforeScreenshots: 50,
      // saveNewTests: true,
    },

    trace: 'on',
    // video: 'on',
    screenshot: 'only-on-failure',
  },

  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
        baseURL: 'https://flow-saas-3661-dev-ed.scratch.my.site.com/s/?eventId=a05As00000AbeaDIET',
      },
    },
    {
      name: 'iPhone 12',
      use: {
        ...devices['iPhone 12'],
        baseURL: 'https://flow-saas-3661-dev-ed.scratch.my.site.com/s/?eventId=a05As00000AbeaDIET',
      },
    },
    
  ],
  
});

// export default defineConfig({
//   testDir: './tests',
//   fullyParallel: true,
//   forbidOnly: !!process.env.CI,
//   retries: process.env.CI ? 2 : 0,
//   workers: process.env.CI ? 1 : undefined,
//   reporter: 'html',

//   use: {
//     trace: 'on-first-retry',
//     video: 'on'
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },

//   ],


// });
