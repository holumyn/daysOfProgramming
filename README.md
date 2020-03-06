# Gloopro-Technical-Tests-2

# Instructions
 - Clone the Repo to your local machine
 - Solve the problem in your own branch
 - Then, push your work when you are done. 

## Question 1

Abigail invented a Time Machine and wants to test it by time-traveling to visit Wakanda on the Day of the Programmer. Each year, the day of the programmer is determined. It can be any day during a year in the inclusive range from **1700** to **2700**. 

From **1700** to **1917**, Wakanda's official calendar was the Julian calendar; since **1919** they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in **1918**, when the next day after January **31st** was February **14th**. This means that in **1918**, February **14th**  was the  **32nd** day of the year in Wakanda.

In both calendar systems, February is the only month with a variable amount of days; it has **29** days during a leap year, and **28** days during all other years. In the Julian calendar, leap years are divisible by **4**; in the Gregorian calendar, leap years are either of the following:

* Divisible by **400**
* Divisible by **4** and not divisible by **100**

Given a year, **y**, find the date of the **256th** day of that year according to the official Wakanda's calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is **y**.

For example, the given **year** = **1984** and **day** = **256**. **1984**  is divisible by **4**, so it is a leap year. The **256th**  day of a leap year after **1918** is September 12, so the answer is **12.09.1984**.

### Function Description

Complete the **_dayOfProgrammer_** function in the file provided. It should return a string representing the date of the given day of the year given.

dayOfProgrammer has the following parameter(s):

year: an integer

day: an integer

#### Sample Input 1
```
year = 2019

day = 256
````
#### Sample Output 1
```
13.09.2019
```
#### Explanation 1

In the year **y = 2019** , January has **31** days, February has **28** days, March has **31** days, April has **30** days, May has **31** days, June has **30** days, July has **31** days, and August has **31** days. When we sum the total number of days in the first eight months, we get **31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243**. Day of the Programmer is the **256th** day, so then calculate **256 - 243 = 13** to determine that it falls on day **13** of the **9th** month (September). We then print the full date in the specified format, which is 13.09.2019.

#### Sample Input 2
```
year = 2020

day = 128
```  
#### Sample Output 2
```  
07.05.2020
```
#### Explanation 2

Year **y = 2020** is a leap year, so February has **29** days, but all the other months have the same number of days as in **2019**. When we sum the total number of days in the first four months, we get **31 + 29 + 31 + 30 = 121**. Day of the Programmer is the **128th** day, so then calculate **128 - 121 = 7** to determine that it falls on day **7** of the **5th** month (May). We then print the full date in the specified format, which is 07.05.2020.

  