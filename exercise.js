// menghitung luas persegi panjang
length = 20;
width = 10;
const luasPersegiPanjang = length * width;
console.log(
  `luas persegi panjang dengan panjang 20 dan lebar 10 adalah ${luasPersegiPanjang}`
);

// menghitung keliling persegi panjang
const kelilingPersegiPanjang = 2 * (length + width);
console.log(
  `keliling persegi panjang dengan nilai panjang 20 dan lebar 10 adalah ${kelilingPersegiPanjang}`
);

// mencari diameter lingkaran
jariJari = 20;
const diameterLingkaran = 2 * jariJari;
console.log(
  `diameter lingkarang yang diketahui jari-jarinya 20 adalah ${diameterLingkaran}`
);

// mencari keliling lingkaran
const kelilingLingkaran = Math.PI * diameterLingkaran;
console.log(
  `keliling lingkarang yang diketahui diameternya 40 adalah ${kelilingLingkaran}`
);

// mencari luas lingkaran
const luasLingkaran = Math.PI * Math.pow(jariJari);
console.log(
  `luas lingkarang yang diketahui jari-jarinya ${jariJari} adalah ${luasLingkaran}`
);

// mencari sudut segitiga
const sudut1 = 60;
const sudut2 = 40;
const sudut3 = 180 - (sudut1 + sudut2);
console.log(
  `salah satu sudut segitiga yang diketahui sudut 1 60 dan sudut 2 40 adalah ${sudut3}`
);

// mencari jarak hari
const date1 = new Date("12/30/2023");
const date2 = new Date("12/25/2023");
const diffDays = Math.abs(date2 - date1) / (24 * 3600 * 1000);
let selisih = () => {
  if (date1 > date2) {
    console.log("sesudah");
  } else {
    console.log("sebelum");
  }
  // return selisih;
};
// selisih();

console.log(
  `selisih hari antara ${date1.getDate()}-${date1.getMonth()}-${date1.getFullYear()} dan ${date2.getDate()}-${date2.getMonth()}-${date2.getFullYear()} adalah ${diffDays.selisih()} hari`
);

// konversi hari ke tahun, bulan dan hari
const numberOfDays = 600;
const years = Math.round(numberOfDays / 365);
const month = Math.round((numberOfDays % 365) / 30);
const days = Math.round((numberOfDays % 365) % 30);
// console.log(
//   `Konversi dari ${numberOfDays} Hari adalah ${years} Tahun ${month} Bulan ${days} Hari`
// );
