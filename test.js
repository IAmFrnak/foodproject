const button = document.getElementsByClassName('explore-button');

// button.addEventListener('mouseenter', () => {
//     button.style.backgroundColor = 'rgba(147, 86, 220, 0.13)';
// });

button.addEventListener('mouseenter', () => {
  // Set a timeout to apply the rotating animation after a short delay
  setTimeout(() => {
    button.style.background = 'linear-gradient(to bottom right, #ff79da, #9356dc)';
    button.style.animation = 'rotateGradient 3s infinite linear'; // Apply rotating animation
  }, 100);
});

button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = 'linear-gradient(to bottom right, #ff79da, #9356dc)'; // restore original color
  button.style.animation = 'none'; // Remove animation
});

const guide = document.getElementsByClassName('button-guide');

guide.addEventListener('mouseenter', () => {
  guide.style.backgroundColor = 'rgba(147, 86, 220, 0.13)';
});

guide.addEventListener('mouseleave', () => {
  guide.style.backgroundColor = '#f5f5f5'; // restore original color
});
