<?php
require __DIR__ . "/../Question1.php";
use PHPUnit\Framework\TestCase;
class Question1Test extends TestCase {
  private $question;

  public function testCaseOne()
  {
    $this->question = new Question1();
    $result = $this->question->dayOfProgrammer(2017);
    $this->assertEquals('13.09.2017', $result);
  }

  public function testCaseTwo()
  {
    $this->question = new Question1();
    $result = $this->question->dayOfProgrammer(2016);
    $this->assertEquals('12.09.2016', $result);
  }
}
