document.getElementById('lawForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // You can handle form submission here, like sending data to a server
    
    // For demonstration purposes, let's just log the form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    console.log(formObject);
  });
  