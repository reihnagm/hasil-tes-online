let date = new Date();
let hari = date.setDate(23);
let bulan = date.setMonth(11 - 1);
let year = date.setFullYear(2020);
let enam_bulan_kedepan = new Date(date.getFullYear(), date.getMonth() + 6, date.getDate()).toISOString().split('T')[0];
let get_tahun_enam_bulan_kedepan = enam_bulan_kedepan.split('-')[0]
let hasil_umur = get_tahun_enam_bulan_kedepan - 1999;
let hasil_tanggal_awal = date.toISOString().split('T')[0];
const convert_tanggal = hasil_tanggal_awal => {
    let array = hasil_tanggal_awal.split('-');
    let bulan = array[1];
    let tahun = array[0].substr(2,2);
    let hari = array[2];
    return `${bulan}-${tahun}-${hari}`
}
let hasil_convert_tanggal_awal = convert_tanggal(hasil_tanggal_awal);
let array = hasil_convert_tanggal_awal.split('-');
console.log(
    ` Tanggal awal: ${hasil_tanggal_awal} \n Hasil convert tanggal awal: ${hasil_convert_tanggal_awal} \n Hasil 6 bulan kedepan: ${enam_bulan_kedepan} \n umur saya jika dihitung pada tanggal tersebut ${hasil_umur} tahun`
)
