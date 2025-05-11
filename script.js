const triggerAnimationButton = document.getElementById('triggerAnimationButton');
const animatedBox = document.getElementById('animatedBox');
const usernameInput = document.getElementById('username');
const savePreferenceButton = document.getElementById('savePreferenceButton');
const preferenceOutput = document.getElementById('preferenceOutput');

// --- Function to store and retrieve user preferences using localStorage ---
function manageUsernamePreference() {
    const storedUsername = localStorage.getItem('username');

    if (storedUsername) {
        preferenceOutput.textContent = `Your saved username: ${storedUsername}`;
        usernameInput.value = storedUsername;
    }

    savePreferenceButton.addEventListener('click', function() {
        const currentUsername = usernameInput.value.trim();
        if (currentUsername) {
            localStorage.setItem('username', currentUsername);
            preferenceOutput.textContent = `Username "${currentUsername}" saved!`;
        } else {
            preferenceOutput.textContent = 'Please enter a username to save.';
        }
    });
}

// --- Function to trigger an animation on user action ---
function triggerAnimation() {
    triggerAnimationButton.addEventListener('click', function() {
        // Remove any existing animation classes
        animatedBox.classList.remove('slide-in', 'fade-out');

        // Add a new animation class
        animatedBox.classList.add('slide-in');

        // Optionally, you can add another animation after a delay
        // setTimeout(() => {
        //     animatedBox.classList.remove('slide-in');
        //     animatedBox.classList.add('fade-out');
        // }, 3000); // 3 seconds
    });

    //trigger different animations here
    animatedBox.addEventListener('mouseover', function() {
        animatedBox.style.backgroundColor = 'purple';
    });

    animatedBox.addEventListener('mouseout', function() {
        animatedBox.style.backgroundColor = 'pink';
    });
}

// --- Initialize the functions ---
manageUsernamePreference();
triggerAnimation();
