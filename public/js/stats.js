document.addEventListener("DOMContentLoaded", () => {
    const statsSection = document.querySelector(".stats");
    if (!statsSection) return;

    const counters = statsSection.querySelectorAll(".stat-number");
    let started = false;

    const animate = () => {
        if (started) return;
        started = true;

        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target, 10);
            const duration = 1500;
            const startTime = performance.now();

            const update = (time) => {
                const progress = Math.min((time - startTime) / duration, 1);
                const value = Math.floor(progress * target);
                counter.textContent = value.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };

            requestAnimationFrame(update);
        });
    };

    const observer = new IntersectionObserver(
        entries => {
            if (entries[0].isIntersecting) {
                animate();
                observer.disconnect();
            }
        },
        { threshold: 0.4 }
    );

    observer.observe(statsSection);
});
