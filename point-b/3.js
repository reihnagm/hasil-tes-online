const array = [20, 10, 100, 30, 15, 5];
let index = 1;
for (let i = 0; i < array.length; i++) {
    const sort_dari_kecil_terbesar = array.sort(function(a, b){return a - b}) // urutkan data dari terkecil sampai terbesar
    if(i === 1) {
        sort_dari_kecil_terbesar.splice(i, 1)
    } // hapus nilai urutan kedua
    if( i === 4) {
        sort_dari_kecil_terbesar[i] += 120
    } // tambah nilai 120 pada urutan terahkir
    const result = `${index++} ${sort_dari_kecil_terbesar[i]}`
    console.log(`${result}`)
}
