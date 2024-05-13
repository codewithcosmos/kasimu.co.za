function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -26.130, lng: 28.080 },
      zoom: 15,
    });
    const marker = new google.maps.Marker({
      position: { lat: -26.130, lng: 28.080 },
      map,
      title: "CosLife M"
    });
  }

    // Send email using EmailJS
    // emailjs.send("service_your_service_id", "template_your_template_id", {
    //   name: document.getElementById('name').value,
    //   email: document.getElementById('email').value,
    // })
    // .then(function(response) {
    //   alert('Email sent successfully!');
    //   $('#contactModal').modal('hide'); // Hide the modal after sending the email
    // }, function(error) {
    //   console.log('Error sending email:', error);
    //   alert('Error sending email. Please try again later.');
    // });
  