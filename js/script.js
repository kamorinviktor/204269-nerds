var link = document.querySelector(".btn-contacts");

      var popup = document.querySelector(".modal-content");
      var close = popup.querySelector(".modal-content-close");

      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=name]");
      var password = popup.querySelector("[name=email]");

      var storage = localStorage.getItem("name");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");

        if (storage) {
          login.value = storage;
          password.focus();
        } else {
          login.focus();
        }

      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function(event) {
        if (!login.value || !password.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
          localStorage.setItem("name", login.value);
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
          }
        }
      });