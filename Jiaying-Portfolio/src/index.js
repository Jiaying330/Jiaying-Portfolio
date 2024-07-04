const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  { threshold: 0.1 }
  // {
  //   rootMargin: "-20%",
  // }
);
console.log(document.querySelectorAll("div"));
const sections = document.querySelectorAll(".section-container");
console.log(sections);
sections.forEach((section) => {
  observer.observe(section);
});
