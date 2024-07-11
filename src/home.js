import {gsap} from 'gsap';

let lastScrollTop = 0;
let scrollTop = 0
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
 scrollTop = window.scrollY

  if (scrollTop > lastScrollTop) {
    // Downscroll
    gsap.to('.navbar',
        {
            top: '10%'
        })
  } else {
    // Upscroll
    navbar.style.top = '1%';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
// if (scrollTop > lastScrollTop) {
//     // Downscroll
    gsap.from('.navbar',
        {
            top: '-30%',
            duration: 1.5
        })

        gsap.from('.logo',
            {
                delay: 1,
                scale: 0,
                x: '5000%',
                rotate: "150%",
                duration: 2
            }
        )

        gsap.from('body',
            {
                backgroundColor: '#171717',
                // delay: 2,
                duration: 3
            }
        )
//   } else {
//     // Upscroll
//     navbar.style.top = '1%';
//   }

//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling