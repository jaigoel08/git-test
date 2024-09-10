// script.js
const studentLogin = document.getElementById('student-login');
const facultyLogin = document.getElementById('faculty-login');
const managementLogin = document.getElementById('management-login');
const loginForm = document.getElementById('login-form');
const reportPortal = document.getElementById('report-portal');

// User roles and passwords (for demonstration purposes only)
const users = {
  student: { password: 'student123' },
  faculty: { password: 'faculty123' },
  management: { password: 'management123' }
};

studentLogin.addEventListener('click', () => {
  loginForm.style.display = 'block';
  document.getElementById('username').value = 'student';
});

facultyLogin.addEventListener('click', () => {
  loginForm.style.display = 'block';
  document.getElementById('username').value = 'faculty';
});

managementLogin.addEventListener('click', () => {
  loginForm.style.display = 'block';
  document.getElementById('username').value = 'management';
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic login logic
  if (users[username] && users[username].password === password) {
    loginForm.style.display = 'none';
    reportPortal.style.display = 'block';

    // Display report portal content based on user role
    if (username === 'student') {
      reportPortal.innerHTML = '<h1>Student Report Portal</h1>';
    } else if (username === 'faculty') {
      reportPortal.innerHTML = '<h1>Faculty Report Portal</h1>';
    } else if (username === 'management') {
      reportPortal.innerHTML = '<h1>Management Report Portal</h1>';
    }
  } else {
    alert('Invalid username or password');
  }
});

