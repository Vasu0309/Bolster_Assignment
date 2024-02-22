from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, ElementNotInteractableException, InvalidElementStateException, StaleElementReferenceException, TimeoutException

driver = webdriver.Chrome()

def setup():
    driver.get("https://practicetestautomation.com/practice/")

    test_exceptions_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//a[normalize-space()='Test Exceptions']"))
    )

    test_exceptions_button.click()
    return driver

try:
    driver = setup()
    driver.find_element(By.NAME, "Add").click()
    driver.find_element(By.XPATH, "//div[@id='row2']//input[@type='text']")
except NoSuchElementException as e:
    print("Test Case 1: NoSuchElementException")
    print("Error:", e)

try:
    driver = setup()
    driver.find_element(By.NAME, "Add").click()
    WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, "//div[@id='row2']//input[@type='text']")))
    driver.find_element(By.XPATH, "//div[@id='row2']//input[@type='text']").send_keys("Burger")
    driver.find_element(By.NAME, "Save").click()
except ElementNotInteractableException as e:
    print("Test Case 2: ElementNotInteractableException")
    print("Error:", e)

try:
    driver = setup()
    driver.find_element(By.ID, "input_field").clear()
    driver.find_element(By.ID, "input_field").send_keys("Pav Bhaji")
    assert driver.find_element(By.ID, "input_field").get_attribute("value") == "Pav Bhaji"
except InvalidElementStateException as e:
    print("Test Case 3: InvalidElementStateException")
    print("Error:", e)

try:
    driver = setup()
    instructions = driver.find_element(By.XPATH, "//p[contains(@id,'instructions')]")
    driver.find_element(By.NAME, "Add").click()
    assert not instructions.is_displayed()
except StaleElementReferenceException as e:
    print("Test Case 4: StaleElementReferenceException")
    print("Error:", e)

try:
    driver = setup()
    driver.find_element(By.NAME, "Add").click()
    WebDriverWait(driver, 3).until(EC.visibility_of_element_located((By.XPATH, "//div[@id='row2']//input[@type='text']")))
    driver.find_element(By.XPATH, "//div[@id='row2']//input[@type='text']")
except TimeoutException as e:
    print("Test Case 5: TimeoutException")
    print("Error:", e)