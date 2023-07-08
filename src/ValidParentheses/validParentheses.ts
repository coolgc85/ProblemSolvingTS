function isValid(s: string): boolean {
//()[]{} 

//validating lenght
if(s.length % 2 !== 0)
    return false

//validating pattern
const pattern :RegExp = /^[(){}\[\]]+$/;
if(!pattern.test(s)){
    return false
}

const openSymbols : string[] = ["(", "{", "[" ];
const symbolsStack :string[] = [];

const closingSymbols : Map<string,string> = new Map();
closingSymbols.set(")","(");
closingSymbols.set("}","{"); 
closingSymbols.set("]","["); 

for (const e of Array.from(s)) {
    if (openSymbols.indexOf(e) !== -1)
        symbolsStack.push(e);
    else if(symbolsStack[symbolsStack.length - 1] === closingSymbols.get(e))
        symbolsStack.pop();
    else
        return false;
}

return (symbolsStack.length == 0 );

};

console.log(isValid("([}}])"));

 console.log(isValid("()[]{}()"));
//  console.log(isValid("(]"));
// console.log(isValid("({{{{{{{{{}}}}}}}}}]"));
//  console.log(isValid("((()}]"));
// console.log(isValid("{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}"))
// console.log(isValid("(((((((((((((((((((((((((((((((((((((((((((((({{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}))))))))))))))))))))))))))))))))))))))))))))))"));
// console.log(isValid("(((((((((((((((((((((((((((((((((((((((((((((({{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}})))))))))))))))))))))))))))))))))))))))))))))){{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}"));





