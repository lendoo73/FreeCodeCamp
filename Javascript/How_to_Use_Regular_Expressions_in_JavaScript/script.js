// https://www.freecodecamp.org/news/regular-expressions-for-beginners/
function isPatternSwitch(userInput) {
    if (typeof userInput !== 'string' || userInput.length !== 12) {
        return false;
    }
    for (let i = 0; i < userInput.length; i++) {
        let c = userInput[i];
        switch (i) {
            case 0:
            case 1:
            case 2:
            case 4:
            case 5:
            case 6:
            case 8:
            case 9:
            case 10:
            case 11:
                if (c < 0 || c > 9) return false;
                break;
            case 3:
            case 7:
                if (c !== '-') return false;
                break;
        }
    }
    return true;
}

function isPatternRegex(userInput) {
    return /^\d{3}-\d{3}-\d{4}$/.test(userInput);
}

const regExpStr = 'Hello world! hello there';

// How to Create A Regular Expression (literal)
const regExpLiteral = /Hello/gi;
const result = regExpStr.match(regExpLiteral);
console.log(regExpStr.match(regExpLiteral));

// How to use a regex constructor:
// Syntax: RegExp(pattern [, flags])
const regExpConstructor = new RegExp('xyz', 'g'); // With flag -g
const str = 'xyz xyz';

console.log(str.match(regExpConstructor));

// const pattern = prompt('Enter a pattern'); // Suppose the user enters 'xyz'
// const regExpConst = new RegExp(`${pattern}`, 'gi');

// Anchors and Boundaries:
// ^ matches the start of a line and anchors a literal at the beginning of that line.
const regexPattern1 = /^cat/;
console.log(regexPattern1.test('cat and mouse')); // Output: true
console.log(regexPattern1.test('The cat and mouse')); // Output: false because the line does not start with cat

// Without the ^ in the pattern, the output will return true
// because we did not assert a boundary.

const regexPattern2 = /cat/;
console.log(regexPattern2.test('The cat and mouse')); // Output: true

// $ matches the end of a line and anchors a literal at the end of that line.
const regexPattern = /cat$/;
console.log(regexPattern.test('The mouse and the cat')); // Output: true
console.log(regexPattern.test('The cat and mouse')); // Output: false

// \b matches the start or end of a word.
// Syntax 1: /\b.../ where .... represents a word.
// Search for a word that begins with the pattern ward
const regexPatternb = /\bward/gi;
const text1 = 'backward Wardrobe Ward';
console.log(text1.match(regexPattern1)); // Output: ['Ward', 'Ward']

// Syntax 2: /...\b/
// Search for a word that ends with the pattern ward
const regexPatternb2 = /ward\b/gi;
const text2 = 'backward Wardrobe Ward';
console.log(text2.match(regexPattern2)); // Output: ['ward', 'Ward']

// Syntax 3: /\b....\b/
// Search for a stand-alone word that begins and end with the pattern ward
const regexPattern3 = /\bward\b/gi;
const text3 = 'backward Wardrobe Ward';
console.log(text3.match(regexPattern3)); // Output: ['Ward']

/*
Shortcodes for Other Metacharacters:
    \d – matches any decimal digit and is shorthand for [0-9].
    \w – matches any alphanumeric character which could be a letter, a digit, or an underscore. \w is shorthand for [A-Za-z0-9_].
    \s – matches any white space character.
    \D – matches any non-digit and is the same as [^0-9.]
    \W – matches any non-word (that is non-alphanumeric) character and is shorthand for  [^A-Za-z0-9_].
    \S – matches a non-white space character.
    . – matches any character.
*/

// Character Class
// Find and match a word with two alternative spellings
const regexPatternChar = /ambi[ea]nce/;
console.log(regexPatternChar.test('ambiance')); // Output: true
console.log(regexPatternChar.test('ambience')); // Output: true

// The regex pattern interprets as:  find a followed by m, then b,
// then i, then either e or a, then n, then c, and then e.

// Negated Character Class
// If you add a caret symbol inside a character class like this [^...], it will match any character that is not listed inside the square brackets. 
const regexNegate = /[^bc]at/;
console.log(regexNegate.test('bat')); // Output: false
console.log(regexNegate.test('cat')); // Output: false
console.log(regexNegate.test('mat')); // Output: true

// Range
// A hyphen - indicates range when used inside a character class. 
// Suppose you want to match a set of numbers, say [0123456789], or a set of characters, say[abcdefg]. 
// You can write it as a range like this, [0-9] and [a-g], respectively.

// Alternation
// The pipe symbol means ‘or’.
// (x|y|z)a will match xa or ya, or za.
// Without the parentheses, x|y|za  would mean x or y or za.
const regexAlternation = /(Bob|George)\sClan/;
console.log(regexAlternation.test('Bob Clan')); // Output: true
console.log(regexAlternation.test('George Clan')); // Output: true

// Quantifiers and Greediness
// + will match any character it is appended to if the character appears at least once. 
const regexPlus = /hel+o/;
console.log(regexPlus.test('helo'));          // Output:true
console.log(regexPlus.test('hellllllllllo')); // Output: true
console.log(regexPlus.test('heo'));           // Output: false

// * to match any number of that character including none.
const regexStar = /hel*o/;
console.log(regexStar.test('helo'));    // Output: true
console.log(regexStar.test('hellllo')); // Output: true
console.log(regexStar.test('heo'));     // Output: true
// Here the * matches 0 or any number of 'l'

// ? implies "optional". When you append it to a character, it means the character may or may not appear. 
const regexQuestion = /colou?r/;
console.log(regexQuestion.test('color'));  // Output: true
console.log(regexQuestion.test('colour')); // Output: true
// The ? after the character u makes u optional

/*
{N}, when appended to a character or character class, specifies how many of the character we want. For example /\d{3}/ means match three consecutive digits.
{N,M} is called the interval quantifier and is used to specify a range for the minimum and maximum possible match. For example /\d{3, 6}/ means match a minimum of 3 and a maximum of 6 consecutive digits.
{N, } denotes an open-ended range. For example /\d{3, }/ means match any 3 or more consecutive digits.
*/

// Greediness in Regex
// All quantifiers by default are greedy. This means that they will try to match all possible characters.
// To remove this default state and make them non-greedy, you append a ? to the operator like this +?, *?, {N}?, {N,M}?.....and so on.

// Grouping and Backreferencing
const regExp = /abc+(xyz+)+/i;
console.log(regExp.test('abcxyzzzzXYZ')); // Output: true
// The first + matches the c of abc, the second + matches the z of xyz, and the third + matches the subexpression xyz, which will match if the sequence repeats.

// Backreferencing allows you to match a new pattern that is the same as a previously matched pattern in a regular expression. You also use parentheses for backreferencing because it can remember a previously matched subexpression it encloses (that is, the captured group).

// (x) matches x and remembers the match.
const regExpBackreferencing = /(abc)bar\1/i;
// abc is backreferenced and is anchored at the same position as \1
console.log(regExpBackreferencing.test('abcbarAbc')); // Output: true
console.log(regExpBackreferencing.test('abcbar')); // Output: false

// (?:x) matches x but does not recall the match. 
const regExpNotRecall = /(?:abc)bar\1/i;
console.log(regExpNotRecall.test('abcbarabc')); // Output: false
console.log(regExpNotRecall.test('abcbar\1')); // Output: true

// Regular Expression Methods
// The test() method 
// compares the target text with the regex pattern and returns a boolean value accordingly. If there is a match, it returns true, otherwise it returns false.
const regExpTest = /abc/i;
console.log(regExpTest.test('abcdef')); // Output: true
console.log(regExpTest.test('bcadef')); // Output: false

// The exec() method
// The exec() method compares the target text with the regex pattern. If there's a match, it returns an array with the match – otherwise it returns null.
const regExpExec = /abc/i;
console.log(regExpExec.exec('abcdef'));
// Output: ['abc', index: 0, input: 'abcdef', groups: undefined]
console.log(regExpExec.exec('bcadef'));
// Output: null

// Also, there are string methods that accept regular expressions as a parameter like match(), replace(), replaceAll(), matchAll(), search(), and split().

// Regex Examples
// How to use a regex pattern to match an email address:
const regexPattern = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
console.log(regexPattern.test('abcdef123@gmailcom'));
// Output: false, missing dot
console.log(regexPattern.test('abcdef123gmail.'));
// Output: false, missing end literal 'com'
console.log(regexPattern.test('abcdef123@gmail.com'));
// Output: true, the input matches the pattern correctly
/*
/ represents the start of the regular expression pattern.
^ checks for the start of a line with the characters in the character class.
[(\w\d\W)+ ]+ matches any word, digit and non-word character in the character class at least once. Notice how the parentheses were used to group the characters before adding the quantifier. This is same as this [\w+\d+\W+]+ .
@ matches the literal @ in the email format.
[\w+]+ matches any word character in this character class at least once.
\. escapes the dot so it appears as a literal character.
[\w+]+$ matches any word character in this class. Also this character class is anchored at the end of the line.
/ - ends the pattern
*/

// how to match a URL with format http://example.com or https://www.example.com:
const pattern = /^[https?]+:\/\/((w{3}.)?[\w+]+)\.[\w+]+$/i;
console.log(pattern.test('https://www.example.com'));
// Output: true
console.log(pattern.test('http://example.com'));
// Output: true
console.log(pattern.test('https://example'));
// Output: false
/*
/...../ represents the start and end of the regex pattern
^ asserts for the start of the line
[https?]+ matches the characters listed at least once, however ? makes 's'  optional.
: matches a literal semi-colon.
\/\/ escapes the two forward slashes.
(w{3}.)? matches the character w 3 times and the dot that follows immediately. However, this group is optional.
[\w+]+ matches character in this class at least once.
\. escapes the dot
[\w+]+$ matches any word character in this class. Also this character class is anchored at the end of the line.
*/