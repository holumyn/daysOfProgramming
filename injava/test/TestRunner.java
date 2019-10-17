package injava.test;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;

public class TestRunner {
    public static void main (String [] args) {
        System.out.println("Testing Question 1");

		Result result = JUnitCore.runClasses(Question1Test.class);
		if(result.wasSuccessful()) {
			System.out.println("Test passed");
		}else {
			System.out.println("Test failed");
		}

		for(Failure failure: result.getFailures()) {
			System.out.println(failure);
		}

        System.out.println("Testing Question 2");

		result = JUnitCore.runClasses(Question2Test.class);
		if(result.wasSuccessful()) {
			System.out.println("Test passed");
		}else {
			System.out.println("Test failed");
		}

		for(Failure failure: result.getFailures()) {
			System.out.println(failure);
		}
    }
}