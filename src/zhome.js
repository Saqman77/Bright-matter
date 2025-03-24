import gsap from 'gsap';
import 'intl-tel-input/build/css/intlTelInput.css';
import Lenis from '@studio-freight/lenis';
import { mouse } from './amouse';
import intlTelInput from "intl-tel-input/intlTelInputWithUtils"
gsap.registerPlugin()


document.addEventListener("DOMContentLoaded", () => {
    let animatedElements = [];

    const animateTextElements = (selector, splitBy) => {
        const textContainers = document.querySelectorAll(selector);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    processTextContainer(entry.target, splitBy);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        textContainers.forEach((textContainer) => observer.observe(textContainer));
    };

    const processTextContainer = (textContainer, splitBy) => {
        let elements = [];
        let elementType = "";

        if (splitBy === "words") {
            elements = textContainer.textContent.trim().split(/\s+/);
            elementType = "word";
        } else if (splitBy === "letters") {
            const words = textContainer.textContent.trim().split(/\s+/);
            elements = [];

            words.forEach((word, wordIndex) => {
                for (let i = 0; i < word.length; i++) {
                    elements.push(word[i]);
                }
                if (wordIndex < words.length - 1) {
                    elements.push(" ");
                }
            });

            elementType = "letter";
        }

        textContainer.textContent = "";
        let localAnimatedElements = [];

        elements.forEach((element, index) => {
            if (splitBy === "letters" && element === " ") {
                textContainer.appendChild(document.createTextNode(" "));
                return;
            }

            const elementSpan = document.createElement("span");
            elementSpan.classList.add(elementType);
            elementSpan.textContent = element;
            textContainer.appendChild(elementSpan);

            if (splitBy === "words" && index < elements.length - 1) {
                textContainer.appendChild(document.createTextNode(" "));
            }

            localAnimatedElements.push({
                element: elementSpan,
                originalX: 0,
                originalY: 0,
                currentX: 0,
                currentY: 0,
                targetX: 0,
                targetY: 0
            });
        });

        animatedElements = animatedElements.concat(localAnimatedElements);
        updateElementPositions(); // Update positions when elements are added
    };

    const mouse = { x: 0, y: 0 };

    document.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX + window.scrollX;
        mouse.y = e.clientY + window.scrollY;

        const radius = 100;
        const maxDisplacement = 300;

        animatedElements.forEach((element) => {
            const dx = element.originalX - mouse.x;
            const dy = element.originalY - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < radius && distance !== 0) {
                const force = (1 - distance / radius) * maxDisplacement;
                element.targetX = (dx / distance) * force;
                element.targetY = (dy / distance) * force;
            } else {
                element.targetX = 0;
                element.targetY = 0;
            }
        });
    });

    const animate = () => {
        const lerpFactor = 0.1;

        animatedElements.forEach((element) => {
            element.currentX += (element.targetX - element.currentX) * lerpFactor;
            element.currentY += (element.targetY - element.currentY) * lerpFactor;

            element.element.style.transform = `translate(${element.currentX}px, ${element.currentY}px)`;
        });

        requestAnimationFrame(animate);
    };

    // **🔥 New Fix: Update Bounding Client Rect on Scroll**
    const updateElementPositions = () => {
        animatedElements.forEach((element) => {
            const rect = element.element.getBoundingClientRect();
            element.originalX = rect.left + rect.width / 2 + window.scrollX;
            element.originalY = rect.top + rect.height / 2 + window.scrollY;
        });
    };

    window.addEventListener("scroll", () => {
        updateElementPositions();
    });

    window.addEventListener("resize", () => {
        updateElementPositions();
    });

    animate();
    animateTextElements(".c-para", "words");
    animateTextElements(".c-main-heading", "letters");
});





const input = document.querySelector("#phone");
const phoneWrapper = document.querySelector(".phone-wrapper");
function fetchUserIP() {
    return fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => data.ip);
  }

  // Function to fetch GeoIP data using the user's IP address
  function fetchGeoIPData(ip) {
    return fetch(`https://ipapi.co/${ip}/json/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }

  // Initialize intl-tel-input with GeoIP lookup
  function initializeIntlTelInput(countryCode) {
    intlTelInput(input, {
    //   separateDialCode: true,
      autoInsertDialCode: true,
      showSelectedDialCode: true,
      strictMode:true,
      useFullscreenPopup: false,
      initialCountry: countryCode
    });
  }

  // Fetch user's IP address and then fetch GeoIP data
  fetchUserIP()
    .then(ip => {
      console.log(`User IP: ${ip}`);
      return fetchGeoIPData(ip);
    })
    .then(geoData => {
      console.log(`GeoIP Data:`, geoData);
      initializeIntlTelInput(geoData.country_code);
      console.log(geoData.country_code)
    })
    .catch(error => {
      console.error('Error fetching IP or GeoIP data:', error);
      // Initialize intl-tel-input without initial country if there's an error
      initializeIntlTelInput("auto");
    });



gsap.defaults({});

let lastScrollTop = 0;
const body = document.body
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const overlay = document.getElementById("overlay");
    const closeBtns = document.getElementsByClassName("close-btn");
    const openBtns = document.querySelectorAll("#opn-contact");
    const sbmtBtn = document.getElementsByClassName("submit-btn");
    const defaultBtn = document.getElementsByClassName("default-text")[0];
    const sucessBtn = document.getElementsByClassName("success-text")[0];
    const failureBtn = document.getElementsByClassName("failure-text")[0];

    // Open the form
    openBtns.forEach(function(openBtn) {
        openBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default anchor click behavior
            contactForm.style.display = "block"; // Show the form
            overlay.style.display = "block"; // Show the overlay
            document.body.classList.add("no-scroll"); // Disable scrolling
        });
    });

    // Close the form
    Array.from(closeBtns).forEach(function(closeBtn) {
        closeBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default anchor click behavior
            contactForm.style.display = "none"; // Hide the form
            overlay.style.display = "none"; // Hide the overlay
            document.body.classList.remove("no-scroll"); // Enable scrolling
            contactForm.classList.remove("form-success")
            contactForm.classList.add("form-default")
        });
    });

    // Close form and overlay when clicking on the overlay
    overlay.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior
        contactForm.style.display = "none"; // Hide the form
        overlay.style.display = "none"; // Hide the overlay
        document.body.classList.remove("no-scroll"); // Enable scrolling
    });
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();
    
        // Get form input elements
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        const phoneInput = input; // intl-tel-input field
    
        if (!name.value || !email.value || !message.value) {
            alert("Please fill in all fields.");
            return;
        }
    
        // Send form data to backend
        fetch("https://mailchimp-api-nine.vercel.app/api/submit.js", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                name: name.value, 
                email: email.value, 
                message: message.value, 
                phone: phoneInput.value 
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);
    
            if (data.success) {
                contactForm.classList.add("form-success");
                defaultBtn.style.display = "none";
                sucessBtn.style.display = "block";
    
                // ✅ Clear form fields properly
                name.value = "";
                email.value = "";
                message.value = "";
    
                // ✅ Check if intlTelInput instance exists before resetting
                const itiInstance = window.intlTelInputGlobals?.getInstance(phoneInput);
                if (itiInstance) {
                    itiInstance.setNumber(""); // Reset phone field safely
                } else {
                    console.warn("intlTelInput instance not found, skipping phone reset.");
                }
    
                // ✅ Reset form state after a short delay
                setTimeout(() => {
                    contactForm.classList.remove("form-success");
                    contactForm.classList.add("form-default");
                    defaultBtn.style.display = "block";
                    sucessBtn.style.display = "none";
                }, 3000);
            } else {
                throw new Error(data.error || "Submission failed!");
            }
        })
        .catch(error => {
            console.error("Error submitting form:", error);
            alert("Failed to send message. Please try again later.");
        });
    });
    
    // ✅ Fix sbmtBtn.addEventListener issue
    Array.from(sbmtBtn).forEach(button => {
        button.addEventListener("blur", function(event) {
            event.preventDefault();
            contactForm.classList.remove("form-success");
            contactForm.classList.add("form-default");
            defaultBtn.style.display = "block";
            sucessBtn.style.display = "none";
        });
    
    
    
    
    
    

    // sbmtBtn.addEventListener("blur", function(event) 
    // {
    //     event.preventDefault();
    //     contactForm.classList.remove("form-success")
    //     contactForm.classList.add("form-default")
    //     defaultBtn.style.display = "block";
    //     sucessBtn.style.display = "none"
    // })
    })

});
// Check if ScrollTrigger is registered correctly
// console.log(gsap.plugins.ScrollTrigger);

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

        //    let marqueeDirection = body.classList.contains("scroll-down") ? 'down' : 'up';

        document.addEventListener("DOMContentLoaded", function () {
            const marqueeInner = document.querySelector('.marquee__inner');
            const marqueeContent = marqueeInner.innerHTML;

            // Duplicate content for smooth looping
            marqueeInner.innerHTML += marqueeContent; 
        
            gsap.to(".marquee__inner", {
                xPercent: window.innerWidth < 1250 ? -50 : -50, // Moves by half its width
                repeat: -1,
                duration: window.innerWidth < 1250 ? 10 : 6,
                ease: "linear"
            });
        });

document.addEventListener("DOMContentLoaded", () => {
    const profiles = document.querySelectorAll(".profile");
    const contentWrappers = document.querySelectorAll(".c-content-wrapper");

    profiles.forEach(profile => {
        profile.addEventListener("click", () => {
            const profileClass = profile.classList[1]; // 'saq', 'raf', 'naqi'

            // Hide all wrappers
            contentWrappers.forEach(wrapper => {
                wrapper.style.display = "none";
            });

            // Show the corresponding wrapper
            const targetWrapper = document.querySelector(`.c-content-wrapper.${profileClass}`);
            if (targetWrapper) {
                targetWrapper.style.display = "flex";
            }
        });
    });

    // Reset to default state on scroll
    let isScrolling;
    window.addEventListener("scroll", () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            contentWrappers.forEach(wrapper => {
                if (wrapper.classList.contains("saq") || 
                    wrapper.classList.contains("raf") || 
                    wrapper.classList.contains("naqi")) {
                    wrapper.style.display = "none";
                } else {
                    wrapper.style.display = "flex"; // Show default content
                }
            });
        }, 200);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const profiles = document.querySelectorAll(".profile");
    const contentWrappers = document.querySelectorAll(".c-content-wrapper");

    profiles.forEach(profile => {
        profile.addEventListener("click", () => {
            const profileClass = profile.classList[1]; // 'saq', 'raf', 'naqi'

            contentWrappers.forEach(wrapper => {
                if (wrapper.classList.contains(profileClass)) {
                    wrapper.classList.remove("disable");
                } else {
                    wrapper.classList.add("disable");
                }
            });
        });
    });

    // Reset to default state on scroll
    let isScrolling;
    window.addEventListener("scroll", () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            contentWrappers.forEach(wrapper => {
                wrapper.classList.add("disable"); // Disable all profiles
            });

            const defaultWrapper = document.querySelector(".c-content-wrapper.default");
            if (defaultWrapper) {
                defaultWrapper.classList.remove("disable"); // Show default
            }
        }, 0);
    });
});

          