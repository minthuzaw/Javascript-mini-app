document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form input values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    // Set output values
    document.getElementById("outputFullName").textContent = "Full Name: " + fullName;
    document.getElementById("outputEmail").textContent = "Email: " + email;
    document.getElementById("outputPhone").textContent = "Phone: " + phone;
    document.getElementById("outputAddress").textContent = "Address: " + address;

    // Show generated resume
    document.getElementById("resumeOutput").style.display = "block";
});
