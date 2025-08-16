const slider = document.querySelector(".slider");  // Ambil elemen slider
let slides = document.querySelectorAll(".slider img"); // Ambil semua elemen gambar di slider
const slidesPerView = 2; // Jumlah gambar yang ditampilkan sekaligus

// Ambil 2 foto pertama lalu gandakan
const firstClones = Array.from(slides)            // Ubah NodeList menjadi array
  .slice(0, slidesPerView)                        // Ambil 2 elemen pertama
  .map(img => img.cloneNode(true));               // Gandakan elemen tersebut

// Ambil 2 foto terakhir lalu gandakan
const lastClones = Array.from(slides)             // Ubah NodeList menjadi array
  .slice(-slidesPerView)                          // Ambil 2 elemen terakhir
  .map(img => img.cloneNode(true));               // Gandakan elemen tersebut

// Tempel clone pertama di akhir slider
firstClones.forEach(clone => slider.appendChild(clone)); // Tambahkan di belakang

// Tempel clone terakhir di awal slider
lastClones.reverse()                              // Dibalik urutannya agar tampil sesuai
  .forEach(clone => slider.insertBefore(clone, slider.firstChild)); // Tambahkan di depan

// Ambil ulang semua gambar setelah proses cloning
slides = document.querySelectorAll(".slider img"); 

let index = slidesPerView; // Posisi awal (lewat 2 clone pertama)
let totalSlides = slides.length; // Total gambar termasuk clone

// Geser slider ke posisi foto asli pertama
slider.style.transform = `translateX(-${(100 / slidesPerView) * index}%)`;

// Fungsi untuk geser ke slide berikutnya
function slideNext() {
  index++; // Pindah ke index berikutnya
  slider.style.transition = "transform 0.5s ease-in-out"; // Efek animasi geser
  slider.style.transform = `translateX(-${(100 / slidesPerView) * index}%)`; // Geser posisi

  // Jika sudah sampai di clone terakhir
  if (index === totalSlides - slidesPerView) {
    setTimeout(() => { // Tunggu animasi selesai
      slider.style.transition = "none"; // Hilangkan transisi biar lompat nggak kelihatan
      index = slidesPerView; // Reset ke posisi awal foto asli
      slider.style.transform = `translateX(-${(100 / slidesPerView) * index}%)`; // Geser ke awal
    }, 500); // Delay sesuai durasi animasi
  }
}

// Jalankan fungsi geser setiap 3 detik
setInterval(slideNext, 3000);
