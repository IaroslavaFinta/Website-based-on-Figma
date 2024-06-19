const buttonContactMe = document.getElementById("contact-me");
const buttonGetInTouch = document.getElementById("get-touch");
const buttonSendMessage = document.getElementById("button-sendmessage");

buttonContactMe.addEventListener("click", clickButton);
buttonContactMe.addEventListener("click", openForm);
buttonGetInTouch.addEventListener("click", openForm);
buttonSendMessage.addEventListener("click", sendMessage);

function clickButton() {
  alert("Button is clicked");
}

function openForm() {
  document.location.href = "#section-separate-4";
}

function sendMessage() {
  alert("Message is send");
}

function validate() {
  if (document.getElementById("name").value == "") {
    alert("Please provide your name!");
    return false;
  }
  if (document.getElementById("email").value == "") {
    alert("Please provide your Email!");
    return false;
  }
  return true;
}

document.querySelector('form').onsubmit = e => {
  e.target.submit();
  e.target.reset();
  return false;
};