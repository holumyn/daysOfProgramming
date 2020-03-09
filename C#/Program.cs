using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gloopro_Technical_Tests
{
    class Program
    {
        static void Main(string[] args)
        {
            var result = DayOfProgrammer(2019, 256);
            var result2 = DayOfProgrammer(2020, 128);
            Console.WriteLine(result);
            Console.WriteLine(result2);

            Console.ReadLine();
        }

        public static string DayOfProgrammer(int year, int day)
        {
            int months = 5;
            if (year % 4 > 0)
            {
                months = 9;
            }

            int daysInMonth = 0;
           
            for (int i = 1; i < months; i++)
            {
                daysInMonth = daysInMonth + DateTime.DaysInMonth(year, i);
            }
            int pDay = day - daysInMonth;
            string result = new DateTime(year, months, pDay).ToString("dd.MM.yyyy");

            return result;
        }
    }
}
