window.onload = function () {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();
  tl.to(".name", { opacity: 1, duration: 3 }).from(".pic", { y: -240, duration: 1, opacity: 0 }, "-=1.9");

  gsap.to("#about_header", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
      markers: false,
    },
    duration: 2,
    opacity: 1,
  });

  gsap.to("#hello", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 60%",
      markers: false,
    },
    duration: 2,
    opacity: 1,
  });

  gsap.to("#description", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 60%",
      markers: false,
    },
    duration: 2,
    opacity: 1,
  });

  gsap.to("#several", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 50%",
      markers: false,
    },
    duration: 2,
    opacity: 1,
  });

  gsap.to(".figure", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 50%",
      markers: false,
    },
    duration: 2,
    opacity: 1,
  });

  gsap.to("#projects_header", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top center",
      markers: false,
    },
    duration: 2,
    opacity: 1,
  });

  gsap.to("#card_projects", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 50%",
      markers: false,
    },
    duration: 2,
    opacity: 1,
  });

  gsap.to("#contacts_header", {
    scrollTrigger: {
      trigger: "#contacts",
      start: "top center",
      markers: false,
    },
    duration: 2,
    opacity: 1,
  });

  gsap.to("#get_in_touch", {
    scrollTrigger: {
      trigger: "#contacts",
      start: "top 70%",
      markers: false,
    },
    duration: 2,
    opacity: 1,
  });

  gsap.to("#social_media", {
    scrollTrigger: {
      trigger: "#contacts",
      start: "top 40%",
      markers: false,
    },
    duration: 2,
    opacity: 1,
  });

  gsap.to("#footer", {
    scrollTrigger: {
      trigger: "#contacts",
      start: "top 30%",
      markers: false,
    },
    duration: 1,
    opacity: 1,
  });
};
