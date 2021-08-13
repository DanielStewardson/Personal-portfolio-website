/*---------------------------- Page transitions -------------------------------*/

window.onload = () => {
    const transition_item = document.querySelector('.transition-1');
    const transition_item_2 = document.querySelector('.transition-2');
    const anchors = document.querySelectorAll('.slide');

    setTimeout(() => {
        transition_item.classList.remove('is-active');
        transition_item_2.classList.remove('is-active-2');
    }, 300);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', a => {
            a.preventDefault();
            let target = a.target.href;

            transition_item.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 300);
        })
    }
};

/*----------------------------- Slide in elements --------------------------------*/

const slideInStuff = document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-in');

function checkSlide(e) {

    slideInStuff.forEach(slide => {
        // half way through image
        const slideInAt = (window.scrollY + window.innerHeight);
        console.log(slideInAt)
        //bottom of slide item
        const itemBottom = slide.offsetTop + slide.clientHeight;
        console.log(itemBottom)
        //half way through the item
        const isHalfShown = slideInAt > slide.offsetTop;
        
        const isNoScrolledPast = window.scrollY < itemBottom;
        
        if(isHalfShown && isNoScrolledPast) {
            slide.classList.add('active');
            } else {
            slide.classList.remove('active');
            }
            })
            
}

window.addEventListener('scroll', debounce(checkSlide));

/*----------------------------- De-bounce function --------------------------------*/

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  /*---------------------------- Disable scroll when menu open -------------------------------*/

const navButt = document.querySelector('input[name=nav-butt]');

navButt.addEventListener('change', e => {
    if (navButt.checked) {
        disableScroll();
    } else {
        enableScroll();
        }
    })

function disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}
