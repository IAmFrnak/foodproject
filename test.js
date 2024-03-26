const buttons = document.getElementsByClassName('explore-button');

// Iterate over the collection of buttons and apply event listeners to each
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseenter', () => {
    const button = buttons[i]; // Current button
    // Set a timeout to apply the rotating animation after a short delay
    setTimeout(() => {
      button.style.background = 'linear-gradient(to bottom right, #ff79da, #9356dc)';
      button.style.animation = 'rotateGradient 3s infinite linear'; // Apply rotating animation
    }, 100);
  });

  buttons[i].addEventListener('mouseleave', () => {
    const button = buttons[i]; // Current button
    button.style.background = 'linear-gradient(to bottom right, #ff79da, #9356dc)'; // restore original color
    button.style.animation = 'none'; // Remove animation
  });
}

const guides = document.getElementsByClassName('button-guide');

// Iterate over the collection of guides and apply event listeners to each
for (let i = 0; i < guides.length; i++) {
  guides[i].addEventListener('mouseenter', () => {
    guides[i].style.backgroundColor = 'rgba(147, 86, 220, 0.13)';
  });

  guides[i].addEventListener('mouseleave', () => {
    guides[i].style.backgroundColor = '#f5f5f5'; // restore original color
  });
}

const priceBoxes = document.querySelectorAll('.price-container');
const checkMarks = document.querySelectorAll('.check');
const error = document.querySelectorAll('.error')

checkMarks.forEach((checkMark, index) => {
  checkMark.addEventListener('click', () => {
    const priceBox = priceBoxes[index];
    if (checkMark.classList.contains('error')) {
      checkMark.classList.add('error-hidden');
    }

    priceBox.classList.add('clicked-right');
  });
});

error.forEach((errors, index) => {
  errors.addEventListener('click', () => {
    const priceBox = priceBoxes[index];
    if (errors.classList.contains('error-hidden')) {
      errors.classList.remove('error-hidden');
    }

    priceBox.classList.remove('clicked-right');
  });
});