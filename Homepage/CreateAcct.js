document.getElementById("create-account-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    alert("Account created successfully!");
    // Further processing, like sending data to a server, would go here.
  });
  