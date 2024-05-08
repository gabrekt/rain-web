const rainContainer = document.getElementById('rain');
console.log('Rain container found:', rainContainer); // Should output the div element

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = Math.random() * window.innerWidth + 'px';
    raindrop.style.animationDuration = 0.5 + Math.random() * 0.5 + 's';
    rainContainer.appendChild(raindrop);
    console.log('Raindrop created at:', raindrop.style.left, 'with duration:', raindrop.style.animationDuration);

   // Adjusting the timeout to 1500 milliseconds
    setTimeout(() => {
    if (raindrop.parentNode) {
        rainContainer.removeChild(raindrop);
        console.log('Raindrop removed');
    }
    }, 1500); // Slightly more than the maximum animation duration

}

setInterval(createRaindrop, 150);
