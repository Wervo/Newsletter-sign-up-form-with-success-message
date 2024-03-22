const dismiss = document.getElementById("exitBtn");
const emailMsg = document.getElementById("emailSpan");
const userEmail = localStorage.getItem('userEmail');

if (userEmail) {
    emailMsg.textContent = `${userEmail}.`;
};

dismiss.addEventListener('click', function(){
    window.location.href = "Form.html";
})

