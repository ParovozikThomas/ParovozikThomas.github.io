document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        threshold: 0.1 };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            } else {
                entry.target.style.opacity = 0; // Скрыть, если не в видимости
                entry.target.style.transform = 'translateY(20px)'; // Возврат к начальному состоянию
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        // Изначально скрываем секции
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        observer.observe(section);
    });
});