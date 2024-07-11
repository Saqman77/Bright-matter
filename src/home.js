import {gsap} from 'gsap';

let lastScrollTop = 0;
let scrollTop = 0
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
 scrollTop = scrollTop+window.scrollY

  if (scrollTop > lastScrollTop) {
    // Downscroll
    gsap.to('.navbar',
        {
            top: '-10%'
        })
  } else {
    // Upscroll
    navbar.style.top = '1%';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
// if (scrollTop > lastScrollTop) {
//     // Downscroll\
const tl = gsap.timeline()
// tl.from(({
//     duration: 1.5
// }))
tl.from('.navbar',
        {
            top: '-30%',
            duration: 1.5
        })

        gsap.from('.logo',
            {
                // delay: .5,
                scale: 0,
                x: '5000%',
                rotate: "150%",
                duration: 2
            }
        )

        tl.from('.content-frame',
            {
                // delay:1,
                // backdropFilter:'blur(10px)',
                // duration:3
            })

        // gsap.from('.webgl',
        //     {
        //         // backgroundColor: '#171717',
        //         scale: 0,
        //         y: '100%',
        //         // delay: 2,
        //         duration: 3
        //     }
        // )
//   } else {
//     // Upscroll
//     navbar.style.top = '1%';
//   }

//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling