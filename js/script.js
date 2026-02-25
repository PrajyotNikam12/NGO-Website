function showSuccessMessage(message) {
  const popup = document.getElementById("successPopup");
  popup.innerText = message;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000);
}

function handleDonate(event) {
  event.preventDefault();
  showSuccessMessage("Donation Submission Successful!");
  event.target.reset();
}

function handleContact(event) {
  event.preventDefault();
  showSuccessMessage("Message Sent Successfully!");
  event.target.reset();
}