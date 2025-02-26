document.addEventListener("DOMContentLoaded", function () {
    async function registerUser() {
      const username = document.querySelector(".input-field[type='text']").value;
      const email = document.querySelector(".input-field[type='email']").value;
      const password = document.querySelector(".input-field[type='password']").value;
  
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("✅ Регистрация успешна!");
        window.location.href = "WelcomePage.html";
      } else {
        alert("❌ Ошибка: " + data.error);
      }
    }
  
    window.registerUser = registerUser;
  });
  