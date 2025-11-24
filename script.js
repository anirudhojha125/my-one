document.addEventListener('DOMContentLoaded', function() {
    // Page elements
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    
    // Buttons for page 1
    const yesBtn1 = document.getElementById('yesBtn1');
    const noBtn1 = document.getElementById('noBtn1');
    
    // Buttons for page 2
    const yesBtn2 = document.getElementById('yesBtn2');
    const noBtn2 = document.getElementById('noBtn2');
    
    // Buttons for page 3
    const yesBtn3 = document.getElementById('yesBtn3');
    const noBtn3 = document.getElementById('noBtn3');
    
    // Click counts for each button
    let clickCount1 = 0;
    let clickCount2 = 0;
    let clickCount3 = 0;

    // Performance optimization: limit the number of elements
    let elementCount = 0;
    const maxElements = 30; // Increased for more animations

    // Track active love letters
    let activeLetters = [];

    // Create floating hearts for Valentine's theme
    function createHearts() {
        // Create 8 hearts total for more animation
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                const heart = document.createElement('div');
                heart.innerHTML = '❤';
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = Math.random() * 15 + 10 + 's'; // Variable speeds
                heart.style.fontSize = Math.random() * 15 + 10 + 'px'; // Variable sizes
                heart.style.opacity = Math.random() * 0.5 + 0.3; // Variable opacity
                heart.style.color = getRandomColor();
                document.body.appendChild(heart);
                elementCount++;

                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                    elementCount--;
                    // Create a new one to replace it
                    if (!isLowEndDevice()) {
                        createHearts();
                    }
                }, parseFloat(heart.style.animationDuration) * 1000);
            }, i * 500); // Faster creation
        }
    }

    // Create rose petals
    function createRosePetals() {
        // Create 5 petals total for more animation
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                const petal = document.createElement('div');
                petal.innerHTML = '🌹';
                petal.classList.add('rose-petal');
                petal.style.left = Math.random() * 100 + 'vw';
                petal.style.animationDuration = Math.random() * 20 + 15 + 's'; // Variable speeds
                petal.style.fontSize = Math.random() * 15 + 10 + 'px'; // Variable sizes
                petal.style.opacity = Math.random() * 0.4 + 0.2; // Variable opacity
                document.body.appendChild(petal);
                elementCount++;

                // Remove petal after animation completes
                setTimeout(() => {
                    petal.remove();
                    elementCount--;
                    // Create a new one to replace it
                    if (!isLowEndDevice()) {
                        createRosePetals();
                    }
                }, parseFloat(petal.style.animationDuration) * 1000);
            }, i * 800); // Faster creation
        }
    }

    // Create floating cupids
    function createCupids() {
        // Create 3 cupids total for more animation
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                const cupid = document.createElement('div');
                cupid.innerHTML = '🏹';
                cupid.classList.add('cupid');
                cupid.style.top = Math.random() * 100 + 'vh';
                cupid.style.animationDuration = Math.random() * 40 + 30 + 's'; // Variable speeds
                cupid.style.fontSize = Math.random() * 20 + 15 + 'px'; // Variable sizes
                cupid.style.opacity = Math.random() * 0.6 + 0.3; // Variable opacity
                document.body.appendChild(cupid);
                elementCount++;

                // Remove cupid after animation completes
                setTimeout(() => {
                    cupid.remove();
                    elementCount--;
                    // Create a new one to replace it
                    if (!isLowEndDevice()) {
                        createCupids();
                    }
                }, parseFloat(cupid.style.animationDuration) * 1000);
            }, i * 2000); // Faster creation
        }
    }

    // Create love letters with 10 unique messages - only 2 at a time
    function createLoveLetters() {
        const letters = [
            "Roses are red, violets are blue, sugar is sweet, and so are you! 💖",
            "You mean the world to me! 🌍💕",
            "Every moment with you is special! ⏰✨",
            "I love you more than words can say! 💬❤️",
            "You make my heart skip a beat! 💓🎵",
            "In your arms is my favorite place to be 🤗",
            "I fall for you more each day 🍂",
            "You are my today and all of my tomorrows 💕",
            "Loving you is the best thing that ever happened to me 🎁",
            "You are the missing piece I've been searching for 🧩"
        ];
        
        // Create letters more frequently but limit to 2 at a time
        setInterval(() => {
            // Remove old letters if we have 2 already
            while (activeLetters.length >= 2) {
                const oldLetter = activeLetters.shift();
                if (oldLetter && oldLetter.parentNode) {
                    oldLetter.remove();
                    elementCount--;
                }
            }
            
            // Create a new letter
            if (elementCount < maxElements) {
                const randomIndex = Math.floor(Math.random() * letters.length);
                const letter = document.createElement('div');
                letter.classList.add('love-letter');
                letter.innerHTML = letters[randomIndex];
                letter.style.left = Math.random() * 70 + 10 + 'vw';
                letter.style.top = Math.random() * 70 + 10 + 'vh';
                document.body.appendChild(letter);
                elementCount++;
                
                // Track this letter
                activeLetters.push(letter);
                
                // Remove letter after 10 seconds (faster)
                setTimeout(() => {
                    const index = activeLetters.indexOf(letter);
                    if (index > -1) {
                        activeLetters.splice(index, 1);
                    }
                    if (letter.parentNode) {
                        letter.remove();
                        elementCount--;
                    }
                }, 10000);
            }
        }, 5000); // Create new letter every 5 seconds (more frequent)
    }

    // Create romantic sparkles when buttons are hovered
    function createSparkles(x, y) {
        for (let i = 0; i < 8; i++) { // More sparkles
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.classList.add('romantic-sparkle');
                sparkle.style.left = (x + (Math.random() * 60 - 30)) + 'px'; // Wider spread
                sparkle.style.top = (y + (Math.random() * 60 - 30)) + 'px'; // Wider spread
                sparkle.style.color = getRandomSparkleColor();
                sparkle.style.fontSize = Math.random() * 20 + 15 + 'px'; // Variable sizes
                document.body.appendChild(sparkle);
                elementCount++;

                // Remove sparkle after animation completes
                setTimeout(() => {
                    sparkle.remove();
                    elementCount--;
                }, 2000); // Faster removal
            }, i * 50); // Faster creation
        }
    }

    // Get random romantic color for text
    function getRandomColor() {
        const colors = ['#ff6b6b', '#ff8e8e', '#ffb3c1', '#ffccd5', '#ff758f', '#ff4d6d', '#d32f2f'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Get random sparkle color
    function getRandomSparkleColor() {
        const colors = ['#ffd700', '#ffed4e', '#ffeb3b', '#fff176', '#fff59d', '#ffc107'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Start creating romantic elements immediately when the website starts
    function startAnimations() {
        createHearts();
        createRosePetals();
        createCupids();
        createLoveLetters();
    }

    // Detect low-end devices
    function isLowEndDevice() {
        // Simple detection based on device memory and hardware concurrency
        try {
            if (navigator.deviceMemory && navigator.deviceMemory <= 2) return true;
            if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) return true;
        } catch (e) {
            // If we can't detect, assume it's not low-end
            return false;
        }
        return false;
    }

    // Add sparkle effect to buttons on hover
    [yesBtn1, noBtn1, yesBtn2, noBtn2, yesBtn3, noBtn3].forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = button.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            createSparkles(x, y);
        });
    });

    // Page 1 - "Are you mad at me?"
    yesBtn1.addEventListener('click', function() {
        // Go to page 2
        page1.classList.remove('active');
        page2.classList.add('active');
    });

    noBtn1.addEventListener('click', function() {
        // Go directly to the final page (page 4)
        page1.classList.remove('active');
        page4.classList.add('active');
        createThankYouHearts();
        triggerFinalPageAnimation();
    });

    // Page 2 - "Are you sure? I can get you chocolates 🍫"
    yesBtn2.addEventListener('click', function() {
        // Go to page 3
        page2.classList.remove('active');
        page3.classList.add('active');
    });

    noBtn2.addEventListener('click', function() {
        // Go directly to the final page (page 4)
        page2.classList.remove('active');
        page4.classList.add('active');
        createThankYouHearts();
        triggerFinalPageAnimation();
    });

    // Page 3 - "Sooooorryyy forgive me 🙏 Unlimited body massages? 💆‍♀️"
    yesBtn3.addEventListener('click', function() {
        // Go directly to the final page (page 4)
        page3.classList.remove('active');
        page4.classList.add('active');
        createThankYouHearts();
        triggerFinalPageAnimation();
    });

    noBtn3.addEventListener('click', function() {
        clickCount3++;
        
        if (clickCount3 < 3) {
            // Shrink the button by reducing its scale (10% each time)
            const scale = 1 - (clickCount3 * 0.1);
            noBtn3.style.transform = `scale(${scale})`;
        } else {
            // Starting from the 3rd click, move the button to a random position within the dialog box
            moveButtonWithinDialogBox(noBtn3, yesBtn3);
        }
    });

    function moveButtonWithinDialogBox(noButton, yesButton) {
        // Get the container element
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        
        // Get button dimensions
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        
        // Define safe boundaries within the container with padding
        const padding = 20;
        const minX = containerRect.left + padding;
        const minY = containerRect.top + padding;
        const maxX = containerRect.right - buttonWidth - padding;
        const maxY = containerRect.bottom - buttonHeight - padding;
        
        // Get yes button position to avoid overlapping
        const yesButtonRect = yesButton.getBoundingClientRect();
        const yesButtonLeft = yesButtonRect.left;
        const yesButtonRight = yesButtonRect.right;
        const yesButtonTop = yesButtonRect.top;
        const yesButtonBottom = yesButtonRect.bottom;
        
        // Generate random coordinates within safe boundaries
        let randomX, randomY;
        let attempts = 0;
        const maxAttempts = 10;
        
        do {
            randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
            attempts++;
            
            // Check if the new position overlaps with the yes button
            const noButtonRight = randomX + buttonWidth;
            const noButtonBottom = randomY + buttonHeight;
            
            var overlaps = !(
                noButtonRight < yesButtonLeft ||
                randomX > yesButtonRight ||
                noButtonBottom < yesButtonTop ||
                randomY > yesButtonBottom
            );
        } while (overlaps && attempts < maxAttempts);
        
        // If we couldn't find a non-overlapping position, place it in a default safe spot
        if (overlaps) {
            randomX = minX;
            randomY = minY;
        }
        
        // Reset button styles to ensure visibility
        noButton.style.position = 'fixed';
        noButton.style.transform = 'scale(1)';
        noButton.style.zIndex = '9999';
        noButton.style.margin = '0';
        noButton.style.display = 'block';
        
        // Position the button
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
        
        // Ensure button stays visible
        setTimeout(() => {
            noButton.style.display = 'block';
        }, 10);
    }

    function createThankYouHearts() {
        // Add more hearts when Yes is clicked
        for (let i = 0; i < 15; i++) { // Increased from 8 to 15
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                const heart = document.createElement('div');
                heart.innerHTML = '❤';
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = Math.random() * 3 + 2 + 's';
                heart.style.fontSize = Math.random() * 20 + 15 + 'px'; // Larger hearts
                heart.style.color = getRandomColor();
                document.body.appendChild(heart);
                elementCount++;

                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                    elementCount--;
                }, 4000);
            }, i * 100); // Faster creation
        }
    }

    // Trigger special animation for the final page
    function triggerFinalPageAnimation() {
        // Add extra romantic elements for the final page
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                // Create extra hearts
                const heart = document.createElement('div');
                heart.innerHTML = '❤';
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = Math.random() * 4 + 3 + 's';
                heart.style.fontSize = Math.random() * 25 + 20 + 'px'; // Even larger hearts
                heart.style.color = getRandomColor();
                document.body.appendChild(heart);
                elementCount++;

                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                    elementCount--;
                }, 5000);
            }, i * 200);
        }
    }

    // Start animations immediately when the website loads
    startAnimations();
});