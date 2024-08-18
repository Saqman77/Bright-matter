document.getElementById('contactForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  try {
    const response = await fetch('/api/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken')  // CSRF token for Django
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    document.getElementById('responseMessage').textContent = result.message;
  } catch (error) {
    document.getElementById('responseMessage').textContent = 'Something went wrong. Please try again.';
  }
});

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}