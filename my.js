function luduGame (min , max){
    return Math.floor(Math.random() * (max - min + 1 )) + min;
};
console.log(luduGame(1, 6));

const students =["Emtiaz", "Hasan","Rahim", "Suma", "Muna","Alif","Zion", "Sunio", "Amelia","Ethan ", "Lucas ", "Emma ","Logan ", "Owen ", "Stella ","Sebastian ","Alexander" ] ;
console.log(students.sort());