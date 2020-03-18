const moment = require('moment');
// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year, day) {
  let calender = [31,28,31,30,31, 30, 31,31,30,31,30,31];
  // check if year is leap year
  let isLeapYear = false;
  if ( year % 4 == 0) {
    isLeapYear = true;
  }
  let totalDays = 0;
  let programmerDay = 0;
  let month = 0;
  let result;
  let leapYearDay = 0;
  for(let i = 0;i < calender.length; i++) {
    totalDays = totalDays + calender[i];
    if (totalDays > day) {
      
      if (isLeapYear) {
        leapYearDay = 1;
      }
      programmerDay =parseInt(day) - parseInt(totalDays - calender[i]) + leapYearDay;
      
      month = i + 1;
      if (month < 10) {
        month = `0${month}`;
      }
      result = `${programmerDay}.${month}.${year}`;
      break;
    }
  }
  return result;
}

module.exports = dayOfProgrammer;
