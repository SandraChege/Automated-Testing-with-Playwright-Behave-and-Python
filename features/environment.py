import os
from configparser import ConfigParser
from playwright.sync_api import sync_playwright, Page
from steps import login_steps

# Read behave.ini file
config = ConfigParser()
config.read("behave.ini")

# Get the screenshot directory (default to "screenshots" if not specified)
SCREENSHOT_DIR = config.get("behave", "screenshot_dir", fallback="screenshots")

# Ensure the directory exists
os.makedirs(SCREENSHOT_DIR, exist_ok=True)

def before_scenario(context, scenario):
    """Set up Playwright browser before each scenario."""
    context.playwright = sync_playwright().start()
    context.browser = context.playwright.chromium.launch(headless=False, slow_mo=500)
    context.page = context.browser.new_page()

def after_scenario(context, scenario):
    """Tear down Playwright after each scenario."""
    context.page.close()
    context.browser.close()
    context.playwright.stop()

def after_step(context, step):
    """Capture a screenshot after a failed step (Playwright version)."""
    if step.status == "failed":
        if hasattr(context, "page"):
            screenshot_path = os.path.join(SCREENSHOT_DIR, f"{step.name}.png")
            context.page.screenshot(path=screenshot_path)  # Playwright method
            print(f"Screenshot saved: {screenshot_path}")
        else:
            print("No Playwright page instance found, skipping screenshot.")