$(document).ready(function() {
    $("#sendform").on("click", function(){
    event.preventDefault();
    var senderName = $("#name").val();
    var emailFrom = $("#email").val();
    var emailBody = $("#message").val();
    emailBody = emailBody + "%0A" + "%0A" + "Sender's Name: " + senderName + " | " + "  Sender's Email: " + emailFrom + "%0A";
    window.location.href = "mailto:ianclark226@gmail.com?&subject=Billboard%20inquiry&body=" + emailBody;
    console.log("itsent");
    });    
  });