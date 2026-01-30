document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    if (!category) return;

    document.querySelectorAll(".review-card").forEach(card => {
        const cats = card.dataset.categories?.split(",") || [];
        if (!cats.includes(category)) {
            card.style.display = "none";
        }
    });
});
