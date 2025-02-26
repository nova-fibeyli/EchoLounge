document.addEventListener("DOMContentLoaded", function () {
    async function loginUser() {
        const email = document.querySelector(".input-field[type='email']").value;
        const password = document.querySelector(".input-field[type='password']").value;
    
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
          alert("✅ Регистрация успешна!");
          localStorage.setItem("token", data.token);
          window.location.href = "ForumPage/ForumPage.html";
        } else {
          alert("❌ Ошибка: " + data.error);
        }
    }
    window.loginUser = loginUser;
})