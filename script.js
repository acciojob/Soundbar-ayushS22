//your JS code here. If required.
// List your sound filenames here (must match exactly what's in the 'sounds' folder)
const sounds = ['applause.mp3', 'boo.mp3', 'gasp.mp3','tada.mp3','victory.mp3','wrong.mp3'];

const buttonsContainer = document.getElementById('buttons');
let currentAudio = null;

// Create a button for each sound
sounds.forEach(sound => {
  const button = document.createElement('button');
  button.classList.add('btn');
  button.innerText = sound.replace('.mp3', ''); // Display name without extension

  button.addEventListener('click', () => {
    // Stop any currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Create and play new audio
    currentAudio = new Audio(`sounds/${sound}`);
    currentAudio.play();
  });

  buttonsContainer.appendChild(button);
});

// Stop button logic
const stopButton = document.querySelector('.stop');
stopButton.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
