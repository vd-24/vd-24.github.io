

function send() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "deshmukhjeet6@gmail.com",
      // Password: "zqtlgxhorxphhtwm",
      Password: "284E54559465E47A9D65F5EEA72EBE55BC3D",
      From: email,
      To: 'deshmukhjeet6@gmail.com',
      Subject: subject,
      Body: "Name : " + name + "<br/>" +
        "Email : " + email + "<br/><br/>" +
        " "+subject+
        " " + message
    }).then(
      msg => alert("Your message send successfully")
    );
  }