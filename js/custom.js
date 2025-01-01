window.addEventListener('load', function () {
  document.getElementById('preloader').style.display = 'none';
  document.body.style.overflow = 'auto'; 
});



// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

// Select all elements with the class 'text-animation'
const textAnimations = document.querySelectorAll(".text-animation");

textAnimations.forEach(element => {
  element.onmouseover = event => {
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
      
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
    
      if (iteration >= event.target.dataset.value.length) { 
        clearInterval(interval);
      }
    
      iteration += 1 / 3;
    }, 30);
  }
});
