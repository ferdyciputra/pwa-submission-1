document.addEventListener("DOMContentLoaded", function() {
    // Active sidebar nav
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();

    function loadNav() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status != 200) return;

                // Muat daftar tautan menu
                document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
                    elm.innerHTML = xhttp.responseText;
                });

                // Daftarkan event listener untuk setiap tautan menu
                document.querySelectorAll(".sidenav a, .topnav a").forEach(function(elm) {
                    elm.addEventListener("click", function(event) {
                        //Tutup sidenav
                        var sidenav = document.querySelector(".sidenav");
                        M.Sidenav.getInstance(sidenav).close();

                        // Muat konten halaman yang dipanggil
                        page = event.target.getAttribute("href").substr(1);
                        loadPage(page);

                    });
                });
            }
        };
        xhttp.open("GET", "nav.html", true);
        xhttp.send();
    }

    // Load Page Content
    var page = window.location.hash.substr(1);
    if (page == "") page = "home";
    loadPage(page);

    function loadPage() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                var content = document.querySelector("#body-content");
                if (this.status == 200) {
                    content.innerHTML = xhttp.responseText;
                } else if (this.status == 404) {
                    content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
                } else {
                    content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
                }
            }
        };
        xhttp.open("GET", "pages/" + page + ".html", true);
        xhttp.send();
    }
})

const topNav = document.getElementById("navbar");
const sideNav = document.getElementById("nav-mobile");
let menuWeb = topNav.getElementsByClassName("menu");
let menuMobile = sideNav.getElementsByClassName("menu");

function activeNavMobile() {

    for (let i = 0; i < menuMobile.length; i++) {
        menuMobile[i].addEventListener("click", function() {
            // remove all class active
            for (let index = 0; index < menuMobile.length; index++) {
                menuMobile[index].classList.remove("active")
            }

            let current = document.getElementsByClassName("active");
            console.log(current);
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}

function activeNav() {
    for (let i = 0; i < menuWeb.length; i++) {
        menuWeb[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            console.log(current);
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}

function loadProfile() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            var content = document.querySelector("#body-content");
            if (this.status == 200) {
                content.innerHTML = xhttp.responseText;
            } else if (this.status == 404) {
                content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
            } else {
                content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
            }
        }
    };
    xhttp.open("GET", "pages/profile.html", true);
    xhttp.send();

    // remove all class active
    for (let i = 0; i < menuWeb.length; i++) {
        menuWeb[i].classList.remove("active")
    }
    for (let index = 0; index < menuMobile.length; index++) {
        menuMobile[index].classList.remove("active")
    }
    // add class active menu profile
    menuWeb[1].classList.add('active')
    menuMobile[1].classList.add('active')
}