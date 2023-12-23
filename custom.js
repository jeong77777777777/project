// --------------------------------- menu page

const menuIcon = document.querySelector('.menu_icon');
const menuPage = document.querySelector('.menu');
const menuClose = document.querySelector('.close');

menuIcon.addEventListener('click', function () {
  menuPage.style.display = 'block';
});

menuClose.addEventListener('click', function () {
  menuPage.style.display = 'none';
});

// document.addEventListener('DOMContentLoaded', function () {
//   const container = document.getElementById('scrollContainer');
//   const boxes = document.querySelectorAll('.hw');
//   const boxWidth = 1920; // 이동할 가로 거리

//   let currentIndex = 0;

//   // 휠 이벤트 처리
//   container.addEventListener('wheel', function (event) {
//     event.preventDefault();

//     // 휠 방향에 따라 인덱스 조절
//     currentIndex += event.deltaY > 0 ? 1 : -1;

//     // 인덱스를 범위로 유지
//     currentIndex = Math.min(Math.max(currentIndex, 0), boxes.length - 1);

//     // 각 요소를 이동
//     const translateX = -currentIndex * boxWidth;
//     container.style.transition = 'transform 0.3s ease'; // 스크롤 애니메이션 추가
//     container.style.transform = `translateX(${translateX}px)`;

//     // 스크롤이 완료되면 transition을 초기화
//     setTimeout(() => {
//       container.style.transition = 'none';
//     }, 300);
//   });
// });

// --------------------------------- hardware page 가로 스크롤

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('.hw');

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.hardware',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // snap: {
    //   snapTo: 1 / (sections.length - 1),
    //   duration: 0.1,
    //   delay: 0.1,
    //   ease: 'power1.inOut',
    // },
    end: () => '+=' + document.querySelector('.hardware').offsetWidth,
  },
});

gsap.fromTo(
  '.OLED_mask', // 선택자를 해당 섹션에 맞게 변경
  { scale: 0, x: 100 }, // 시작 스타일
  {
    scale: 1,
    x: 0,
    duration: 1,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: '.hardware01',
      // start: '+=100',
      toggleActions: 'play none',
    },
  } // 종료 스타일
);

// --------------------------------------------- hw03 색상 클릭시 변경

const colorPicks = document.querySelectorAll('.pickcolor > *');
const liteImage = document.querySelector('.lite_gray');
const circles = document.querySelectorAll('.hardware03_gray > .circles > *');
const ntdColors = document.querySelectorAll('#Nintendo', '#Nintendo_s');
const swtColors = document.querySelectorAll('#Switch', '#Switch_s');
const idColor = document.querySelector('#or03');

colorPicks.forEach(function (colorPick) {
  colorPick.addEventListener('click', function () {
    const currentSelected = document.getElementById('selected');
    if (currentSelected) {
      currentSelected.removeAttribute('id');
    }

    // 클릭한 대상에 selected 클래스 추가
    colorPick.id = 'selected';

    var colorClassName = colorPick.className;

    var newImagePath = 'img/hardware/lite_' + colorClassName + '.svg';

    liteImage.src = newImagePath;

    circles.forEach(function (circle, index) {
      var newCirclePath =
        'img/hardware/circle_' + colorClassName + '0' + (index + 1) + '.svg';
      circle.src = newCirclePath;
    });

    var newIdPath = 'img/hardware/or03_' + colorClassName + '.svg';

    idColor.src = newIdPath;

    // Nintendo와 Switch의 color 속성 변경
    ntdColors.forEach(function (element) {
      switch (colorClassName) {
        case 'gray':
          element.style.color = '#4D4D4D';
          break;
        case 'yellow':
          element.style.color = '#F0AD00';
          break;
        case 'pink':
          element.style.color = '#FF3B4A';
          break;
        case 'blue':
          element.style.color = '#072385';
          break;
        case 'cyan':
          element.style.color = '#00B4B7';
          break;
        default:
          element.style.color = '#4D4D4D';
      }
    });

    swtColors.forEach(function (element) {
      switch (colorClassName) {
        case 'gray':
          element.style.color = '#4D4D4D';
          break;
        case 'yellow':
          element.style.color = '#F0AD00';
          break;
        case 'pink':
          element.style.color = '#FF3B4A';
          break;
        case 'blue':
          element.style.color = '#072385';
          break;
        case 'cyan':
          element.style.color = '#00B4B7';
          break;
        default:
          element.style.color = '#4D4D4D';
      }
    });
  });
});

// -------------------------------------- main01 scroll

gsap.registerPlugin(ScrollTrigger);

const main01 = gsap.timeline({
  scrollTrigger: {
    trigger: '#main01',
    start: 'top 300px',
    end: 'bottom 900px',
    scrub: 1,
  },
});

// Add animations to the timeline
for (let i = 1; i <= 115; i++) {
  main01.to('#main01', {
    duration: 0.1,
    onUpdate: updateImage,
    onUpdateParams: [i],
  });
}

// Function to update the image source based on the index
function updateImage(index) {
  const mainImage = document.getElementById('main01');
  const imagePath = `img/main01/${String(index).padStart(2, '0')}.png`;
  mainImage.src = imagePath;
}

// ------------------------------------------- zelda switch effect

var game = gsap.timeline({
  scrollTrigger: {
    trigger: '.game',
    start: 'top top',
    end: '+=20000',
    // end: "bottom bottom",
    scrub: 1,
    // startTrigger: "#fixedContent",
    pin: true,
    // endStart: "top center",
    ease: 'slow(0.7, 0.7, false)',
    // onComplete: function () {
    //   // 애니메이션이 끝난 후에 실행되는 콜백 함수
    //   // 여기서 pin 속성을 false로 변경
    //   gsap.set('.game', { pin: false });
    // },
    // gameChange,
  },
});

game.fromTo(
  '.switchImage > .s_right',
  { y: 0 },
  { y: 161, duration: 10, ease: 'slow(0.7, 0.7, false)' },
  0
);

game.fromTo('.switchImage', { scale: 1 }, { scale: 1.1, duration: 10 });

game.fromTo('.switch_bg', { opacity: 0 }, { opacity: 1, duration: 10 });

game.fromTo('.select', { opacity: 0 }, { opacity: 1, duration: 10 });
// game.fromTo(
//   '.switch_bg .thumbnail, .select',
//   { opacity: 1 },
//   { opacity: 0, duration: 10 },
//   40
// );
// game.fromTo(
//   '.switch_bg',
//   { backgroundColor: '#ffffff' },
//   { backgroundColor: 'black', duration: 3 },
//   40
// );
game.fromTo('.zelda_video', { opacity: 0 }, { opacity: 1, duration: 3 }, 40);
game.fromTo('.zelda_logo', { opacity: 0 }, { opacity: 1, duration: 10 });
game.fromTo('.zelda_logo', { opacity: 1 }, { opacity: 0, duration: 10 });
game.fromTo(
  '.switchImage',
  { scale: 1.1 },
  { scale: 2.53, duration: 10, ease: 'slow(0.7, 0.7, false)' },
  90
);
game.fromTo(
  '.switch_bg, .zelda_video',
  { scale: 1 },
  { scale: 2.3, duration: 10, ease: 'slow(0.7, 0.7, false)' },
  90
);

// --------------------- zelda full page effect -------------------

const zeldaVideo = document.querySelector('.zelda_video');

zeldaVideo.playbackRate = 0.5;

const zeldaRing = document.querySelector('.zelda_cnt > img:nth-child(1)');

gsap.to(zeldaRing, {
  rotateY: 540,
  duration: 0.5,
  repeat: -1, // 무한 반복
  delay: 3, // 시작 딜레이
  repeatDelay: 3, // 반복 사이 딜레이
  ease: 'power1.inOut', // 타이밍 함수 설정
});

game.fromTo('.bg_shadow', { opacity: 0 }, { opacity: 1, duration: 5 }, 130);
game.fromTo(
  '.card > *, .zelda_cnt > img:nth-child(1), .zelda_text, .footline, .zd_ch',
  { opacity: 0 },
  { opacity: 1, duration: 5 },
  140
);

game.fromTo(
  '.zelda_cnt .factor',
  { opacity: 0 },
  { opacity: 1, duration: 15 },
  140
);
// -------------------------------------- card01 rotate
game.fromTo('.card01', { rotateY: 0 }, { rotateY: 90, duration: 5 }, 160);
game.fromTo(
  '.card01bhd, .card01body, .create, .eyes, .line_c',
  { rotateY: -90 },
  { rotateY: 0, duration: 5 },
  170
);

game.fromTo(
  '.card01bhd, .card01body, .create, .eyes, .line_c',
  { rotateY: 0 },
  { rotateY: 90, duration: 5 },
  190
);
game.fromTo('.card01', { rotateY: -90 }, { rotateY: 0, duration: 5 }, 200);

// -------------------------------------- card 위치 변경_1

game.fromTo(
  '.card01',
  { x: 0, y: 0, zIndex: 100, scale: 1 },
  { x: -625, y: 60, zIndex: 0, duration: 10, scale: 0.46 },
  210
);

game.fromTo(
  '.card02',
  { x: 0, y: 0, zIndex: 70, scale: 1 },
  { x: -637, y: -59, zIndex: 120, scale: 2.2, duration: 10 },
  210
);

game.fromTo(
  '.card03',
  { x: 0, zIndex: 10 },
  { x: 1261, zIndex: 0, duration: 10 },
  210
);

// -------------------------------------- card02 rotate

game.fromTo('.card02', { rotateY: 0 }, { rotateY: 90, duration: 5 }, 250);
game.fromTo(
  '.card02bhd, .card02body, .explore, .eyes, .line_c',
  { rotateY: -90 },
  { rotateY: 0, duration: 5 },
  260
);

game.fromTo(
  '.card02bhd, .card02body, .explore, .eyes, .line_c',
  { rotateY: 0 },
  { rotateY: 90, duration: 5 },
  290
);
game.fromTo('.card02', { rotateY: -90 }, { rotateY: 0, duration: 5 }, 300);

// -------------------------------------- card 위치변경_2

game.fromTo(
  '.card01',
  { x: -625, y: 60, zIndex: 0, scale: 0.46 },
  { x: 632, zIndex: 0, duration: 10 },
  350
);

game.fromTo(
  '.card02',
  { x: -637, y: -59, zIndex: 100, scale: 2.2 },
  { x: -1265, y: 0, scale: 1, zIndex: 10, duration: 10 },
  350
);
game.fromTo(
  '.card03',
  { x: 1261, zIndex: 100 },
  { scale: 2.2, x: 627, y: -55, zIndex: 10000, duration: 10 },
  350
);

// -------------------------------------- card03 rotate
game.fromTo('.card03', { rotateY: 0 }, { rotateY: 90, duration: 5 }, 400);
game.fromTo(
  '.card03bhd, .card03body, .discover, .eyes, .line_c',
  { rotateY: -90 },
  { rotateY: 0, duration: 5 },
  410
);

game.fromTo(
  '.card03bhd, .card03body, .discover, .eyes, .line_c',
  { rotateY: 0 },
  { rotateY: 90, duration: 5 },
  440
);
game.fromTo('.card03', { rotateY: -90 }, { rotateY: 0, duration: 5 }, 450);

// -------------------------------------- 배경 text effect

game.fromTo(
  '.zelda_text > img:nth-child(1)',
  { x: 0 },
  { x: -500, duration: 350 },
  140
);
game.fromTo(
  '.zelda_text > img:nth-child(2)',
  { x: 0 },
  { x: 100, duration: 350 },
  140
);

// -------------------------------------- zelda id effect

game.fromTo('.zd_ch', { x: 0 }, { x: 1567, duration: 310 }, 150);

game.fromTo(
  '.footline path',
  { scaleX: 1 },
  { scaleX: 0.1, duration: 300 },
  150
);

// -------------------------------------- zelda game end

game.fromTo(
  '.switchImage',
  { scale: 2.53 },
  { scale: 1.1, duration: 20, ease: 'slow(0.7, 0.7, false)' },
  470
);

game.fromTo(
  '.switch_bg, .zelda_video',
  { scale: 2.3, opacity: 1 },
  { scale: 1, opacity: 0, duration: 20, ease: 'slow(0.7, 0.7, false)' },
  470
);

game.fromTo('.zelda_cnt', { opacity: 1 }, { opacity: 0, duration: 5 }, 470);

// ----------------------- animal crossing open

game.fromTo(
  '.switch_bg',
  { zIndex: 0, opacity: 0 },
  { zIndex: 2000, opacity: 1, duration: 10 },
  480
);

game.fromTo('.select', { x: 0 }, { x: 248, duration: 10 }, 500);
game.fromTo('.thumbnail', { x: 0 }, { x: -70, duration: 10 }, 500);

game.fromTo('.ac_video', { opacity: 0 }, { opacity: 1, duration: 3 }, 530);
game.fromTo('.ac_logo', { opacity: 0 }, { opacity: 1, duration: 10 }, 540);
game.fromTo('.ac_logo', { opacity: 1 }, { opacity: 0, duration: 10 }, 560);
game.fromTo(
  '.switchImage',
  { scale: 1.1 },
  { scale: 2.53, duration: 10, ease: 'slow(0.7, 0.7, false)' },
  570
);
game.fromTo(
  '.switch_bg, .ac_video',
  { scale: 1 },
  { scale: 2.3, duration: 10, ease: 'slow(0.7, 0.7, false)' },
  570
);

// ------------------------- animal crossing full page effect

game.fromTo(
  '.ac_bg01',
  { clipPath: 'circle(0% at 50% 50%)' },
  { clipPath: 'circle(100% at 50% 50%)', duration: 15 }
);

game.fromTo('.ac_bg_s', { opacity: 0 }, { opacity: 1, duration: 5 }, 590);
game.fromTo(
  '.house_main',
  { scale: 0 },
  { scale: 1, duration: 8, ease: 'back.out' },
  590
);
game.fromTo(
  '.house_cap',
  { scale: 0 },
  { scale: 1, duration: 8, ease: 'back.out' },
  591
);
game.fromTo(
  '.textballon',
  { scale: 0 },
  { scale: 1, duration: 10, ease: 'back.out' },
  590
);
game.fromTo(
  '.id_house',
  { y: -200 },
  { y: 0, duration: 10, ease: 'power2.out' },
  595
);
game.fromTo(
  '.yeoul',
  { y: 700 },
  { y: 0, duration: 10, ease: 'back.out' },
  593
);

game.to('.ac_video', { display: 'none' });

// animal house body writing effect
gsap.registerPlugin(TextPlugin);

game.to(
  '.house_body',
  {
    duration: 10,
    text: "In a room that's more spacious, you can line up your favorite furniture. Let's make an ideal room.",
  },
  600
);

// ----------------------------- DIY change effect

game.fromTo(
  '.yeoul',
  { x: 0, y: 0 },
  { x: 1183, y: -321, duration: 10, ease: 'back.out' },
  627
);
game.fromTo('.textballon', { x: 0 }, { x: -72, duration: 10 }, 625);
game.fromTo('.id_house', { y: 0 }, { y: -200, duration: 10 }, 620);

game.fromTo(
  '.house_main',
  { scale: 1 },
  { scale: 0, duration: 8, ease: 'back.in' },
  620
);

game.fromTo(
  '.house_cap',
  { scale: 1 },
  { scale: 0, duration: 8, ease: 'back.in' },
  620
);
game.fromTo('.house_body', { scale: 1 }, { scale: 0, duration: 2 }, 620);

game.fromTo(
  '.ac_bg02',
  { clipPath: 'circle(0% at 50% 50%)' },
  { clipPath: 'circle(100% at 50% 50%)', duration: 15 },
  620
);

game.to(
  '.DIY_body',
  {
    duration: 10,
    text: 'Based on the recipe, DIY makes anything by hand. You can get a recipe from a message bottle or balloon.',
  },
  630
);

game.fromTo(
  '.id_DIY',
  { y: -200 },
  { y: -5, duration: 10, ease: 'back.out' },
  630
);

game.fromTo(
  '.DIY_cap',
  { scale: 0 },
  { scale: 1, duration: 8, ease: 'back.out' },
  628
);

game.fromTo(
  '.DIY_main',
  { scale: 0 },
  { scale: 1, duration: 8, ease: 'back.out' },
  627
);
// ----------------------------- fishing change effect
