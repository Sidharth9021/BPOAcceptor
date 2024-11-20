
$(document).ready(function () {
    // Swiper: Slider (About Slider)
    const aboutSwiper = new Swiper('.about-slider', {
        loop: true,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 20,
        speed: 4000, // Smooth transition speed (in ms)
        autoplay: {
            delay: 4000, // Time between slide changes
        },
        on: {
            slideChange: updateDots, // Update dots on slide change
        },
        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 60
            },
            767: {
                slidesPerView: 1.6,
                spaceBetween: 60
            },
            575: {
                slidesPerView: 1.1,
                spaceBetween: 40
            }
        }
    });

    // Select all dots
    const dots = document.querySelectorAll('.swiper-pagination .bullet');

    // Add click event listeners to dots
    dots.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            aboutSwiper.slideTo(index); // Move to the slide corresponding to the dot
        });
    });

    // Update dots to reflect active slide
    function updateDots() {
        dots.forEach(bullet => bullet.classList.remove('active')); // Reset all dots
        const activeIndex = aboutSwiper.realIndex; // Get the active slide index
        dots[activeIndex].classList.add('active'); // Highlight the active dot
    }

    // Set initial active dot
    updateDots();

    // Swiper: Slider (Client Slider)
    // const clientSwiper = new Swiper('.clint-slider', {
    //     loop: true,
    //     slidesPerView: 5,
    //     paginationClickable: true,
    //     // spaceBetween: 20,
    //     // variableWidth: true,
    //     // infinite: false,
    //     // centeredSlider:true,
    //     speed: 5000, // Smooth transition speed (in ms)
    //     autoplay: {
    //         delay: 2000, // Time between slide changes
    //     },
    //     breakpoints: {
    //         1920: {
    //             slidesPerView: 5,
    //             spaceBetween: 60
    //         },
    //         1200: {
    //             slidesPerView: 4,
    //             spaceBetween: 30
    //         },
    //         991: {
    //             slidesPerView: 3,
    //             // spaceBetween: 10
    //         },
    //         475: {
    //             slidesPerView: 2,
    //             // spaceBetween: 10
    //         }
    //     }
    // });
});

// Counter 
const counters1 = document.querySelectorAll('.num-count1');
const speed1 = 8000;

const counters2 = document.querySelectorAll('.num-count2');
const speed2 = 8000;

const counters3 = document.querySelectorAll('.num-count3');
const speed3 = 8000;


counters1.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('count');
      const data = +counter.innerText;
     
      const time = value / speed1;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 60);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});

counters2.forEach( counter => {
    const animate = () => {
       const value = +counter.getAttribute('count');
       const data = +counter.innerText;
      
       const time = value / speed2;
      if(data < value) {
           counter.innerText = Math.ceil(data + time);
           setTimeout(animate, 0);
         }else{
           counter.innerText = value;
         }
      
    }
    
    animate();
 });

 counters3.forEach( counter => {
    const animate = () => {
       const value = +counter.getAttribute('count');
       const data = +counter.innerText;
      
       const time = value / speed3;
      if(data < value) {
           counter.innerText = Math.ceil(data + time);
           setTimeout(animate, 80);
         }else{
           counter.innerText = value;
         }
      
    }
    
    animate();
 });



 document.querySelectorAll('.text-box').forEach(input => {
    input.addEventListener('input', () => {
        if (input.checkValidity()) {
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
        }
    });
});





