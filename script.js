// You can add menu toggle or animations here in future
console.log("Website loaded successfully.");

  const toggleBtn = document.getElementById('toggle-mode');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // বাটনের টেক্সট চেঞ্জ করো
    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️ Light Mode';
    } else {
      toggleBtn.textContent = '🌙 Dark Mode';
    }
  });
 
  const scrollBtn = document.getElementById("scrollToTopBtn");

  // স্ক্রল করলে বাটন দেখাও
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  // ক্লিক করলে উপরে নিয়ে যাও
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const typedText = document.getElementById("typed-text");
  const cursor = document.getElementById("cursor");

  const phrases = ["Web Developer", "YouTuber", "Freelancer", "Tech Instructor"];
  let phraseIndex = 0;
  let letterIndex = 0;
  let currentPhrase = "";
  let isDeleting = false;

  function type() {
    currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedText.textContent = currentPhrase.substring(0, letterIndex--);
    } else {
      typedText.textContent = currentPhrase.substring(0, letterIndex++);
    }

    if (!isDeleting && letterIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1000); // Pause before deleting
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500); // Pause before typing next
    } else {
      setTimeout(type, isDeleting ? 50 : 100); // Speed control
    }
  }

  type(); // Start the animation
 
  





