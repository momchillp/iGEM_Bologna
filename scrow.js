document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progress");

  if (!progressBar) return; // safety check

  // Update the progress bar width on scroll
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrolled + "%";
  });

  // Initialize in case user reloads page mid-scroll
  const initScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrolled + "%";
  };

  initScroll();
});
