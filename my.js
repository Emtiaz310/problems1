// 1. কিভাবে আমরা এলোমেলোভাবে লুডোতে 1 - 6 প্রিন্ট করব? 
function luduGame (min , max){
    return Math.floor(Math.random() * (max - min + 1 )) + min;
};
console.log(luduGame(1, 6));

// 2.  প্রত্যেকের নাম বর্ণানুক্রমিকভাবে সাজান ?

const students =["Emtiaz", "Hasan","Rahim", "Suma", "Muna","Alif","Zion", "Sunio", "Amelia","Ethan ", "Lucas ", "Emma ","Logan ", "Owen ", "Stella ","Sebastian ","Alexander" ] ;
console.log(students.sort());

// 3.  ক্লাস রোলকে আরোহী ক্রমে সাজান? 

const points = [ 7,3,1,8,2,6,9,4,10,5] ;
points.sort(function(a,b){
    return a- b ;
});
console.log(points);

// 4. কোনো একটা সাল লিপ ইয়ার নাকি তা বার করতে পারি কিভাবে ?

function isLeapYear(year) {
    if( year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
        console.log(`${year} is a leap year .`);
    }
    else {
        console.log(`${year} is not a leap year .`);
    }
};

isLeapYear(2026);
isLeapYear(2028);

//5.  কোন বাক্যে কতটি স্বরবর্ণ আছে তা কিভাবে নির্ণয় করবো ? 

const vowel =[ "a","e","i","o","u","A","E","I","O","U"];

function countVowels(sentence){
    let count = 0 ;
    const letters = Array.from (sentence);
    letters.forEach(function (value) {
        if(vowel.includes(value)){
            count++ ;
        }
    });

    return count ;
}

console.log(countVowels("I love Bangladesh. I live in Rangpur City . Our Country is very beautiful ."));
