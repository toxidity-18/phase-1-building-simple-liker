
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      if (heart.classList.contains('activated')) {
        heart.classList.remove('activated');
        heart.textContent = EMPTY_HEART;
      } else {
        
      
        mimicServerCall()
          .then(response => {
            heart.classList.add('activated');
            heart.textContent = FULL_HEART;
          })
          .catch(error => {
            const modal = document.getElementById('modal');
            modal.classList.remove('hidden');
            modal.textContent = error;
            setTimeout(() => {
              modal.classList.add('hidden');
            }, 3000); 
          });
      }
    });
  });

  
  function initializeModalTest() {
    let modal = document.querySelector('.hidden');
    if (modal) {
      describe("main.js", () => {
        it("contains a hidden modal", () => {
          expect(modal).not.to.equal(null);
        });
      });
    } else {
      console.error("Modal element with class 'hidden' not found.");
    }
  }

  initializeModalTest(); 
});
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2; 
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300); 
  });
}
;
