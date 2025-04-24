

// Function to handle the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission


    // Get the values from the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    // Here you can add code to send the data to a server or process it as needed
    // For demonstration, we'll just log it to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);


    // Show an alert to the user
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');


    // Clear the form fields
    document.getElementById('contact-form').reset();
});

