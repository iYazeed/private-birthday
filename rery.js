window.onload = function() {
    const canvas = document.getElementById('birthdayCanvas');
    const ctx = canvas.getContext('2d');
    let flicker = false;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background stars
        for (let i = 0; i < 100; i++) {
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(Math.random() * 600, Math.random() * 700, 3, 0, 2 * Math.PI);
            ctx.fill();
        }

        // Candles
        const candleX = [260, 300, 340];
        for (let x of candleX) {
            ctx.fillStyle = 'blue';
            ctx.fillRect(x, 210, 10, 30); // Candle body

            ctx.fillStyle = flicker ? 'orange' : 'yellow'; // Flickering flame
            ctx.beginPath();
            ctx.arc(x + 5, 190, 10, 0, 2 * Math.PI);
            ctx.fill();
        }

        flicker = !flicker;

        // Drawing the cake
        // Base layer
        ctx.fillStyle = 'sandybrown';
        ctx.fillRect(200, 300, 200, 100);
        ctx.strokeStyle = 'darkgray';
        ctx.lineWidth = 5;
        ctx.strokeRect(200, 300, 200, 100); // Border

        // Middle layer
        ctx.fillStyle = 'blanchedalmond';
        ctx.fillRect(220, 260, 160, 60);
        ctx.strokeRect(220, 260, 160, 60); // Border

        // Top layer
        ctx.fillStyle = 'beige';
        ctx.fillRect(240, 230, 120, 50);
        ctx.strokeRect(240, 230, 120, 50); // Border

        // Cake decorations
        ctx.fillStyle = 'white';
        for (let i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.arc(250 + (i * 18), 275, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
        for (let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.arc(260 + (i * 18), 245, 5, 0, 2 * Math.PI);
            ctx.fill();
        }

        // Subtle dental-themed decoration
        ctx.fillStyle = 'lightgray';
        ctx.beginPath();
        ctx.arc(320, 340, 30, 0, 2 * Math.PI);
        ctx.fill();

        // 3D effect shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.beginPath();
        ctx.ellipse(300, 395, 90, 10, 0, 0, 2 * Math.PI);
        ctx.fill();
    }

    setInterval(draw, 500);
};
