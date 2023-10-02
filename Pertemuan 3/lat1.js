// buatlah fungsi yg menerima 1 input atau parameter berupa angka
// dan mengembalikan str apakah angka yg dimasukan adalah
// bilangan positif atau negatif

function lat1(angka){
    if (angka <=0) {
        return "bilangan negatif"
    } 
    else {
        return"bilangan positif"
    }
}

let output = lat1(10)
console.log(output)