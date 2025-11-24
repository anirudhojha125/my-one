$(document).ready(function() {
    // Page elements
    const page1 = $('#page1');
    const page2 = $('#page2');
    const page3 = $('#page3');
    const page4 = $('#page4');
    
    // Buttons for page 1
    const yesBtn1 = $('#yesBtn1');
    const noBtn1 = $('#noBtn1');
    
    // Buttons for page 2
    const yesBtn2 = $('#yesBtn2');
    const noBtn2 = $('#noBtn2');
    
    // Buttons for page 3
    const yesBtn3 = $('#yesBtn3');
    const noBtn3 = $('#noBtn3');
    
    // Click counts for each button
    let clickCount1 = 0;
    let clickCount2 = 0;
    let clickCount3 = 0;

    // Performance optimization: limit the number of elements
    let elementCount = 0;
    const maxElements = 15; // Reduced from 30 to 15 for better performance

    // Track active love letters
    let activeLetters = [];

    // Create floating hearts for Valentine's theme
    function createHearts() {
        // Create 5 hearts total (reduced from 8 for better performance)
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                const heart = $('<div>❤</div>');
                heart.addClass('heart');
                heart.css({
                    'left': Math.random() * 100 + 'vw',
                    'animationDuration': (Math.random() * 30 + 30) + 's', // Slower animations
                    'fontSize': (Math.random() * 10 + 8) + 'px', // Smaller size range
                    'opacity': (Math.random() * 0.3 + 0.2), // Lower opacity
                    'color': getRandomColor()
                });
                $('body').append(heart);
                elementCount++;

                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                    elementCount--;
                    // Create a new one to replace it
                    if (!isLowEndDevice()) {
                        createHearts();
                    }
                }, parseFloat(heart.css('animationDuration')) * 1000);
            }, i * 1000); // Slower creation
        }
    }

    // Create rose petals
    function createRosePetals() {
        // Create 3 petals total (reduced from 5 for better performance)
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                const petal = $('<div>🌹</div>');
                petal.addClass('rose-petal');
                petal.css({
                    'left': Math.random() * 100 + 'vw',
                    'animationDuration': (Math.random() * 40 + 40) + 's', // Slower animations
                    'fontSize': (Math.random() * 10 + 8) + 'px', // Smaller size range
                    'opacity': (Math.random() * 0.2 + 0.1) // Lower opacity
                });
                $('body').append(petal);
                elementCount++;

                // Remove petal after animation completes
                setTimeout(() => {
                    petal.remove();
                    elementCount--;
                    // Create a new one to replace it
                    if (!isLowEndDevice()) {
                        createRosePetals();
                    }
                }, parseFloat(petal.css('animationDuration')) * 1000);
            }, i * 2000); // Slower creation
        }
    }

    // Create floating cupids
    function createCupids() {
        // Create 2 cupids total (reduced from 3 for better performance)
        for (let i = 0; i < 2; i++) {
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                const cupid = $('<div>🏹</div>');
                cupid.addClass('cupid');
                cupid.css({
                    'top': Math.random() * 100 + 'vh',
                    'animationDuration': (Math.random() * 80 + 80) + 's', // Slower animations
                    'fontSize': (Math.random() * 15 + 12) + 'px', // Smaller size range
                    'opacity': (Math.random() * 0.3 + 0.2) // Lower opacity
                });
                $('body').append(cupid);
                elementCount++;

                // Remove cupid after animation completes
                setTimeout(() => {
                    cupid.remove();
                    elementCount--;
                    // Create a new one to replace it
                    if (!isLowEndDevice()) {
                        createCupids();
                    }
                }, parseFloat(cupid.css('animationDuration')) * 1000);
            }, i * 3000); // Slower creation
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
        
        // Create letters less frequently but limit to 2 at a time
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
                const letter = $('<div></div>');
                letter.addClass('love-letter');
                letter.html(letters[randomIndex]);
                letter.css({
                    'left': (Math.random() * 70 + 10) + 'vw',
                    'top': (Math.random() * 70 + 10) + 'vh'
                });
                $('body').append(letter);
                elementCount++;
                
                // Track this letter
                activeLetters.push(letter[0]);
                
                // Remove letter after 15 seconds (slower)
                setTimeout(() => {
                    const index = activeLetters.indexOf(letter[0]);
                    if (index > -1) {
                        activeLetters.splice(index, 1);
                    }
                    if (letter.parentNode) {
                        letter.remove();
                        elementCount--;
                    }
                }, 15000);
            }
        }, 10000); // Create new letter every 10 seconds (slower)
    }

    // Create romantic sparkles when buttons are hovered
    function createSparkles(x, y) {
        // Reduce number of sparkles from 8 to 5 for better performance
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                const sparkle = $('<div>✨</div>');
                sparkle.addClass('romantic-sparkle');
                sparkle.css({
                    'left': (x + (Math.random() * 40 - 20)) + 'px', // Narrower spread
                    'top': (y + (Math.random() * 40 - 20)) + 'px', // Narrower spread
                    'color': getRandomSparkleColor(),
                    'fontSize': (Math.random() * 15 + 10) + 'px' // Smaller size range
                });
                $('body').append(sparkle);
                elementCount++;

                // Remove sparkle after animation completes
                setTimeout(() => {
                    sparkle.remove();
                    elementCount--;
                }, 1500); // Faster removal
            }, i * 30); // Faster creation
        }
    }

    // Get random romantic color for text
    function getRandomColor() {
        const colors = ['#ff6b6b', '#ff8e8e', '#ffb3c1', '#ffccd5', '#ff758f', '#ff4d6d'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Get random sparkle color
    function getRandomSparkleColor() {
        const colors = ['#ffd700', '#ffed4e', '#ffeb3b', '#fff176'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Start creating romantic elements immediately when the website starts
    function startAnimations() {
        // Only start animations if not on low-end device
        if (!isLowEndDevice()) {
            createHearts();
            createRosePetals();
            createCupids();
            createLoveLetters();
        } else {
            // On low-end devices, create minimal elements
            setTimeout(() => {
                if (elementCount < 5) {
                    const heart = $('<div>❤</div>');
                    heart.addClass('heart');
                    heart.css({
                        'left': '50%',
                        'animationDuration': '60s',
                        'fontSize': '1rem',
                        'opacity': '0.3'
                    });
                    $('body').append(heart);
                    elementCount++;
                }
            }, 5000);
        }
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
    $('.btn').on('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        createSparkles(x, y);
    });

    // Page 1 - "Are you mad at me?"
    yesBtn1.on('click', function() {
        // Go to page 2
        page1.removeClass('active');
        page2.addClass('active');
    });

    noBtn1.on('click', function() {
        // Go directly to the final page (page 4)
        page1.removeClass('active');
        page4.addClass('active');
        createThankYouHearts();
        triggerFinalPageAnimation();
    });

    // Page 2 - "Are you sure? I can get you chocolates 🍫"
    yesBtn2.on('click', function() {
        // Go to page 3
        page2.removeClass('active');
        page3.addClass('active');
    });

    noBtn2.on('click', function() {
        // Go directly to the final page (page 4)
        page2.removeClass('active');
        page4.addClass('active');
        createThankYouHearts();
        triggerFinalPageAnimation();
    });

    // Page 3 - "Sooooorryyy forgive me 🙏 Unlimited body massages? 💆‍♀️"
    yesBtn3.on('click', function() {
        // Go directly to the final page (page 4)
        page3.removeClass('active');
        page4.addClass('active');
        createThankYouHearts();
        triggerFinalPageAnimation();
    });

    noBtn3.on('click', function() {
        clickCount3++;
        
        if (clickCount3 < 3) {
            // Shrink the button by reducing its scale (10% each time)
            const scale = 1 - (clickCount3 * 0.1);
            $(this).css('transform', `scale(${scale})`);
        } else {
            // Starting from the 3rd click, move the button to a random position within the dialog box
            moveButtonWithinDialogBox($(this), yesBtn3);
        }
    });

    function moveButtonWithinDialogBox(noButton, yesButton) {
        // Get the container element
        const container = $('.container');
        const containerRect = container[0].getBoundingClientRect();
        
        // Get button dimensions
        const buttonWidth = noButton.outerWidth();
        const buttonHeight = noButton.outerHeight();
        
        // Define safe boundaries within the container with padding
        const padding = 20;
        const minX = containerRect.left + padding;
        const minY = containerRect.top + padding;
        const maxX = containerRect.right - buttonWidth - padding;
        const maxY = containerRect.bottom - buttonHeight - padding;
        
        // Get yes button position to avoid overlapping
        const yesButtonRect = yesButton[0].getBoundingClientRect();
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
        noButton.css({
            'position': 'fixed',
            'transform': 'scale(1)',
            'zIndex': '9999',
            'margin': '0',
            'display': 'block',
            'left': randomX + 'px',
            'top': randomY + 'px'
        });
        
        // Ensure button stays visible
        setTimeout(() => {
            noButton.css('display', 'block');
        }, 10);
    }

    function createThankYouHearts() {
        // Add fewer hearts when Yes is clicked for better performance
        for (let i = 0; i < 8; i++) { // Reduced from 15 to 8
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                const heart = $('<div>❤</div>');
                heart.addClass('heart');
                heart.css({
                    'left': Math.random() * 100 + 'vw',
                    'animationDuration': (Math.random() * 4 + 3) + 's',
                    'fontSize': (Math.random() * 15 + 10) + 'px', // Smaller hearts
                    'color': getRandomColor()
                });
                $('body').append(heart);
                elementCount++;

                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                    elementCount--;
                }, 5000);
            }, i * 150); // Slower creation
        }
    }

    // Trigger special animation for the final page
    function triggerFinalPageAnimation() {
        // Add fewer extra romantic elements for the final page
        for (let i = 0; i < 5; i++) { // Reduced from 10 to 5
            setTimeout(() => {
                if (elementCount >= maxElements) return;
                
                // Create extra hearts
                const heart = $('<div>❤</div>');
                heart.addClass('heart');
                heart.css({
                    'left': Math.random() * 100 + 'vw',
                    'animationDuration': (Math.random() * 5 + 4) + 's',
                    'fontSize': (Math.random() * 20 + 15) + 'px', // Smaller hearts
                    'color': getRandomColor()
                });
                $('body').append(heart);
                elementCount++;

                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                    elementCount--;
                }, 6000);
            }, i * 300); // Slower creation
        }
    }

    // Start animations immediately when the website loads
    startAnimations();
});