# QA Engineer Coding Exercise - ReadMe

## Overview
This project is a **Next.js** application with a simple **login system** ,
and an automated **test suite using Cypress**. 
The CI/CD pipeline is configured with **GitHub Actions** to ensure continuous integration and testing.

"
To execute these tests, a standard login feature will be created using Next.js. to help me I used some AI tools like Claude 3.7 Sonnet AI and Gemini for additional insights and overcome some problems.
I created some commands to make it easier to maintain the script code in Cypress automation, of course in a summarized way, following the test Plan.
I improved the Github actions CI/CD code so that it collects evidence that makes it easier for me to identify where the problem is.
"

## Documentation:
qaEngineerTest.md - It's a general operational documentation, explaning step by step 
testPlan.md - I put the test cases that I covered and I can create
README.md - Summarize all keypoints of this project, and how to run the project locally

---

## 📌 Key Features
- **Next.js login application** with a dashboard and registration page.
- **Cypress end-to-end tests** for login and registration flows.
- **Custom Cypress commands** for maintainable tests.
- **GitHub Actions CI/CD pipeline** for automated testing.

---

## 📋 Test Plan
### 🔹 Scope
- **Login functionality**
- **Dashboard access after login**
- **User registration**
- **Error handling (incorrect credentials, missing fields, etc.)**

### 🔹 Tools Used
- **Cypress** for UI testing
- **GitHub Actions** for CI/CD automation

### 🔹 Custom Cypress Commands
- `cy.fillPasswordField(password)` → Fills the password field.
- `cy.loginWithCredentialsFromEnv()` → Logs in using credentials from Cypress environment variables.

---

## 🛠️ Project Structure
```
/src                 # Next.js source code
/app                 # Pages (login, dashboard, register)
/tests               # Cypress test suite
/cypress/e2e         # End-to-end test files
```

---

## 🚀 How to Clone and Run the Project

### 🔹 Clone the Repository
```sh
git clone https://github.com/cadumega/login-app.git
cd login-app
```

### 🔹 Install Dependencies
```sh
npm install  # Install dependencies for the Next.js application
cd tests
npm install  # Install Cypress dependencies
cd ..
```

### 🔹 Run the Application
```sh
npm run dev  # Start Next.js server
```
Access it at: **http://localhost:3000**

### 🔹 Run Cypress Tests
```sh
cd tests
npx cypress open  # Run tests in UI mode
# OR
npx cypress run  # Run tests in headless mode
```

---

## 🔄 CI/CD Pipeline
### 🔹 GitHub Actions Workflow
- Runs tests on **push** and **pull requests** to the `main` branch.
- Runs **daily at midnight UTC** via a scheduled job.
- Uses **Ubuntu-latest** as the runner.

### 🔹 Main Steps
1. **Check out code** from GitHub.
2. **Set up Node.js** (version 18.x).
3. **Install dependencies**.
4. **Build the Next.js application**.
5. **Start Next.js server in the background**.
6. **Run Cypress tests in Chrome browser**.

---

## 📌 Environment Variables
- **Username:** `admin`
- **Password:** `admin123`

---

This ReadMe provides a quick overview of the application, test plan, CI/CD process, and setup steps. 🚀

