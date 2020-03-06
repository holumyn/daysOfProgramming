package injava.test;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import injava.Question1;

public class Question1Test {
    
    private Question1 question;

    @Before
    public void before() {
        this.question = new Question1();
    }
    
    @Test
    public void test1 () {
        String result = this.question.dayOfProgrammer(2019, 256);
        assertEquals("13.09.2019", result);
    }

    @Test
    public void test2 () {
        String result = this.question.dayOfProgrammer(2020, 128);
        assertEquals("07.05.2020", result);
    }
}