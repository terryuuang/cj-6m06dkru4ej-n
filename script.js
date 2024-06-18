document.addEventListener('DOMContentLoaded', function() {
    // 添加平滑滾動效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 添加滾動動畫效果
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hide');
        observer.observe(section);
    });

    // 添加全螢幕特效到 "羅鴻遠 (Hong-Yuan Luo)"
    const ceoName = document.getElementById('ceo-name');
    ceoName.addEventListener('click', function() {
        document.body.classList.add('fullscreen-effect-shake');
        setTimeout(() => {
            document.body.classList.remove('fullscreen-effect-shake');
            document.body.classList.add('fullscreen-effect-invert');
            setTimeout(() => {
                document.body.classList.remove('fullscreen-effect-invert');
            }, 2000);
        }, 500);
    });

    // 提示變化效果
    ceoName.addEventListener('mouseover', function() {
        this.classList.add('hover');
    });
    ceoName.addEventListener('mouseout', function() {
        this.classList.remove('hover');
    });
});
