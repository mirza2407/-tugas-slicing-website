console.log("Hello, World!");

let namaMahaiswa = "Gavin";
console.log(namaMahaiswa);

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);

let logo = document.getElementById("text-icon");
logo.style.color = "red";
logo.textContent = "PEMROGRAMAN WEB";

let btnUbah = document.getElementById("btn-ubah");
btnUbah.addEventListener("click", function() {
    let welcome = document.querySelector(".header");
    welcome.textContent = "SELAMAT DATANG DI WEBSITE SAYA";
});

// Toggle menu navigasi di mobile (hamburger)
let hamburger = document.getElementById("hamburger");
let navList = document.getElementById("nav-list");

hamburger.addEventListener("click", function() {
    navList.classList.toggle("open");

    let isOpen = navList.classList.contains("open");
    hamburger.setAttribute("aria-expanded", isOpen);
});

// Tutup menu otomatis saat salah satu link diklik (khusus mobile)
navList.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        navList.classList.remove("open");
    });
});

// Tampilkan tahun berjalan di footer secara otomatis
let footerYear = document.getElementById("footer-year");
footerYear.textContent = "© " + new Date().getFullYear() + " Gavin Yudiktio";