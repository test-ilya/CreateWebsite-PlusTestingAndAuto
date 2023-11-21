import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import static java.lang.Thread.sleep;

public class AuthorizationWebTest {

    private By btn_free = By.className("checkbox__checkmark");
    private By input_login = By.id("input_login_free");
    private By btn_enter = By.id("btn_enter_free");
    private By text_error1 = By.id("status_auth");
    private String url = "https://test-ilya.github.io/CreateWebsite-PlusTestingAndAuto/index.html";
    private String login = "Testovich";

    @Test
    public void WebTest() throws InterruptedException {

        WebDriver autotest = new ChromeDriver();

        autotest.get(url);
        autotest.findElement(btn_free).click();
        autotest.findElement(btn_enter).click();
        sleep(1000);
        String text_error = autotest.findElement(text_error1).getText();
        Assert.assertEquals("Authorization error", text_error);
        autotest.findElement(input_login).click();
        autotest.findElement(input_login).sendKeys(login);
        autotest.findElement(btn_enter).click();
        sleep(3000);
        autotest.quit();
    }
}
