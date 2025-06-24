function sendMail(){
    var params = {
     name: document.getElementById("name").value,
     phone: document.getElementById("phone").value,
     email: document.getElementById("email").value,


   
               };
const serviceID = "service_h2b06eh";
const templateID = "template_0kqjn2h"
emailjs.send(serviceID, templateID, params)
 .then (
    res => {
      document.getElementById("name").value ="";
      document.getElementById("phone").value ="";
      document.getElementById("email").value ="";
 setTimeout(function() {
    alert("This message was delayed by 1 seconds!");
  }, 20);
     }
     
 )

}



