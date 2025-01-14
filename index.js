let themeButton = document.getElementById("theme-button");

// Function to toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

// Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);


const toggleModal = (person) => {
  const modal = document.getElementById("thanks-modal");
  const modalContent = document.getElementById("thanks-modal-content");

  modal.style.display = "flex"; 

  modalContent.textContent = `Thank you so much, ${person.name}! ${person.hometown} represent!`;

  const modalImage = document.getElementById("modal-image"); 
  const intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000); 
};

let scaleFactor = 1; 
const scaleImage = () => {
    scaleFactor = scaleFactor === 1 ? 0.8 : 1; 
    let modalImage = document.getElementById("modal-image"); 

      modalImage.style.transform = `scale(${scaleFactor})`;
  };
  
  

// Function to add a signature and trigger modal
const addSignature = (person) => {
  const newSignature = document.createElement('p');
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;

  const signaturesSection = document.querySelector('.signatures');
  signaturesSection.appendChild(newSignature);

  signatureCount++;
  document.getElementById('signature-count').textContent = signatureCount;

  document.getElementById('sign-petition').reset(); 

  toggleModal(person);
};

// Form validation and submission
const validateForm = () => {
  let containsErrors = false;
  const petitionInputs = document.getElementById("sign-petition").elements;

  const person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value,
  };

  // Validate each input
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].type === "submit") continue; // Skip submit button

    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add("error");
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove("error");
    }
  }

  // Email validation
  if (!person.email.includes(".com")) {
    document.getElementById("email").classList.add("error");
    containsErrors = true;
  } else {
    document.getElementById("email").classList.remove("error");
  }

  if (!containsErrors) {
    addSignature(person);
  }
};



// Query for the 'Sign Now' button
const signNowButton = document.getElementById('sign-now-button');
let signatureCount = 2;

signNowButton.addEventListener('click', (event) => {
  event.preventDefault();
  validateForm();
});




document.addEventListener("DOMContentLoaded", () => {
    const closeModalButton = document.getElementById("close-modal-btn");
  
    const closeModal = () => {
      const modal = document.getElementById("thanks-modal");
      modal.style.display = "none";
    };
  
    closeModalButton.addEventListener("click", closeModal);
});
  
  
  

// Define the animation settings
let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
};

// Select all elements with the class 'revealable'
let revealableContainers = document.querySelectorAll('.revealable');

// Define the reveal function
function reveal() {
    // Loop through each revealable container
    for (let i = 0; i < revealableContainers.length; i++) {
        let windowHeight = window.innerHeight; // Save the height of the window
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top; // Find the top of the container

        // Check if the container should be revealed
        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            revealableContainers[i].classList.add('active'); 
        } else {
            revealableContainers[i].classList.remove('active'); 
        }
    }
}

window.addEventListener('scroll', reveal);

