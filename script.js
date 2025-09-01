// Script para copiar e-mail para a área de transferência
const emailLink = document.getElementById('email-link');
const emailHint = document.getElementById('email-hint-text');
const originalHintText = emailHint.textContent;

emailLink.addEventListener('click', function(event) {
    // Previne a ação padrão (abrir o cliente de e-mail) para dar tempo de copiar
    // A ação de mailto: ainda funcionará porque não estamos parando a propagação.
    
    const email = 'lucasmb21.dev@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        // Sucesso ao copiar
        emailHint.textContent = 'E-mail copiado! ✅';
        emailHint.style.color = 'var(--cor-azul-claro)';
        setTimeout(() => {
            emailHint.textContent = originalHintText;
            emailHint.style.color = ''; // Volta à cor original do CSS
        }, 2500); // Volta ao texto original após 2.5 segundos
    });
});

// script.js
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
