// Fungsi untuk memfilter dan menampilkan elemen berdasarkan kategori
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery-column");

  // Jika kategori adalah "all", atur menjadi string kosong untuk menampilkan semua elemen
  if (c == "all") c = "";

  // Hapus class "show" dari semua elemen
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
  }

  // Tambahkan class "show" pada elemen yang sesuai dengan kategori yang dipilih
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) > -1) {
      addClass(x[i], "show");
    }
  }
}

// Fungsi untuk menambahkan class pada elemen
function addClass(element, name) {
  var classes = element.className.split(" ");

  // Tambahkan class baru jika belum ada
  if (classes.indexOf(name) === -1) {
    element.className += " " + name;
  }
}

// Fungsi untuk menghapus class dari elemen
function removeClass(element, name) {
  var classes = element.className.split(" ");

  // Hapus class yang sesuai
  while (classes.indexOf(name) > -1) {
    classes.splice(classes.indexOf(name), 1);
  }

  element.className = classes.join(" ");
}

// Tambahkan class "active" pada tombol yang sedang aktif (menyorotnya)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    // Hapus class "active" dari tombol yang lain
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    // Tambahkan class "active" pada tombol yang diklik
    this.className += " active";
  });
}

// Setel filter awal menjadi "all"
filterSelection("all");






// Fungsi untuk mengirim email
function view() {
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Contoh tindakan sederhana, menampilkan dialog pesan dengan teks "Email berhasil dikirim!"
  showMessageDialog("Email berhasil dikirim!");
}

// Fungsi untuk menampilkan dialog pesan
function showMessageDialog(message) {
  var overlay = document.getElementById("overlay");
  var popup = document.getElementById("popup");
  var popupMessage = document.getElementById("popup-message");

  // Setel teks pesan
  popupMessage.textContent = message;

  // Tampilkan overlay dan popup
  overlay.style.display = "block";
  popup.style.display = "block";
}

// Fungsi untuk menutup popup
function closePopup() {
  var overlay = document.getElementById("overlay");
  var popup = document.getElementById("popup");

  // Sembunyikan overlay dan popup
  overlay.style.display = "none";
  popup.style.display = "none";
}

// Event listener untuk tombol "close-popup" yang memanggil fungsi closePopup() saat diklik
document.getElementById("close-popup").addEventListener("click", function () {
  closePopup();
});

// Event listener untuk event "scroll" yang menampilkan atau menyembunyikan tombol 
// "scroll-to-top" berdasarkan posisi scroll
window.addEventListener("scroll", function () {
  var scrollToTopButton = document.getElementById("scroll-to-top");

  // Jika posisi scroll melebihi 100, tampilkan tombol "scroll-to-top", 
  // sebaliknya sembunyikan
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Event listener untuk tombol "scroll-to-top" yang akan melakukan scroll ke atas halaman 
// dengan animasi "smooth"
document.getElementById("scroll-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
