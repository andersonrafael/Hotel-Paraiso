// Alterna tema claro/escuro
const btn = document.getElementById('theme-toggle');
if (btn) {
    btn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        btn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Tema Claro' : '🌙 Tema Escuro';
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
}

// Mantém tema escolhido ao recarregar
window.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (btn) btn.textContent = '☀️ Tema Claro';
    }
});

// Newsletter: alerta ao cadastrar
const newsletterForm = document.querySelector('.newsletter form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        if(email && email.includes('@')) {
            alert('Obrigado por se cadastrar! Em breve você receberá novidades.');
            newsletterForm.reset();
        } else {
            alert('Por favor, insira um email válido.');
        }
    });
}

// Rolagem suave para navegação
document.querySelectorAll('nav a').forEach(link =