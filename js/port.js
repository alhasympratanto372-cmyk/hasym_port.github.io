// === Navbar toggle dengan JS murni ===
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("navbarToggle"); // tombol hamburger
  const navMenu = document.getElementById("navbarNavAltMarkup"); // menu nav

  toggleBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show"); // tambahkan/hapus class show
  });
});