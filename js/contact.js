// Ambil elemen form dari HTML
const contactForm = document.getElementById('contactForm'); // Menangkap form berdasarkan ID

// Tambahkan event listener saat form di-submit
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form terkirim secara default (tanpa reload halaman)

    // Ambil nilai dari input
    const name = document.getElementById('name').value.trim(); // Ambil nilai nama
    const email = document.getElementById('email').value.trim(); // Ambil nilai email
    const message = document.getElementById('message').value.trim(); // Ambil nilai pesan

    // Validasi: pastikan semua terisi
    if (name === '' || email === '' || message === '') {
        alert('Semua field harus diisi!'); // Tampilkan peringatan
        return; // Hentikan proses
    }

    // Validasi: format email sederhana
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Pola regex email
    if (!email.match(emailPattern)) {
        alert('Format email tidak valid!'); // Peringatan format salah
        return; // Hentikan proses
    }

    // Jika semua valid
    alert('Pesan berhasil dikirim!\n\nNama: ' + name + '\nEmail: ' + email + '\nPesan: ' + message);

    // Reset form
    contactForm.reset(); // Mengosongkan semua input
});



// === Navbar toggle ===
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("navbarToggle"); // tombol hamburger
  const navMenu = document.getElementById("navbarNavAltMarkup"); // menu nav

  toggleBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show"); // tambahkan/hapus class show
  });
});
