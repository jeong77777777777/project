// Section01 Animation - Genensis Hero

window.scrollTo(0, 0);

//기준 설정

//screen and (min-width: 1440px)에 해당한다.

ScrollTrigger.saveStyles('.mobile, .desktop');

ScrollTrigger.matchMedia({
  '(min-width: 1600px)': function () {
    var ani01 = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero', // ScrollTrigger 지점
        start: 'top top', // 에니메이션 시작 지점 (트리거 상단 지점이, 화면의 중간 높이 지점일 때)
        end: 'bottom center', // 에니메이션 끝 지점 (트리거 하단 지점이, 화면의 Top 지점일 때)
        pin: true,
        markers: true, // Scroll Trigger 영역 표시
        scrub: true,
        toggleActions: 'play none restart none', // 기본값 (onEnter, onLeave, OnEnterBack, onLeaveBack)
        ease: 'easeOutBack',
        // pin: true,   // pin the trigger element while active
        // start: "top top", // when the top of the trigger hits the top of the viewport
        // end: "+=500", // end after scrolling 500px beyond the start
        // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // snap: {
        //     snapTo: "labels", // snap to the closest label in the timeline
        //     duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //     ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      },
    });
    ani01.fromTo(
      '.play > img:nth-child(1)',
      { x: -1125 },
      { x: -53, duration: 4 },
      0
    );
    ani01.fromTo(
      '.play > img:nth-child(2)',
      { x: -810 },
      { x: 0, duration: 4 },
      0
    );
    ani01.fromTo(
      '.play > img:nth-child(3)',
      { x: 1910 },
      { x: 0, duration: 4 },
      0
    );
    ani01.fromTo(
      '.play > img:nth-child(4)',
      { x: 3300 },
      { x: 0, duration: 4 },
      0
    );
    ani01.fromTo(
      '.s_mario, .cap, .main_text, .hero > img, .icon > img:nth-child(2)',
      { y: 1080 },
      { y: 0, duration: 4 },
      0
    );
    // icon
    ani01.fromTo(
      '.icon > img:nth-child(1)',
      { y: -150 },
      { y: 0, duration: 4 },
      0
    );
    ani01.fromTo(
      '.icon > img:nth-child(3)',
      { x: -600 },
      { x: 0, duration: 2 },
      0
    );
    ani01.fromTo(
      '.icon > img:nth-child(4)',
      { y: -400 },
      { y: 0, duration: 2 },
      0
    );
    ani01.fromTo(
      '.icon > img:nth-child(5), .icon > img:nth-child(6)',
      { y: 1300 },
      { y: 0, duration: 2 },
      0
    );
  },
});
