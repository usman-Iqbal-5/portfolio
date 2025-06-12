// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();  

  // Submit the form to Google Forms using iframe
  var iframe = document.getElementById('hidden_iframe');
  this.target = 'hidden_iframe';

  iframe.onload = function () {
  
    document.getElementById('contactForm').reset(); 
    document.getElementById('thankYouMessage').style.display = 'block';
    setTimeout(function () {
      document.getElementById('thankYouMessage').style.display = 'none'; 
    }, 8000);
  };

  // Submit the form
  this.submit();
});


