
// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();  // Prevent the form from submitting the traditional way

  // Submit the form to Google Forms using iframe
  var iframe = document.getElementById('hidden_iframe');
  this.target = 'hidden_iframe';

  iframe.onload = function () {
    // Once submission is successful, reset the form and show thank you message
    document.getElementById('contactForm').reset(); // Reset the form fields
    document.getElementById('thankYouMessage').style.display = 'block'; // Show thank you message
    setTimeout(function () {
      document.getElementById('thankYouMessage').style.display = 'none'; // Hide message after 5 seconds
    }, 5000);
  };

  // Submit the form
  this.submit();
});