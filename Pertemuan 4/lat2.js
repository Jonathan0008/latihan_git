// buatlah fungsi yg menerima 1 input atau parameter berupa angka
// dan mengembalikan str apakah angka yg dimasukan adalah
// bilangan positif atau negatif
// buat dengan menggunakan IIFE dan callback funct



const lat2 = (function() {
    return function(number) {
      if (number > 0) {
        return "Bilangan positif";
      } else if (number < 0) {
        return "Bilangan negatif";
      } else {
        return "Nol";
      }
    };
  })();
  
  const inputNumber = 5;
  const result = lat2(inputNumber);
  console.log(result);

// function lat2(number, callback) {
//     if (number > 0) {
//       callback("Bilangan positif");
//     } else if (number < 0) {
//       callback("Bilangan negatif");
//     } else {
//       callback("Nol");
//     }
//   }
  
//   function hasil(result) {
//     console.log(result);
//   }
  
//   const inputNumber = -5;
//   lat2(inputNumber, hasil);
  