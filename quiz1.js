console.log("JavaScript loaded!");

function createFireworkEffect() {
    const fireworks = document.querySelectorAll('.fireworks');
    fireworks.forEach(firework => {
        const sparkleCount = 5; // 
        for (let i = 0; i < sparkleCount; i++) {
            const spark = document.createElement('div');
            spark.classList.add('spark');
            firework.appendChild(spark);

            // potition fireworks
            const x = Math.random() * 100; 
            const duration = Math.random() * 1 + 0.5; 
            spark.style.left = `${x}%`;
            spark.style.animation = `firework-spark ${duration}s ease-out forwards`;

            // remove spark when done
            setTimeout(() => {
                spark.remove();
            }, duration * 1000);
        }
    });
}

// call function
window.onload = createFireworkEffect;
