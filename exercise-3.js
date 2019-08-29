//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

for (i = 0; i < input.length; i++) { // i is outer array
    for (j = 0; j < input[i].length; j++) { // j is inner array
        var kota;
        if (j === 0) {
            console.log(`Nomor ID: ${input[i][0]}`);
        } else if (j === 1) {
            console.log(`Nama Lengkap: ${input[i][1]}`);
        } else if (j === 2) {
            kota = input[i][2];
        } else if (j === 3) {
            console.log(`TTL: ${kota} ${input[i][3]}`);
        } else if (j === 4) {
            console.log(`Hobi: ${input[i][4]}`);
            console.log(' ');
        }
    }
}