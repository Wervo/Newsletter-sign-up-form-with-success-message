const emailInput = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitBtn");
let hiddenError = document.querySelector(".hidden")

submitBtn.addEventListener('click', function(){
    event.preventDefault();
    const emailType = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if(!emailType.test(emailInput.value)){
        hiddenError.style.visibility = "visible";
        emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
        emailInput.style.backgroundColor = "hsl(4, 100%, 90%)";
        emailInput.style.color = "hsl(4, 100%, 67%)";
    } else {
       hiddenError.style.visibility = "hidden";
       localStorage.setItem('userEmail', emailInput.value);
       window.location.href = "Forms1.html";
    }
});

