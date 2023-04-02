// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");

const likeButtons = document.querySelectorAll(".like-glyph");
likeButtons.forEach(button => {
  button.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        button.classList.toggle("activated-heart");
        button.classList.toggle("glyph-heart");
      })
      .catch(() => {
        errorModal.classList.remove("hidden");
        const errorMessage = document.getElementById("modal-message");
        errorMessage.textContent = "Random server error. Please try again.";
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

console.log(mimicServerCall())