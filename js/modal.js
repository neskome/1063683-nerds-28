var writeLink = document.querySelector(".button-window");
var writePopup = document.querySelector(".modal-write");
var writeClose = writePopup.querySelector(".modal-close");
var writeForm = writePopup.querySelector(".write-form");
var writeName = writePopup.querySelector(".name-user");
var writeEmail = writePopup.querySelector(".email-user");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

writeLink.addEventListener("click", function () {
    evt.preventDefault();
    writePopup.classList.add("modal-show");
    writeName.focus();
});

if (storage) {
    writeName.value = storage;
    writeEmail.focus();
  } else {
    writeName.focus();
  }
});

writeClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.remove("modal-show");
    writePopup.classList.remove("modal-error");
});

writeForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

writeForm.addEventListener("submit", function (evt) {
    if (!writeName.value || !writeEmail.value) {
      evt.preventDefault();
      writePopup.classList.add("modal-error");
      writePopup.offsetWidth = writePopup.offsetWidth;
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", writeName.value);
      }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writePopup.classList.contains("modal-show")) {
        evt.preventDefault();
        writePopup.classList.remove("modal-show");
        writePopup.classList.remove("modal-error");
      }
    }
  });