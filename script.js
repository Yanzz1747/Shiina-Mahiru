let lastScrollTop = 0;
const topHeader = document.getElementById('topHeader');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah → Expand + mengecil
    topHeader.classList.add('scrolled');
  } else {
    // Scroll ke atas → Kembali ke ukuran awal
    topHeader.classList.remove('scrolled');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

