function luduGame (min , max){
    return Math.floor(Math.random() * (max - min + 1 )) + min;
};

const students =["Emtiaz", "Hasan","Rahim", "Suma", "Muna","Alif","Zion", "Sunio", "Amelia","Ethan ", "Lucas ", "Emma ","Logan ", "Owen ", "Stella ","Sebastian ","Alexander" ] ;

document.getElementById('alphabetically').innerHTML = students;

students.sort();

document.getElementById('alphabetically2').innerHTML = students ;