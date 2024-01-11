function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery-column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

filterSelection("all");

function sendEmail() {
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Lakukan operasi pengiriman pesan di sini, seperti AJAX request ke backend atau tindakan lainnya

  // Contoh tindakan sederhana, menampilkan pesan "Email sent successfully!"
  showMessageDialog("Email sent successfully!");
}

function showMessageDialog(message) {
  var overlay = document.getElementById("overlay");
  var popup = document.getElementById("popup");
  var popupMessage = document.getElementById("popup-message");

  popupMessage.textContent = message;
  overlay.style.display = "block";
  popup.style.display = "block";
}

function closePopup() {
  var overlay = document.getElementById("overlay");
  var popup = document.getElementById("popup");

  overlay.style.display = "none";
  popup.style.display = "none";
}

document.getElementById("close-popup").addEventListener("click", function () {
  closePopup();
});

window.addEventListener("scroll", function () {
  var scrollToTopButton = document.getElementById("scroll-to-top");
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

document.getElementById("scroll-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
