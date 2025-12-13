# Advent of Code 2025

Solutions for Advent of Code 2025 puzzles in JavaScript. Some days may also include C# implementations.

## Usage

Run JavaScript solutions with Node.js:

```bash
node "Day 1/day1-part1.js"
node "Day 2/day2-part2.js"
```

Run C# solutions with .NET:

```bash
cd "Day X/cSharp"
dotnet run
```

To switch between part 1 and part 2, edit the `cSharpDayX.csproj` file and change the `DefineConstants` value:

- `PART1` for part 1
- `PART2` for part 2

Each day folder contains:

- `dayX-part1.js` / `dayX-part2.js` - JavaScript solution files
- `cSharp/` - C# solution files (if available)
- `fetchInput.js` - Fetches puzzle input from adventofcode.com
- `input-dayX.md` - Static puzzle input
- `puzzle-dayX.md` - Puzzle descriptions
