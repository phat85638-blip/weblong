// ===== TẠO HIỆU ỨNG RƠI =====
const container = document.getElementById('particles-container');
const icons = ['❤️', '🔥', '⭐', '🎮', '🎤', '💜', '✨', '🌟', '🎵', '💫'];
const count = 45;

for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'particle';
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.fontSize = (Math.random() * 1.2 + 0.8) + 'rem';
    el.style.opacity = Math.random() * 0.4 + 0.2;
    el.style.animationDuration = (Math.random() * 6 + 5) + 's';
    el.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(el);
}

// ===== ẢNH RƠI (dùng avatar SVG) =====
for (let i = 0; i < 5; i++) {
    const wrapper = document.createElement('div');
    wrapper.className = 'particle';
    wrapper.style.left = Math.random() * 100 + '%';
    wrapper.style.width = (Math.random() * 40 + 30) + 'px';
    wrapper.style.height = 'auto';
    wrapper.style.opacity = Math.random() * 0.2 + 0.1;
    wrapper.style.animationDuration = (Math.random() * 12 + 8) + 's';
    wrapper.style.animationDelay = (Math.random() * 15) + 's';
    wrapper.style.borderRadius = '12px';
    wrapper.style.overflow = 'hidden';
    wrapper.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';

    const avatarSvg = document.querySelector('.server-avatar svg');
    if (avatarSvg) {
        const clone = avatarSvg.cloneNode(true);
        clone.setAttribute('viewBox', '0 0 100 100');
        clone.querySelectorAll('text').forEach(el => {
            const size = parseFloat(el.getAttribute('font-size'));
            if (size) el.setAttribute('font-size', size * 0.6);
        });
        wrapper.appendChild(clone);
    } else {
        wrapper.textContent = '🎮';
        wrapper.style.fontSize = '2rem';
        wrapper.style.display = 'flex';
        wrapper.style.alignItems = 'center';
        wrapper.style.justifyContent = 'center';
    }
    container.appendChild(wrapper);
}