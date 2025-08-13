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
    navContainer.style.padding = "10px 15px";
  } else {
    nav.classList.remove("floating_nav");
    navContainer.style.padding = "25px 15px";
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
  let count = 0;
  let speed = Math.ceil(target / 100); // speed control
  let interval = setInterval(() => {
    count += speed;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    el.textContent = (target > 100 ? "+" : "") + count;
  }, 20);
}
const counters = document.querySelectorAll(".statis h2");
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"));
        animateCounter(el, target);
        obs.unobserve(el); // run only once
      }
    });
  },
  { threshold: 0.5 }
);

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
  menuOverlayList.classList.add("show_menu");
  menuOverlay.style.zIndex = "1000";
  menuOverlay.style.opacity = "1";
};

const hideSideBar = () => {
  menuOverlayList.classList.remove("show_menu");
  menuOverlay.style.zIndex = "-1000";
  menuOverlay.style.opacity = "0";
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
