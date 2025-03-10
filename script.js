gsap.registerPlugin(ScrollTrigger);

const box = document.querySelector(".box");

gsap
  .timeline({
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      toggleActions: "play  resume reverse",
    },
  })
  .to(box, { opacity: 1, duration: 0.5 }) // Fade in
  .to(box, { y: -100, x: -1000, duration: 0.1, ease: "bounce" }) // Bounce up
  .to(box, { rotation: 360, duration: 1 }); // Spin
