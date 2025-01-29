import { attr } from './utilities';
import { hoverActive } from './interactions/hover-active';
import { scrollIn } from './interactions/scroll-in';
import { load } from './interactions/load';
import { cursor } from './interactions/cursor';

document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  console.log('Local Script');
  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (gsap.Flip !== undefined) {
    gsap.registerPlugin(Flip);
  }

  //////////////////////////////
  //Custom Functions

  // Header Image Animation
  function headerScroll() {
    const triggerElement = $('.header_background-image-wrapper');
    const targetElement = $('.header_background-image');
    if (!targetElement || !triggerElement) {
      return;
    }
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top top',
        end: 'bottom top',
        ease: 'none',
        scrub: 1,
      },
      defaults: {
        // children inherit these defaults
        duration: 1,
        ease: 'none',
      },
    });
    tl.to(targetElement, {
      scale: 1.5,
    });
  }

  function navFill() {
    const pageWrap = document.querySelector('.pager-wrapper');
    const navFill = document.querySelector('.navbar_fill');
    if (!pageWrap || !navFill) return;
    // Nav Bar Fill Animation
    let tlNav = gsap.timeline({
      scrollTrigger: {
        trigger: pageWrap,
        start: 'top top',
        end: 'top -100px',
        ease: 'none',
        scrub: 1,
      },
      defaults: {
        // children inherit these defaults
        duration: 1,
        ease: 'none',
      },
    });
    tlNav.from(navFill, {
      opacity: 0,
    });
  }

  //////////////////////////////
  //Control Functions on page load
  const gsapInit = function () {
    let mm = gsap.matchMedia();
    mm.add(
      {
        //This is the conditions object
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px)  and (max-width: 991px)',
        isDesktop: '(min-width: 992px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (gsapContext) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
        //functional interactions
        load(gsapContext);
        scrollIn(gsapContext);
        cursor(gsapContext);
        // hoverActive(gsapContext);
        headerScroll();
        navFill();
        //conditional interactions
        if (!reduceMotion) {
          scrollIn(gsapContext);
        }
      }
    );
  };
  gsapInit();

  //reset gsap on click of reset triggers
  const scrollReset = function () {
    //selector
    const RESET_EL = '[data-ix-reset]';
    //time option
    const RESET_TIME = 'data-ix-reset-time';
    const resetScrollTriggers = document.querySelectorAll(RESET_EL);
    resetScrollTriggers.forEach(function (item) {
      item.addEventListener('click', function (e) {
        //reset scrolltrigger
        ScrollTrigger.refresh();
        //if item has reset timer reset scrolltriggers after timer as well.
        if (item.hasAttribute(RESET_TIME)) {
          let time = attr(1000, item.getAttribute(RESET_TIME));
          //get potential timer reset
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, time);
        }
      });
    });
  };
  scrollReset();
});
