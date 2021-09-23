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

/*---------------------------- Retro mode toggle -------------------------------*/

const togButton = document.getElementById("retro-mode-butt");
const settings = document.querySelector(':root');
const links = document.querySelector('a');
const html = document.querySelector('html');
const coin = document.querySelector('.coin-switch');
const backgroundImage = document.querySelector('.background-image');
const navButton = document.querySelector('.nav-button-label');

let darkOn = false;
function toggle() {
  darkOn = !darkOn;
  setTheme();
}

//Check localStorage
darkOn = localStorage.getItem("dark") == "true" ? true : false;
setTheme();

function setTheme() {
  //Save to localStorage
  localStorage.setItem("dark", darkOn ? "true" : "false");
  if(darkOn){
    settings.setAttribute("theme", "boring");
    links.setAttribute("theme", "boring");
    html.setAttribute("theme", "boring");
    coin.style.transform = 'translateY(30px) rotate(180deg)';
    backgroundImage.setAttribute('theme', 'boring');
    navButton.setAttribute('theme', 'boring');
  }
  else{
    settings.setAttribute("theme", "retro");
    links.setAttribute("theme", "retro");
    html.setAttribute("theme", "retro");
    coin.style.transform = 'translateX(0)';
    backgroundImage.setAttribute('theme', 'retro');
    navButton.setAttribute('theme', 'retro');
  }
}

togButton.addEventListener("click", toggle);
