document.addEventListener('DOMContentLoaded', () => {
    // Rain Animation
    const rainContainer = document.getElementById('rain-container');
    const heartSymbols = ['❤️', '💖', '💘', '💝', '💕'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5s fall duration
        heart.style.fontSize = Math.random() * 20 + 10 + 'px'; // 10-30px size

        rainContainer.appendChild(heart);

        // Remove heart after it falls
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create a heart every 100ms
    setInterval(createHeart, 100);

    // Scene Transition Logic
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const scene1 = document.getElementById('scene-1');
    const scene2 = document.getElementById('scene-2');
    const popupHate = document.getElementById('popup-hate');
    const popupSuccess = document.getElementById('popup-success');
    const optionBtns = document.querySelectorAll('.option-btn');

    // "No" button interaction
    btnNo.addEventListener('click', () => {
        playSound();
        popupHate.classList.remove('hidden');
    });

    // "Yes" button interaction
    btnYes.addEventListener('click', () => {
        playSound();
        scene1.classList.remove('active');
        scene1.classList.add('hidden');

        // Small delay to ensure clean transition
        setTimeout(() => {
            scene1.style.display = 'none'; // Fully solve layout issues
            scene2.classList.remove('hidden');
            scene2.classList.add('active');
        }, 500);
    });

    // Millionaire Options interaction
    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            playSound();
            popupSuccess.classList.remove('hidden');
        });
    });
});

// Global functions for inline onclicks
function closePopup(id) {
    playSound();
    document.getElementById(id).classList.add('hidden');
}

function nextStep() {
    playSound();
    const popupSuccess = document.getElementById('popup-success');
    const scene2 = document.getElementById('scene-2');
    const scene3 = document.getElementById('scene-3');

    // Close popup first
    popupSuccess.classList.add('hidden');

    // Hide Scene 2
    scene2.classList.remove('active');
    scene2.classList.add('hidden');

    // Show Scene 3 after delay
    setTimeout(() => {
        scene2.style.display = 'none';
        scene3.classList.remove('hidden');
        scene3.classList.add('active');
    }, 500);
}

function playSound() {
    const audio = document.getElementById('click-sound');
    audio.currentTime = 0; // Rewind to start
    audio.play().catch(e => console.log("Audio play failed:", e));
}
