// HERO SECTION SCRIPT
document.addEventListener("DOMContentLoaded", function () {
  // Typing Effect
  const typedText = document.getElementById("typed-text");
  const phrases = ["World-Class Education.", "Innovation & Research.", "A Future of Excellence."];
  let index = 0, charIndex = 0;

  function typeText() {
      if (charIndex < phrases[index].length) {
          typedText.innerHTML += phrases[index].charAt(charIndex);
          charIndex++;
          setTimeout(typeText, 100);
      } else {
          setTimeout(eraseText, 2000);
      }
  }

  function eraseText() {
      if (charIndex > 0) {
          typedText.innerHTML = phrases[index].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(eraseText, 50);
      } else {
          index = (index + 1) % phrases.length;
          setTimeout(typeText, 500);
      }
  }
  typeText();

  // Dynamic Counters
  function animateCounter(id, target) {
      let count = 0;
      const speed = 50;
      const increment = Math.ceil(target / speed);
      const element = document.getElementById(id);

      const interval = setInterval(() => {
          count += increment;
          if (count >= target) {
              count = target;
              clearInterval(interval);
          }
          element.textContent = count;
      }, 20);
  }

  setTimeout(() => {
      animateCounter("students-count", 1000);
      animateCounter("courses-count", 50);
      animateCounter("alumni-count", 3000);
  }, 1000);

  // 3D Rotating Globe Effect
  const globe = document.getElementById("globe");
  document.addEventListener("mousemove", (e) => {
      const rotateX = (e.clientY / window.innerHeight) * 360;
      const rotateY = (e.clientX / window.innerWidth) * 360;
      globe.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  // Particle Background Effect
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  for (let i = 0; i < 100; i++) {
      particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          dx: Math.random() * 2 - 1,
          dy: Math.random() * 2 - 1,
      });
  }

  function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      particles.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
      });
  }

  function updateParticles() {
      particles.forEach(p => {
          p.x += p.dx;
          p.y += p.dy;
          if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
  }

  function animateParticles() {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animateParticles);
  }
  animateParticles();

  window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  });
});



// ABOUT SECTION SCRIPT
function animateCounter(id, target) {
  let count = 0;
  const speed = 40; 
  const increment = Math.ceil(target / speed);
  const element = document.getElementById(id);
  
  if (!element) return;

  const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
          count = target;
          clearInterval(interval);
      }
      element.textContent = count;
  }, 20);
}

// Run animation only when the section is visible
function startCounterAnimation(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          animateCounter("faculty-count", 50);
          animateCounter("student-count", 10);
          animateCounter("awards-count", 50);
          observer.disconnect(); // Stop observing after triggering
      }
  });
}

const counterObserver = new IntersectionObserver(startCounterAnimation, { threshold: 0.4 });
counterObserver.observe(document.querySelector("#about"));


// COURSES SECTION SCRIPTS
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".course-card");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.animation = "fade-slide-up 1s ease-out forwards";
          }
      });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});

//FACILTIES SECTION SCRIPTS//
document.addEventListener("DOMContentLoaded", function () {
    const facilityCards = document.querySelectorAll(".facility-card");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "fade-slide-up 1s ease-out forwards";
            }
        });
    }, { threshold: 0.3 });

    facilityCards.forEach(card => observer.observe(card));
});

//Back to Top button//
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";
        backToTop.style.transform = "scale(1)";
    } else {
        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";
        backToTop.style.transform = "scale(0)";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

//nav bar scripts//
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});