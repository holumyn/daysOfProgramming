# Gloopro-Technical-Tests-2

## Question 1

Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the **256th**) day of the year) during a year in the inclusive range from **1700** to **2700**. 

From **1700** to **1917**, Russia's official calendar was the Julian calendar; since **1919** they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in **1918**, when the next day after January **31st** was February **14th**. This means that in **1918**, February **14th**  was the  **32nd** day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has **29** days during a leap year, and **28** days during all other years. In the Julian calendar, leap years are divisible by **4**; in the Gregorian calendar, leap years are either of the following:

* Divisible by **400**
* Divisible by **4** and not divisible by **100**

Given a year, **y**, find the date of the **256th** day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is **y**.

For example, the given **year** = **1984**. **1984**  is divisible by **4**, so it is a leap year. The **256th**  day of a leap year after **1918** is September 12, so the answer is **12.09.1984**.

### Function Description

Complete the **_dayOfProgrammer_** function in the file provided. It should return a string representing the date of the **256th** day of the year given.

dayOfProgrammer has the following parameter(s):

year: an integer

#### Sample Input 1
```
2017
````
#### Sample Output 1
```
13.09.2017
```
#### Explanation 1

In the year **y = 2017** , January has **31** days, February has **28** days, March has **31** days, April has **30** days, May has **31** days, June has **30** days, July has **31** days, and August has **31** days. When we sum the total number of days in the first eight months, we get **31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243**. Day of the Programmer is the **256th** day, so then calculate **256 - 243 = 13** to determine that it falls on day **13** of the **9th** month (September). We then print the full date in the specified format, which is 13.09.2017.

#### Sample Input 2
```
2016
```  
#### Sample Output 2
```  
12.09.2016
```
#### Explanation 2

Year **y = 2016** is a leap year, so February has **29** days, but all the other months have the same number of days as in **2017**. When we sum the total number of days in the first eight months, we get **31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244**. Day of the Programmer is the **256th** day, so then calculate **256 - 244 = 12** to determine that it falls on day **12** of the **9th** month (September). We then print the full date in the specified format, which is 12.09.2017.

  
## Question 2
The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after **n** growth cycles?

For example, if the number of growth cycles is **n = 5**, the calculations are as follows:

```
Period  Height
0          1
1          2
2          3
3          6
4          7
5          14
```

### Function Description

Complete the utopianTree function in the file provided. It should return the integer height of the tree after the input number of growth cycles.

utopianTree has the following parameter(s):

n: an integer, the number of growth cycles to simulate

### Sample Input 1

```
n = 0
```  
### Sample Output 1
```
1
```
### Explanation 1

**n = 0**, hence the initial height (**H = 1**) of the tree remains unchanged.

### Sample Input 2

```
n = 1
```  
### Sample Output 2
```
2
```
### Explanation 2

**n = 1**, the tree doubles in height and is **2** meters tall after the spring cycle.

### Sample Input 3

```
n = 4
```  
### Sample Output 3
```
7
```
### Explanation 3

**n = 4**, the tree doubles its height in spring (**n = 1**, **H = 2** ), then grows a meter in summer (**n = 2**, **H = 3**), then doubles after the next spring (**n = 3**, **H = 6**), and grows another meter after summer (**n = 4**, **H = 7**). Thus, at the end of 4 cycles, its height is **7** meters.
