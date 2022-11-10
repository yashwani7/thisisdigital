// function show(){
//   gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
// });
// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
// }
// show()


var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
  gsap.from(".page1-left",{
    y:100,
    scale:1,
    duration:0.9,
    
  })
  gsap.from(".page1-right >.img1",{
    x:110,
    duration:1,
    
  })
  gsap.from(".page1-right >.img2",{
    y:-70,
    duration:1,
    
  })
  gsap.from(".page2-upr > h5 ",{
    y:60,
    duration:1,
    scrollTrigger:{
      trigger:".page2-upr > h5",
      start:"top 100%",
      toggleActions:"restart none none none"
    }
  })
  gsap.from(".page2-upr > h6 ",{
    y:60,
    duration:1,
    scrollTrigger:{
      trigger:".page2-upr > h5",
      start:"top 100%",
      toggleActions:"restart none none none"
    }
  })
  gsap.from(".page2-dwn > .rt > .img1",{
    x:-80,
    duration:0.7,
    scrollTrigger:{
      trigger:".page2-dwn > .rt",
      start:"top 100%",
      toggleActions:"restart none none none"
    }
  })
  gsap.from(".page2-dwn > .rt > .img3",{
    y:150,
    duration:0.7,
    scrollTrigger:{
      trigger:".page2-dwn > .rt",
      start:"top 50%",
      toggleActions:"restart none none none"
    }
  })
  gsap.from(".page2-dwn > .rt > .img2",{
    y:-90,
    duration:0.7,
    scrollTrigger:{
      trigger:".page2-dwn > .rt",
      // start:"top 10%",
      toggleActions:"restart none none none"
    }
  })
  gsap.from(".page2-dwn > .rt > .img4",{
    y:90,
    duration:0.7,
    scrollTrigger:{
      trigger:".page2-dwn > .rt",
      start:"top 60%",
      toggleActions:"restart none none none"
    }
  })

gsap.from(".page2-dwn > .lt > p",{
  y:110,
  duration:0.7,
  scrollTrigger:{
    trigger:".page2-dwn > .lt",
    start:"top 60%",
    toggleActions:"restart none none none"
  }
})
gsap.from(".page2-dwn > .lt > .box",{
  y:110,
  duration:0.7,
  scrollTrigger:{
    trigger:".page2-dwn > .lt",
    start:"top 10%",
    toggleActions:"restart none none none"
  }
})
gsap.from(".page2 > .btm > h1",{
  scale:0,
  duration:0.7,
  scrollTrigger:{
    trigger:".page2 > .btm",
    // start:"top 30%",
    toggleActions:"restart none none none"
  }
})
gsap.from(".page4 > .box1,.box2",{
  y:90,
  duration:0.7,
  scrollTrigger:{
    trigger:".page4 > .box1",
    // start:"center",
    toggleActions:"restart none none none"
  }
})
gsap.from(".page4 > footer",{
  y:90,
  duration:0.7,
  scrollTrigger:{
    trigger:".page4 > footer",
    // start:"top 40%",
    toggleActions:"restart none none none"
  }
})
gsap.from(".page6",{
 opacity:0.1,
  duration:2,
  scrollTrigger:{
    trigger:".page6",
    // start:"center",
    toggleActions:"restart none none none"
  }
})