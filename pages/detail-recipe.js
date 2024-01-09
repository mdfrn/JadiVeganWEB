// Dapatkan semua elemen bintang di bagian add-review
const addReviewStars = document.querySelectorAll(".add-review .star-rating i");

// Tambahkan event listener pada setiap bintang di bagian add-review
addReviewStars.forEach((star) => {
  star.addEventListener("mouseover", hoverStar);
  star.addEventListener("click", setAddReviewRating);
  star.addEventListener("mouseleave", resetAddReviewRating);
});

// Variabel untuk menyimpan rating yang dipilih di bagian add-review
let selectedRating = 0;

// Fungsi untuk menangani peristiwa hover bintang di bagian add-review
function hoverStar() {
  const rating = parseInt(this.getAttribute("data-value"));

  // Hapus kelas active dari semua bintang di bagian add-review
  addReviewStars.forEach((star) => star.classList.remove("active"));

  // Tambahkan kelas active pada bintang hingga bintang yang sedang dihover di bagian add-review
  for (let i = 0; i < rating; i++) {
    addReviewStars[i].classList.add("active");
  }
}

// Fungsi untuk mengatur rating di bagian add-review
function setAddReviewRating() {
  const rating = parseInt(this.getAttribute("data-value"));

  // Jika rating yang dipilih sudah diatur, hapus kelas active dari bintang setelah yang dipilih
  if (selectedRating > 0) {
    for (let i = selectedRating; i < addReviewStars.length; i++) {
      addReviewStars[i].classList.remove("active");
    }
  }

  // Tambahkan kelas active pada bintang hingga bintang yang dipilih di bagian add-review
  for (let i = 0; i < rating; i++) {
    addReviewStars[i].classList.add("active");
  }

  // Atur rating yang dipilih
  selectedRating = rating;
}

// Fungsi untuk mengatur ulang rating di bagian add-review saat mouse keluar
function resetAddReviewRating() {
  // Jika rating yang dipilih tidak diatur, hapus kelas active dari semua bintang di bagian add-review
  if (selectedRating === 0) {
    addReviewStars.forEach((star) => star.classList.remove("active"));
  }
}

// Ambil tombol Submit, input nama, pewarnaan bintang, dan popup
const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("review-name");
const ratingStars = document.querySelectorAll(".star-rating i");
const reviewText = document.getElementById("review-text");
const popup = document.getElementById("popup");

// Tambahkan event listener ke tombol Submit
submitBtn.addEventListener("click", function (event) {
  // Cek apakah nama telah diisi
  if (nameInput.value.trim() === "") {
    event.preventDefault(); // Mencegah pengiriman form
    alert("Please enter your name."); // Tampilkan pesan kesalahan
    return;
  }

  // Cek apakah ada rating yang dipilih
  let ratingSelected = false;
  ratingStars.forEach((star) => {
    if (star.classList.contains("active")) {
      ratingSelected = true;
    }
  });
  if (!ratingSelected) {
    event.preventDefault(); // Mencegah pengiriman form
    alert("Please select a rating."); // Tampilkan pesan kesalahan
    return;
  }

  // Cek apakah pesan review telah diisi
  if (reviewText.value.trim() === "") {
    event.preventDefault(); // Mencegah pengiriman form
    const confirmation = confirm(
      "You haven't written a review message. Do you want to continue submitting?"
    );
    if (!confirmation) {
      return; // Batalkan pengiriman form
    }
  }

  // Tampilkan popup dengan penundaan
  event.preventDefault(); // Mencegah pengiriman form
  popup.classList.add("show-popup");
  setTimeout(function () {
    popup.classList.remove("show-popup");
  }, 3000); // Sembunyikan popup setelah 3 detik
});
