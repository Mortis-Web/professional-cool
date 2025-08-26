const nav = document.querySelector("#navbar");
const navContainer = document.querySelector("#nav_container");
const langChanger = document.querySelector("#lang_changer");
const langChangerList = document.querySelectorAll("#lang_changer span");

const lang = document.querySelector("#lang");
const activeLang = document.querySelector("#active_lang");

// Scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.classList.add("floating_nav");
    navContainer.style.padding = "10px 1rem";
  } else {
    nav.classList.remove("floating_nav");
    navContainer.style.padding = "1rem";
  }
});

lang.addEventListener("click", (e) => {
  e.stopPropagation();
  langChanger.classList.toggle("hide_lang_changer");
});

langChangerList.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();
    activeLang.textContent = option.textContent;
    langChanger.classList.add("hide_lang_changer");
  });
});

document.addEventListener("click", () => {
  langChanger.classList.add("hide_lang_changer");
});
function animateCounter(el, target) {
  let duration = 1500; // total time (ms)
  let start = 0;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);

    // interpolate value
    const value = Math.floor(progress * target);
    el.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target; // ensure exact
    }
  }

  requestAnimationFrame(step);
}

const counters = document.querySelectorAll("h2");
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);
        animateCounter(el, target);
        obs.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((el) => observer.observe(el));
counters.forEach((counter) => observer.observe(counter));

const selectService = document.querySelector("#select_service");
const options = document.querySelector("#options");
const optionsList = document.querySelectorAll("#options span");
const inputField = selectService.querySelector("input");

selectService.addEventListener("click", (e) => {
  e.stopPropagation();
  options.classList.toggle("hide_lang_changer");
});

optionsList.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();
    inputField.value = option.textContent;
    options.classList.add("hide_lang_changer");
  });
});

document.addEventListener("click", () => {
  options.classList.add("hide_lang_changer");
});

const openMenuBtn = document.querySelector("#menu");
const menuOverlay = document.querySelector("#side_menu");
const menuOverlayList = document.querySelector("#side_menu article");
const closeMenuBtn = document.querySelector("#close_menu");

const showSideBar = () => {
  menuOverlay.setAttribute("aria-hidden", "false"); // visible
  menuOverlayList.classList.add("show_menu");
  menuOverlayList.classList.remove("hide_menu");
  document.body.classList.add("noscroll");
};

const hideSideBar = () => {
  menuOverlay.setAttribute("aria-hidden", "true"); // hidden
  menuOverlayList.classList.add("hide_menu");
  menuOverlayList.classList.remove("show_menu");
  document.body.classList.remove("noscroll");
};
openMenuBtn.addEventListener("click", showSideBar);
closeMenuBtn.addEventListener("click", hideSideBar);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") hideSideBar();
});

menuOverlay.addEventListener("click", (e) => {
  if (!menuOverlayList.contains(e.target) && e.target !== openMenuBtn) {
    hideSideBar();
  }
});
