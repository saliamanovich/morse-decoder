const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const SPACE = '**********';
let copyStrEnter = expr;
let lengthStr = expr.length;
let iteration = lengthStr/10;
let counter = 10;
let counterEnd = 0;
let mas;
let newMassiv = [];
 
for (let i=0; i<iteration; i++){
 
let strSubstring = copyStrEnter.substring(lengthStr-counter, lengthStr-counterEnd);
counter+=10;
counterEnd +=10;
mas=strSubstring.split();
newMassiv.unshift(mas);
}
 
let masDecoder = newMassiv.map((num) => {
let masCoder = num.join('');
let indexNumberOne = masCoder.indexOf('1');

let newMassivNumbers = masCoder.split('').slice(indexNumberOne);
let masResult = [];

for (let i=1; i<newMassivNumbers.length; i++){
if (newMassivNumbers[i]==='1'){
masResult.push('-');
i++;
}
else {
masResult.push('.');
i++;
}
}
 
 
 
return masResult.join('');
})
let result = masDecoder.map((num2) => {
if (Boolean(num2)){
for (let key in MORSE_TABLE){
if (num2===key){
return MORSE_TABLE[key];
}
}
}
else {
return ' ';
}
 
 
})
 
return result.join('');
    
   
}

module.exports = {
    decode
}