// ===============================
// Menu responsivo (abre/fecha no celular)
// ===============================
const menuBtn = document.querySelector('.logo');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===============================
// Animação suave na rolagem
// ===============================
const links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// ===============================
// Animação de botão (feedback visual)
// ===============================
const buttons = document.querySelectorAll('button, .btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 200);
  });
});
