import gsap from 'gsap';

let lastScrollTop = 0;
const body = document.body


window.addEventListener('scroll', () => {

 const scrollTop = window.scrollY
 const newSection = Math.round(scrollTop / window.innerHeight);
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

    if (newSection == 2)
        {
            gsap.fromTo('.a',

                {
                    backdropFilter:'blur(10px)',
                    backgroundColor:'linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0))',
                    duration:1,
                    delay:3,
                    
                },  {
                    backdropFilter:'none',
                    backgroundColor:'none',
                })
        }
});

const tl = gsap.timeline()

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
                backdropFilter:'blur(20px)',
                duration:2
            })

//marquee
        //    let marqueeDirection = body.classList.contains("scroll-down") ? 'down' : 'up';
            gsap.to('.marquee__part',
                {
                    xPercent: -100,
                    repeat:-1,
                    duration:5,
                    ease:"linear"
                })
            // gsap.from('.marquee__part__right',
            //     {
            //         xPercent: -100,
            //         repeat:-1,
            //         duration:5,
            //         ease:"linear"
            //     })


                