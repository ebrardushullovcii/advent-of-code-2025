using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;

#if PART2
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Day 2 Part 2 started!");

        try
        {
            string input = File.ReadAllText("input-day2.md").Trim();
            string[] ranges = input.Split(',');
            var invalidIds = new List<long>();

            foreach (var range in ranges)
            {
                string[]  rangeParts = range.Split('-');
                long start = long.Parse(rangeParts[0]);
                long end = long.Parse(rangeParts[1]);
                for (long i = start; i <= end; i++)
                {
                    string numStr = i.ToString();
                    var options = GetEqualDivisionOptions(numStr);
                    foreach (var option in options)
                    {
                        var parts = DivideIntoEqualParts(numStr, option);
                        if (AllPartsAreTheSameTheyreRottingMyBrain(parts))
                        {
                            invalidIds.Add(i);
                            break;
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

    static List<int> GetEqualDivisionOptions(string num)
    {
        var options = new List<int>();
        for (int i = 2; i <= num.Length; i++)
        {
            if (num.Length % i == 0)
            {
                options.Add(i);
            }
        }
        return options;
    }

    static List<string> DivideIntoEqualParts(string numStr, int numParts)
    {
        var parts = new List<string>();
        int partLength = numStr.Length / numParts;
        for (int i = 0; i < numParts; i++)
        {
            parts.Add(numStr.Substring(i * partLength, partLength));
        }
        return parts;
    }


    //:3 :3 :3 :3 :3 :3
    static bool AllPartsAreTheSameTheyreRottingMyBrain(List<string> parts)
    {
        return parts.All(part => part == parts[0]);
    }
}
#endif
