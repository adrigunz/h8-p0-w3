//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(data) {
    for (i = 0; i < data.length; i++) { // i is outer array
        for (j = 0; j < data[i].length; j++) { // j is inner array
            var kota;
            if (j === 0) {
                console.log(`Nomor ID: ${data[i][0]}`);
            } else if (j === 1) {
                console.log(`Nama Lengkap: ${data[i][1]}`);
            } else if (j === 2) {
                kota = input[i][2];
            } else if (j === 3) {
                console.log(`TTL: ${kota} ${data[i][3]}`);
            } else if (j === 4) {
                console.log(`Hobi: ${data[i][4]}`);
                console.log(' ');
            }
        }
    }
}

dataHandling(input);