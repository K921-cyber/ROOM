function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create the "mailto" link with pre-filled subject and body
    const mailtoLink = `mailto:devenrawat882@gmail.com?subject=Query from ${name}&body=${encodeURIComponent(message)}`;

    // Open the "mailto" link
    window.location.href = mailtoLink;
}
