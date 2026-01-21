function startExperience() {
    document.getElementById("bgMusic").play();
    document.querySelector(".countdown").scrollIntoView({ behavior: "smooth" });

    setInterval(createLove, 600);
}

/* Countdown */
const targetDate = new Date("January 25, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("timer").innerHTML = "Hari ini adalah harimu 🤍";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 25));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 25);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);

    document.getElementById("timer").innerHTML =
        `${days} Hari • ${hours} Jam • ${minutes} Menit`;
}, 1000);

/* Fade animation */
const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

fades.forEach(el => observer.observe(el));
/* Love floating animation */
const loveContainer = document.querySelector('.love-container');

function createLove() {
    const love = document.createElement('div');
    love.classList.add('love');
    love.innerHTML = '🤍';

    love.style.left = Math.random() * 100 + 'vw';
    love.style.animationDuration = (4 + Math.random() * 3) + 's';
    love.style.fontSize = (16 + Math.random() * 14) + 'px';

    loveContainer.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 7000);
}