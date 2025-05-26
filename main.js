document.addEventListener('DOMContentLoaded', () => {
    // Initialize typewriter for the name
    const nameTypewriter = new Typewriter('#typing-text', {
        loop: false,
        delay: 25,
        cursor: '|'
    });

    // Initialize typewriter for the subtitle
    const subtitleTypewriter = new Typewriter('#subtitle-text', {
        loop: false,
        delay: 17,
        cursor: ''
    });

    // Start the typing animations
    nameTypewriter
        .typeString('Sahil')
        .start();

    // Start subtitle typing after a short delay
    setTimeout(() => {
        subtitleTypewriter
            .typeString("I love building software and drinking ☕. But that's probably not why you're here. I'm currently working on Optimus (Tesla's Humanoid 🤖) with the Tesla AI team. Prior to that, I was a quant at Citadel, where I wrote algorithms to trade foreign exchange currencies. I studied computer science at Princeton 🐅.")
            .start();
    }, 333);
});
