document.addEventListener("DOMContentLoaded", () => {
  // ⚡ Typewriter Boot Sequence
  const typewriter = document.getElementById("typewriter");
  const words = [
    "Initializing G-Vector Protocol...",
    "Loading Cyber Arsenal...",
    "Booting Neural Grid...",
    ">> Ready for Deployment <<"
  ];
  let i = 0, j = 0, isDeleting = false, currentWord = [];

  function typeGlitch() {
    typewriter.innerHTML = currentWord.join("");

    if (!isDeleting && j < words[i].length) {
      currentWord.push(words[i][j++]);
    } else if (isDeleting && j > 0) {
      currentWord.pop();
      j--;
    }

    if (!isDeleting && j === words[i].length) {
      isDeleting = true;
      setTimeout(typeGlitch, 1200);
      return;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(typeGlitch, isDeleting ? 50 : 130);
  }

  typeGlitch();

  // 🌗 Mode Toggle + Terminal Overlay
  const toggleButton = document.getElementById("modeToggle");
  const terminal = document.getElementById("terminalOverlay");
  const terminalNoise = document.getElementById("terminalNoise");
  const NOISE_CHARS = "█▒▓░#%&@".split("");

  const applyGlitchModeLabel = (mode) => {
    toggleButton.textContent =
      mode === "light" ? "☀ Professional Mode" : "💻 Hacker Mode";
  };

  const glitchToggleEffect = (button) => {
    button.classList.add("glitch");
    setTimeout(() => button.classList.remove("glitch"), 500);
  };

  const showTerminalOverlay = () => {
    terminal.classList.add("show");

    // 🧪 Generate ASCII noise
    const noise = Array.from({ length: 800 }, () =>
      NOISE_CHARS[Math.floor(Math.random() * NOISE_CHARS.length)]
    ).join("");
    terminalNoise.textContent = noise;

    // ⏳ Auto-hide terminal after 2.5 seconds
    setTimeout(() => {
      terminal.classList.remove("show");
    }, 2500);

    // 🎧 Optional: Play glitch sound
    // playGlitchSound();
  };

  // 🔁 Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    applyGlitchModeLabel(savedTheme);
  }

  toggleButton.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");
    const mode = isLight ? "light" : "dark";
    localStorage.setItem("theme", mode);
    applyGlitchModeLabel(mode);
    glitchToggleEffect(toggleButton);
    showTerminalOverlay();
  });

  // ✨ Reveal on Scroll
  const reveals = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    for (let el of reveals) {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    }
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // 🔁 Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 🎧 Glitch SFX (disabled by default, enable if you have glitch.mp3)
  function playGlitchSound() {
    const audio = new Audio("assets/glitch.mp3");
    audio.volume = 0.6;
    audio.play().catch(() => {});
  }
});
