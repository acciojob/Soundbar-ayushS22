// List your sound filenames here
const sounds = ['applause.mp3', 'boo.mp3', 'gasp.mp3','tada.mp3','victory.mp3','wrong.mp3'];

const buttonsContainer = document.getElementById('buttons');
let currentAudio = null;

// Create a button for each sound
sounds.forEach(sound => {
  const button = document.createElement('button');
  button.classList.add('btn');
  button.innerText = sound.replace('.mp3', '');

  button.addEventListener('click', () => {
    // Stop any currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.remove(); // Remove previous audio element from DOM
    }

    // Create a new <audio> element
    currentAudio = document.createElement('audio');
    currentAudio.src = `sounds/${sound}`;
    currentAudio.setAttribute('controls', ''); // Optional, for visibility
    currentAudio.style.display = 'none'; // Hide it if you don't want it visible
    document.body.appendChild(currentAudio);

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
