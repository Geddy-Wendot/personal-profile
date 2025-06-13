document.addEventListener("DOMContentLoaded", () => {
  const words = ["Initializing G-Vector Protocol...", "Loading Cyber Arsenal...", "Booting Neural Grid...", "Ready."];
  let i = 0, j = 0, currentWord = [], isDeleting = false;
  const typewriter = document.getElementById("typewriter");

  function type() {
    typewriter.innerHTML = currentWord.join("");
    if (!isDeleting && j <= words[i].length) {
      currentWord.push(words[i][j]);
      j++;
    }
    if (isDeleting && j <= words[i].length) {
      currentWord.pop(words[i][j]);
      j--;
    }
    if (j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
    if (isDeleting && j === 0) {
      currentWord = [];
      isDeleting = false;
      i = (i + 1) % words.length;
    }
    setTimeout(type, isDeleting ? 50 : 150);
  }
  type();

  const toggleButton = document.getElementById("modeToggle");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });

  const reveals = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    for (let el of reveals) {
      const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    }
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

