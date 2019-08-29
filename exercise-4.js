var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data) {
    data.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    data.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(`["${data[0]}", "${data[1]}", "${data[2]}", "${data[3]}", "${data[4]}", "${data[5]}"]`);
    var splitDate = data[3].split("/");
    var splitDateToSort = data[3].split("/");
    var month = splitDate[1];
    switch (month) {
        case '01':
            month = 'Januari';
            break;
        case '02':
            month = 'Februari';
            break;
        case '03':
            month = 'Maret';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'Mei';
            break;
        case '06':
            month = 'Juni';
            break;
        case '07':
            month = 'Juli';
            break;
        case '08':
            month = 'Agustus';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'Oktober';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'Desember';
            break;
        default:
            month = false;
            break;
    }
    console.log(month);
    var sortedNumDescendDate = splitDateToSort.sort(function(a, b) { return b - a }); // numeric descending sort
    console.log(sortedNumDescendDate);
    var newJoinDate = splitDate.join("-");
    console.log(newJoinDate);
    var nama = data[1];
    var slicedName = nama.slice(0, 14);
    console.log(slicedName);
}

dataHandling2(input);