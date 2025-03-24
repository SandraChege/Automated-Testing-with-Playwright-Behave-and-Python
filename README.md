# Automated Testing with Playwright, Behave, and Python 🎭🐍
## 1. Introduction

This project provides an automated end-to-end (E2E) testing framework using:
- Playwright 🎭 for browser automation
- Behave 📝 for Behavior-Driven Development (BDD)

It enables seamless testing across multiple browsers while using Gherkin syntax for clear, human-readable test scenarios.

## 2. Features ✅
- ✔️ Cross-browser testing (Chromium, Firefox, WebKit)
- ✔️ BDD-style test execution with Gherkin syntax
- ✔️ Headless & non-headless execution
- ✔️ Page Object Model (POM) implementation
- ✔️ Screenshots & trace reports for debugging
- ✔️ CI/CD integration support

## 3. Setup & Installation ⚙️
### 🔹 Prerequisites
Ensure you have the following installed:
- Python 3.8+
- Git
### 🔹 Create a Virtual Environment
```
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```
### 🔹 Install Dependencies
```
pip install -r requirements.txt
playwright install
```
## 4. Project Structure 📂
``` python
📦 Automated-Testing-with-Playwright-Behave
 ┣ 📂 features                # BDD feature files
 ┃ ┣ 📜 login.feature         # Example test scenario
 ┣ 📂 steps                   # Step definitions
 ┃ ┣ 📜 login_steps.py        # Step implementation
 ┣ 📂 pages                   # Page Object Model (POM) files
 ┃ ┣ 📜 login_page.py         # Login page interactions
 ┣ 📜 requirements.txt        # Dependencies
 ┣ 📜 behave.ini              # Behave configuration
 ┣ 📜 README.md               # Project documentation
 ┗ 📜 .gitignore              # Ignored files
```
## 5. Running Tests 🚀
### ▶ Run all tests
```
behave
```
### ▶ Run a specific feature file
```
behave features/login.feature
```
### ▶ Run tests in headless mode
```
behave --tags=headless
```
## 5. Writing a Test with Behave 📝
### 🔹 Feature File (Gherkin Syntax)
📄 features/login.feature
```
gherkin
Feature: Login Functionality

  Scenario: User logs in successfully
    Given the user is on the login page
    When they enter valid credentials
    And click the login button
    Then they should be redirected to the dashboard
```
### 🔹 Step Definitions
📄 steps/login_steps.py
```
python
from playwright.sync_api import sync_playwright
from behave import given, when, then

@given("the user is on the login page")
def step_open_login_page(context):
    with sync_playwright() as p:
        context.browser = p.chromium.launch(headless=False)
        context.page = context.browser.new_page()
        context.page.goto("https://example.com/login")

@when("they enter valid credentials")
def step_enter_credentials(context):
    context.page.fill("#username", "testuser")
    context.page.fill("#password", "password123")

@when("click the login button")
def step_click_login(context):
    context.page.click("#login-button")

@then("they should be redirected to the dashboard")
def step_verify_dashboard(context):
    assert context.page.url == "https://example.com/dashboard"
    context.browser.close()
```

## 6. Resources 📚
- [Playwright Docs](https://playwright.dev/python/)
- [Behave Docs](https://behave.readthedocs.io/)
- [Gherkin Syntax Guide](https://cucumber.io/docs/gherkin/)
- [Python Official Docs](https://docs.python.org/3/)




















