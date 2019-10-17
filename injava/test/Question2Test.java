package injava.test;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import injava.Question2;

public class Question2Test {
    
    private Question2 question;

    @Before
    public void before() {
        this.question = new Question2();
    }
    
    @Test
    public void test1 () {
        int result = this.question.utopianTree(0);
        assertEquals(1, result);
    }

    @Test
    public void test2 () {
        int result = this.question.utopianTree(1);
        assertEquals(2, result);
    }

    @Test
    public void test3 () {
        int result = this.question.utopianTree(4);
        assertEquals(7, result);
    }
}