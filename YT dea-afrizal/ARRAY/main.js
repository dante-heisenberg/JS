// ARRAY

// dalam array berisi index dan value, yang dimana index dimulai dari 0 dan array adalah nilai yang kita buat

// cara-cara membuat array
// cara 1
const array = [1, 2, 3, 4, 5]; 
console.log(array);

// cara 2
const array2 = []
array2[0] = 1;
array2[1] = 2;
array2[2] = 3;
array2[3] = 4;
console.log(array2);
// memanggil nilai array
console.log(array2[0]); // memanggil nilai index 0

// cara 3
const array3 = new Array(1,2);  
console.log(array3);
// menghitung panjang array
console.log("Panjang array 1 adalah = " + array.length);