document.getElementById('contactForm').addEventListener('submit', function(e) {
  if (!this.checkValidity()) {
    e.preventDefault();
    alert("Please fill out all required fields correctly.");
  }
});