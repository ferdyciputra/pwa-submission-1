function showProfile() {
    const profile = {
        'nama': [
            'Billie Joe Armstrong', 'Mike Dirnt', 'Tre Cool'
        ],
        'image': [
            'armstrong.jpg', 'mike.jpeg', 'tree.jpg'
        ],
        'description': [
            'Billie Joe Armstrong (lahir 17 Februari 1972) adalah penyanyi, penulis lagu, musisi, produser rekaman, dan aktor Amerika. Armstrong berfungsi sebagai vokalis, penulis lagu utama, dan gitaris dari punk rock band yang Green Day.',
            'Michael Ryan Pritchard (lahir 4 Mei 1972), dikenal secara profesional sebagai Mike Dirnt , adalah seorang musisi, penyanyi, dan penulis lagu Amerika. Ia terkenal sebagai co-founder, bassist , backing dan vokalis utama Green Day.',
            'Frank Edwin Wright III (lahir 9 Desember, 1972), yang dikenal profesional sebagai Tre Cool , adalah seorang Amerika musisi, penyanyi, dan penulis lagu, paling dikenal sebagai drummer untuk punk rock band yang Green Day.'
        ]
    }

    for (let index = 0; index < profile['nama'].length; index++) {
        let profileList = document.querySelector('#profile-list');

        profileList.innerHTML += `
        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    <img class="img-card" src="/img/${profile['image'][index]}">
                    <span class="card-title">${profile['nama'][index]}</span>
                </div>
                <div class="card-content">
                    <p>${profile['description'][index]}</p>
                </div>
            </div>
        </div>
        `
    }
}