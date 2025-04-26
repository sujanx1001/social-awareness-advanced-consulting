let users = [
  {
    email: 'nabinadhk11@gmail.com',
    password: 'password',
    name: 'Nabin Adhikari',
  },
];

let currentUser = null;

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        currentUser = data.user;
        showAccountDetails(currentUser);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function submitCampaign(event) {
  
  event.preventDefault();
  const businessName = document.querySelector('input[name="business-name"]').value;
  const description = document.querySelector('textarea[name="business-description"]').value;
  const contactInfo = document.querySelector('input[name="contact-info"]').value;

  fetch('http://localhost:3000/submit-campaign', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ businessName, description, contactInfo }),
  })
    .then((response) => response.json())
    .then((data) => 
          {
      alert(data.message);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}