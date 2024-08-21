        // Variable to hold the interval ID for movement
        let moveInterval;

        // Function to enable the Start button and disable the Stop button
        function startMoving() {
            document.getElementById('startBtn').disabled = true;  // Disable Start button
            document.getElementById('stopBtn').disabled = false;  // Enable Stop button

            // Start the movement function
            moveMeme();
        }

        // Function to enable the Stop button and disable the Start button
        function stopMoving() {
            document.getElementById('startBtn').disabled = false; // Enable Start button
            document.getElementById('stopBtn').disabled = true;   // Disable Stop button

            // Stop the movement function
            clearInterval(moveInterval);
        }

        // Function to move the meme image around the page
        function moveMeme() {
            moveInterval = setInterval(() => {
                const meme = document.getElementById('meme');

                // Get random positions within the viewport
                const x = Math.floor(Math.random() * (window.innerWidth - meme.width));
                const y = Math.floor(Math.random() * (window.innerHeight - meme.height));

                // Apply the random positions to the meme image
                meme.style.transform = `translate(${x}px, ${y}px)`;
            }, 1000); // Move every 1 second
        }