function handleSubmit(event){
	event.preventDefault();
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const Name = document.getElementById('Name').value;
    const Message = document.getElementById('message').value; 
    
    alert(`Name: ${Name}, Message: ${Message}`);
    
    console.log("contact form");
    console.log("Name",name);
    console.log("Message",message);
});

