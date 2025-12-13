using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;

#if PART1
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Day 2 Part 1 started!");
        try
        {
            string input = File.ReadAllText("input-day2.md").Trim();
            string[] ranges = input.Split(',');
            var invalidIds = new List<long>();

            foreach (var range in ranges)
            {
                string[] parts = range.Split('-');
                long start = long.Parse(parts[0]);
                long end = long.Parse(parts[1]);
                for (long i = start; i <= end; i++)
                {
                    string numStr = i.ToString();
                    if (numStr.Length % 2 == 0)
                    {
                        int mid = numStr.Length / 2;
                        string part1 = numStr.Substring(0, mid);
                        string part2 = numStr.Substring(mid);
                        if (part1 == part2)
                        {
                            invalidIds.Add(i);
                        }
                    }
                }
            }
            Console.WriteLine(invalidIds.Sum());
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"Error reading or processing input: {ex.Message}");
        }
    }
}
#endif