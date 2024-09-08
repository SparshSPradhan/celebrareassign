// document.getElementById('loginForm').addEventListener('submit', function (event) {
//   event.preventDefault();

//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   // Validate inputs
//   if (validateEmail(email) && validatePassword(password)) {
//     // Show the animation after successful login
//     document.querySelector('.container').style.display = 'none';
//     document.getElementById('animation-container').style.display = 'flex';
//   } else {
//     alert('Invalid email or password.');
//   }
// });

// function validateEmail(email) {
//   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   return emailPattern.test(email);
// }

// function validatePassword(password) {
//   // A simple password validation that checks if it's at least 6 characters long
//   return password.length >= 6;
// }




document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate email and password (basic validation here)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email !== '' && password !== '') {
        // Redirect to another page (dashboard.html) after successful sign-in
        window.location.href = 'dashboard.html';
    } else {
        alert('Please enter valid credentials.');
    }
});
