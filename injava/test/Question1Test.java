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
        String result = this.question.dayOfProgrammer(2017);
        assertEquals("13.09.2017", result);
    }

    @Test
    public void test2 () {
        String result = this.question.dayOfProgrammer(2016);
        assertEquals("12.09.2016", result);
    }
}