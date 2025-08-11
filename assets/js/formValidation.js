
function formValidation(){
    const name = document.getElementById("nameId").value.trim();
    const email = document.getElementById("emailId").value.trim();
    const subject = document.getElementById("subjectId").value.trim();
    const  message = document.getElementById("messageId").value.trim();

    const nameRegex = /^[a-zA-Z\s]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const subjectRegex = /^.{3,50}$/;
    const messageRegex = /^.{5,}$/;



    if(!nameRegex.test(name)){
      alert("Please enter a valid name (letters only, 2–30 characters).");
      return false;
    }

    if(!emailRegex.test(email)){
      alert("Please enter a valid email address.");
      return false;
    }

    if(!subjectRegex.test(subject)){
      alert("Subject must be between 3 and 50 characters.");
      return false;
    }

    if(!messageRegex.test(message)){
      alert("Message must be at least 5 characters.");
      return false;

    }

    return true;
}


