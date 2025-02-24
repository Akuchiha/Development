function handleSubmit() {
    const name = document.getElementById('Name').value;
    const message = document.getElementById('message').value;

  
    console.log('Name:', name);
    console.log('Message:', message);

    
    document.getElementById('contactForm').reset();
}
