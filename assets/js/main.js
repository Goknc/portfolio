window.addEventListener("load", function () {
  let e = document.querySelector(".loader");
  e.classList.add("loaded");
}),
  document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    document.querySelector(".nk-back-to-top").addEventListener("click", () => {
      (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
    });
    let e = document.querySelector(".to-be-fixed");
    document.addEventListener("scroll", () => {
      window.scrollY > 100
        ? (e.classList.add("fixed"),
          (document.body.style.paddingTop =
            e.getBoundingClientRect().height + "px"))
        : (e.classList.remove("fixed"), (document.body.style.paddingTop = 0));
    });
    let t = document.querySelector(".nk-mobile-menu.open"),
      r = document.querySelector(".nk-mobile-menu.close"),
      s = document.querySelector(".nk-header-offcanvas");
    t.addEventListener("click", (e) => {
      e.stopPropagation(), s.classList.add("active");
    }),
      document.addEventListener("click", (e) => {
        let t = s.contains(e.target);
        t || s.classList.remove("active");
      }),
      r.addEventListener("click", () => {
        s.classList.remove("active");
      });
    let o = document.querySelectorAll(".nk-skill__percent");
    o.forEach((e) => {
      let t = parseInt(e.getAttribute("data-value"), 10),
        r = 0,
        s = new IntersectionObserver((o) => {
          o.forEach((o) => {
            if (o.isIntersecting) {
              let n = () => {
                r < t &&
                  (r++, (e.textContent = `${r}%`), requestAnimationFrame(n));
              };
              n(), s.unobserve(e);
            }
          });
        });
      s.observe(e);
    });
    let n = document.querySelectorAll(".reveal"),
      l = { root: null, rootMargin: "0px", threshold: 0.5 },
      i = (e, t) => {
        e.forEach((e) => {
          if (e.isIntersecting) {
            let r = e.target.querySelector("img"),
              s = gsap.timeline();
            s.set(e.target, { autoAlpha: 1 }),
              s.from(e.target, 0.8, { xPercent: -100, ease: Power2.out }),
              s.from(r, 0.8, {
                xPercent: 100,
                scale: 1.3,
                delay: -0.8,
                ease: Power2.out,
              }),
              t.unobserve(e.target);
          }
        });
      },
      a = new IntersectionObserver(i, l);
    n.forEach((e) => {
      a.observe(e);
    });
    let c = document.querySelectorAll(".text-animate"),
      d = { root: null, rootMargin: "0px", threshold: 0.5 },
      u = new IntersectionObserver((e, t) => {
        e.forEach((e) => {
          e.isIntersecting && (v(e.target), t.unobserve(e.target));
        });
      }, d);
    function v(e) {
      let t = new SplitType(e, { types: "words,chars" });
      gsap.from(t.chars, {
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
        rotationY: 90,
        stagger: { amount: 0.8 },
      });
    }
    c.forEach((e) => {
      u.observe(e);
    });
    var $ = document.querySelector(".cursor"),
      p = document.querySelector(".cursor-follower"),
      g = 0,
      m = 0,
      f = 0,
      h = 0;
    function w() {
      let e = new Lenis({ smoothWheel: !0, duration: 1.2 });
      gsap.ticker.add((t) => {
        e.raf(1e3 * t);
      }),
        gsap.ticker.lagSmoothing(0);
    }
    gsap.to({}, 0.005, {
      repeat: -1,
      onRepeat: function () {
        (g += (f - g) / 9),
          (m += (h - m) / 9),
          gsap.set(p, { css: { left: g - 12, top: m - 12 } }),
          gsap.set($, { css: { left: f, top: h } });
      },
    }),
      document.addEventListener("mousemove", function (e) {
        (f = e.clientX), (h = e.clientY);
      }),
      document.querySelectorAll("a, button").forEach((e) => {
        e.addEventListener("mouseenter", function () {
          $.classList.add("active"), p.classList.add("active");
        }),
          e.addEventListener("mouseleave", function () {
            $.classList.remove("active"), p.classList.remove("active");
          });
      }),
      sal({ threshold: 0.2 }),
      w();
    let y = document.querySelectorAll(".nk-service");
    y.forEach((e) => {
      e.addEventListener("mouseenter", (e) => {
        e.currentTarget.classList.add("active");
      }),
        e.addEventListener("mouseleave", (e) => {
          e.currentTarget.classList.remove("active");
        }),
        e.addEventListener("mousemove", function (t) {
          let r = t.clientX,
            s = t.clientY,
            o = document.querySelectorAll(".nk-service__media img"),
            n = e.getBoundingClientRect();
          gsap.to(o, {
            x: (r - n.left - n.width / 2) * 1.14 + "px",
            y: (s - n.top - n.height / 2) * 1.14 + "px",
            ease: "power1.out",
            duration: 0.3,
          });
        });
    }),
      new Swiper(".nk-testimonial-slider", {
        spaceBetween: 24,
        slidesPerView: 2,
        loop: !0,
        autoplay: !0,
        speed: 2500,
        navigation: {
          prevEl: ".nk-testimonial-slider__nav .prev",
          nextEl: ".nk-testimonial-slider__nav .next",
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1.4, centeredSlides: !0 },
          768: { slidesPerView: 2 },
        },
      }),
      new Swiper(".nk-blogs-slider", {
        spaceBetween: 24,
        slidesPerView: 3,
        loop: !0,
        autoplay: !0,
        watchSlidesProgress: !0,
        navigation: {
          prevEl: "#nk-blogs-slider-nav .prev",
          nextEl: "#nk-blogs-slider-nav .next",
        },
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 15 },
          480: { slidesPerView: 1.3, centeredSlides: !0 },
          576: { slidesPerView: 1.5, centeredSlides: !0 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        },
      });
  });
