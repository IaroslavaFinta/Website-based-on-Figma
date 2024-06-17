const buttonContactMe = document.getElementById("contact-me");
const buttonGetInTouch = document.getElementById("get-touch");

buttonContactMe.addEventListener("click", clickButton);
buttonContactMe.addEventListener("click", openForm);
buttonGetInTouch.addEventListener("click", openForm);

function clickButton() {
    alert("Button is clicked");
}

function openForm() {
    document.location.href = "#section-separate-4";
}