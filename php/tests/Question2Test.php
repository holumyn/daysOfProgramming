<?php
require __DIR__ . "/../Question2.php";
use PHPUnit\Framework\TestCase;
class Question2Test extends TestCase {
  private $question;

  public function testCaseOne()
  {
    $this->question = new Question2();
    $result = $this->question->utopianTree(0);
    $this->assertEquals(1, $result);
  }

  public function testCaseTwo()
  {
    $this->question = new Question2();
    $result = $this->question->utopianTree(1);
    $this->assertEquals(2, $result);
  }

  public function testCaseThree()
  {
    $this->question = new Question2();
    $result = $this->question->utopianTree(4);
    $this->assertEquals(7, $result);
  }
}
