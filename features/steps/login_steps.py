from behave import given, when, then
from playwright.sync_api import sync_playwright, expect


@given("The user navigates to the login page")
def step_navigate_to_login_page(context):
    context.page.goto('http://localhost:8000/')

@then("I should see the header 'Login'")
def step_verify_header(context):
    assert context.page.locator("h2").is_visible()

@then("I should see the input field for 'Username'")
def step_verify_username_field(context):
    username_field = context.page.locator("#username")
    expect(username_field).to_have_attribute('type', 'text')  # Check the type attribute
    expect(username_field).to_have_attribute('placeholder', 'Username')  # Check the placeholder
    expect(username_field).to_be_empty()
    expect(username_field).to_be_editable()
    expect(username_field).to_be_visible() 

@then('I should see the input field for "Password"')
def step_verify_password_field(context):
    password_field = context.page.locator("#password")
    expect(password_field).to_have_attribute('type', 'password')  # Check the type attribute
    expect(password_field).to_have_attribute('placeholder', 'Password')  # Check the placeholder
    expect(password_field).to_be_empty()
    expect(password_field).to_be_editable() 
    expect(password_field).to_be_visible() 

@then('I should see the "Login" button')
def step_verify_username_field(context):
    login_button = context.page.locator('button')
    expect(login_button).to_have_text('Login', exact=True)
    expect(login_button).to_be_enabled() #ensure it is clickable
    expect(login_button).to_be_visible()