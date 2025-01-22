// Optional script for interactivity
/*document.querySelector('.btn').addEventListener('click', function() {
    alert('Thank you for reaching out!');
});*/
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Change 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' as necessary
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
      function () {
        // Show success message
        document.getElementById("success-message").style.display = "block";

        // Optionally, reset the form
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Failed to send message: " + JSON.stringify(error));
      }
    );
  });

document.querySelector('.menu-toggle').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
});
