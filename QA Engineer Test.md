# QA Engineer Coding Exercise and Experience

## Tags
#exercise #qa #cd/ci #github

https://github.com/cadumega/login-app/actions

![[Pasted image 20250301161323.png]]

https://whimsical.com/qa-bio-RiPKpJTxFjjaAHhsfXmdXx@FNpptVQ1B1cSwK6LQJkt18hTTotbb
![[Pasted image 20250301171857.png]]

## Index
 1. Create a Simple Standard Login Feature with Next.js
 2. Create a Local Folder for Tests
 3.  Create Custom Cypress Commands
 4. GitHub Actions CI/CD Setup
 5. Running the Project and Tests
 6. Project Structure Overview
 7. Running CI/CD Pipeline Locally
## Reference: Tests
### 1. Create a Simple Standard Login Feature with Next.js

To execute these tests, a standard login feature will be created using Next.js. The implementation was supported by Claude 3.7 Sonnet AI and Gemini for additional insights.

#### Steps to Set Up Next.js Application:

1. **Create a new Next.js project:**
    
    ```sh
    npx create-next-app login-app
    ```
    
2. **Navigate to the project folder:**
    
    ```sh
    cd login-app
    ```
    
3. **Modify the following files:**
    
    - Create `page.js` inside `src/app/` (Login page)
    - Create `dashboard/page.js` inside `src/app/` (Dashboard after login)
    - Create `register/page.js` inside `src/app/` (Registration page)
    - Modify `layout.js` inside `src/app/` (Global layout)
4. **Start the Next.js application:**
    
    ```sh
    npm run dev
    ```
    
    The application will start at `http://localhost:3000`.
    
    **Test Credentials:**
    
    - **Username:** `admin`
    - **Password:** `admin123`

### 2. Create a Local Folder for Tests

1. **Create a directory for Cypress tests:**
    
    ```sh
    mkdir tests
    cd tests
    ```
    
2. **Install Cypress:**
    
    ```sh
    npm init -y  # Initialize a new npm project
    npm install cypress --save-dev
    ```
    
3. **Open Cypress:**
    
    ```sh
    npx cypress open
    ```
    
4. **Configure Cypress (`cypress.config.js`) to point to your Next.js application:**
    
    ```js
    const { defineConfig } = require('cypress');
    module.exports = defineConfig({
      e2e: {
        baseUrl: 'http://localhost:3000',
        specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
        setupNodeEvents(on, config) {
          // Implement node event listeners here
        },
      },
    });
    ```
    

### 3. Create Custom Cypress Commands

To improve test maintainability, create custom commands:

```js
Cypress.Commands.add('fillPasswordField', (password) => {
  cy.get('[data-testid="password"]').type(password);
});

Cypress.Commands.add('loginWithCredentialsFromEnv', () => {
  const username = Cypress.env('defaultUsername');
  const password = Cypress.env('defaultPassword');
  
  cy.get('[data-testid="username"]').type(username);
  cy.get('[data-testid="password"]').type(password);
});
```

### 4. GitHub Actions CI/CD Setup

#### Issues Encountered and Fixes
- https://jsonlint.com to review json, and incorrect code fillings like strings
- **Missing lockfile:** Ensure `package-lock.json` is present in both the main and test directories.
- **Working directory configuration:** Use `working-directory: ./tests` for Cypress-related steps.
- **Server readiness:** Use `wait-on: 'http://localhost:3000'` to ensure tests run only when the server is ready.
- **Correct test pattern:** Use `spec: "**/*.cy.{js,jsx,ts,tsx}"` to match test files.

#### CI/CD Workflow (`.github/workflows/node.js.yml`):

```yaml
name: Next.js Login Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 0 * * *'  # Runs daily at midnight UTC

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Clear npm cache
      run: npm cache clean --force
    
    - uses: actions/checkout@v3
    
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build Next.js app
      run: npm run build
    
    - name: List directories
      run: ls -al
    
    - name: Install Cypress dependencies
      working-directory: ./tests
      run: npm ci
    
    - name: Start Next.js server in the background
      working-directory: ./
      run: npm run start &
    
    - name: Run Cypress tests
      uses: cypress-io/github-action@v6
      with:
        working-directory: ./tests
        wait-on: 'http://localhost:3000'
        spec: "**/*.cy.{js,jsx,ts,tsx}"
        browser: chrome
```

### 5. Running the Project and Tests

#### Clone the Repository

```sh
git clone https://github.com/cadumega/login-app.git
cd login-app
```

#### Install Dependencies and Run the Application

```sh
npm install
npm run dev
```

Access the application at `http://localhost:3000` and log in with:

- **Username:** `admin`
- **Password:** `admin123`

#### Run Cypress Tests

Open a new terminal window and run:

```sh
cd tests
npm install
npx cypress open  # UI mode
# Or run tests headlessly
npx cypress run
```

### 6. Project Structure Overview

```
/src                 # Next.js application source code
/app                 # Application pages (login, dashboard, register)
/tests               # Cypress test suite
/cypress/e2e         # End-to-end test specifications
```

### 7. Running CI/CD Pipeline Locally

```sh
npm cache clean --force
npm ci
npm run build
ls -al  # List directories
cd tests
npm ci  # Install Cypress dependencies
cd ..
npm run start &  # Start the Next.js server in the background
sleep 10  # Wait for the server to start
cd tests
npx cypress run  # Run the tests
```

---

This document provides a structured and comprehensive guide for setting up, testing, and automating a login feature in Next.js using Cypress and GitHub Actions.