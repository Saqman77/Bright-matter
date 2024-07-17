import {gsap} from 'gsap';

let lastScrollTop = 0;
const body = document.body
// let scrollTop = 0
// const debounce = (func, wait = 10, immediate = true) => {
//     let timeout;
//     return function () {
//         const context = this, args = arguments;
//         const later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };

window.addEventListener('scroll', () => {
    // console.log(window.scrollY)
 const scrollTop = window.scrollY
 if (scrollTop <= 0) 
    {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-up-btn")
        body.classList.remove("scroll-down-btn")
    }
if (scrollTop > lastScrollTop && !body.classList.contains("scroll-down"))
    {
        body.classList.remove("scroll-up")
        body.classList.remove("scroll-up-btn")
        body.classList.add("scroll-down")
        body.classList.add("scroll-down-btn")
    }
if (scrollTop < lastScrollTop && body.classList.contains("scroll-down"))
    {
        body.classList.remove("scroll-down")
        body.classList.remove("scroll-down-btn")
        body.classList.add("scroll-up")
        body.classList.add("scroll-up-btn")
    }
    lastScrollTop = scrollTop
//   if (scrollTop > lastScrollTop) {
//     // Downscroll
//     gsap.to('.navbar',
//         {
//             // duration: 1,
//             delay:1,
//             top: '-10%',
//             // width: '10%'
//         })
//     gsap.to('.navbar',
//         {
//             // duration: 1,
//             // top: '-10%',
//             left:'95%',
//             width: '6vw'
//         })
//   } else {
//     // Upscroll
//     gsap.to('.navbar',
//         {
//             top: '1%',
            
//             // left:'0',
//             // width: '100%',
//             // duration: 1
//         })
//     gsap.to('.navbar',
//         {
//             // top: '1%',
//             left:'0',
//             width: '100%',
//             delay:1,
            
//         })
//   }

//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
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
            duration: 2
        })

        gsap.from('.logo',
            {
                // delay: .5,
                scale: 0,
                x: '5000%',
                rotate: "150%",
                duration: 2.5
            }
        )

        gsap.from('.content-frame',
            {
                // delay:1,
                backdropFilter:'blur(10px)',
                duration:1.4
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