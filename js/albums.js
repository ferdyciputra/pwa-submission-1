function showAlbums() {
    const albums = {
        'tahun': [
            '1990', '1991', '1994', '1995', '1997', '2000', '2004', '2009', '2012', '2014', '2016', '2020'
        ],
        'judul': [
            '39/Smooth', 'Kerplunk', 'Dookie', 'Insomniac', 'nimrod', 'Warning:', 'American Idiot', '21st Century Breakdown', '¡Uno! ¡DOs! ¡Tre!', 'Demolicious', 'Revolution Radio', 'Father of All'
        ]
    };
    if (Object.keys(albums).length === 0 && albums.constructor === Object) {
        //Jika object albums tidak memiliki data
        let albumList = document.querySelector('#albums-list');
        let row = document.createElement('tr');

        row.innerHTML = "<td>No Data Available</td>";
        row.innerHTML += "<td>No Data Available</td>";
        albumList.appendChild(row);
    } else {
        for (let index = 0; index < albums['tahun'].length; index++) {
            //menampilkan data albums ke table
            let albumList = document.querySelector('#albums-list');
            let row = document.createElement('tr');

            row.innerHTML = "<td>" + albums['tahun'][index] + "</td>";
            row.innerHTML += "<td>" + albums['judul'][index] + "</td>";
            albumList.appendChild(row);
        }
    }
}