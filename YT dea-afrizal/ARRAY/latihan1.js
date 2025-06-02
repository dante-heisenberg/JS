// LATIHAN BUAH
const buah = ['apel', 'jeruk', 'mangga', 'pisang', 'anggur'];

// check apakah 'jeruk' ada di dalam array buah
const adaJeruk = buah.includes('jeruk');
console.log('Apakah jeruk ada di dalam array buah? ' + adaJeruk);

// check apakah 'durian' ada di dalam array buah
const adaDurian = buah.includes('durian');     
console.log('Apakah durian ada di dalam array buah? ' + adaDurian);

// mengetahui posisi 'mangga' dalam array buah
const posisiMangga = buah.indexOf('mangga');
console.log('Posisi mangga dalam array buah adalah: ' + posisiMangga);

// mengetahui buah apa setelah jeruk
const posisiJeruk = buah.indexOf('jeruk');
const buahSetelahJeruk = buah[posisiJeruk + 1];
console.log('Buah setelah jeruk adalah: ' + buahSetelahJeruk);
//     mengetahui buah apa sebelum jeruk
const buahSebelumJeruk = posisiJeruk > 0 ? buah[posisiJeruk - 1] : 'Tidak ada buah sebelum jeruk';
console.log('Buah sebelum jeruk adalah: ' + buahSebelumJeruk);

// mengetahui buah pertama
const buahPertama = buah.shift();
console.log('Buah pertama yang diambil adalah: ' + buahPertama);
// mengetahui buah terakhir
const buahTerakhir = buah.pop();
console.log('Buah terakhir yang diambil adalah: ' + buahTerakhir);