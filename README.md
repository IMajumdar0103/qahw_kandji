# QAHW - Smoke Tests

This project is setup to run automated smoke testing on qa Kandji app using Playwright and Javascript.

## Description

There are 4 smoke tests in the smoke.spec.js file:

- Login
- Navigate through menu items
- Search
- Logout

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)



## Getting Started

Install dependencies:

```sh
npm install
```

### Authentication Setup

> **Note:** The test account has 2FA enabled. To automate login, a stored authentication state is used.  
> **Before running the tests for the first time, you must log in manually to save the authentication state:**

```sh
npx playwright open --save-storage=config/auth.json https://qahw.kandji.io/
```

Follow the login steps in the browser window. This will save your session to `config/auth.json`.

**Tip:** For CI/CD pipelines, it is recommended to use test users with 2FA disabled.

### Running Tests

To execute the smoke tests:

```sh
npx playwright test tests/smoke.spec.js
```

## Project Structure

```
.
├── config/
│   └── auth.json         # Stored authentication state
├── pages/
│   └── HomePage.js              # Page Object Model classes
    └── NavigationMenu.js        # Page Object Model classes
├── tests/
│   └── smoke.spec.js     # Smoke test scenarios
├── screenshots           # Screenshots of tests
├── README.md
├── package.json
└── ...
```


## Help

For Playwright documentation, visit: https://playwright.dev/

## Authors

- Indrani Majumdar






