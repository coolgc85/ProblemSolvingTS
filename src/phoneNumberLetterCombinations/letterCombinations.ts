let keypadNumbers: Map<string, string> = new Map();
keypadNumbers.set("2", "abc");
keypadNumbers.set("3", "def");
keypadNumbers.set("4", "ghi");
keypadNumbers.set("5", "jkl");
keypadNumbers.set("6", "mno");

function letterCombinations(digits: string): string[] {
    return Array.from(digits)
        .map(digit => keypadNumbers.get(digit))
        .filter(value => value !== undefined) as string[];
};


/*  function generateCombinations(...inputArrays: string[]): string[] {
    
 }; */


let digits: string = "123";
console.log(letterCombinations("1234"));




