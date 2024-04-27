const openMenu = document.querySelector(".menu-open");
const closeMenu = document.querySelector(".menu-close");
const menuDiv = document.querySelector(".ozmenu");
const menu = document.querySelector(".ozmenu-nav");
const dropDowns = menu.getElementsByClassName("nav-dropdown");
const dropDownsChild = menu.querySelectorAll('.dropdown .nav-dropdown');

openMenu.addEventListener("click", menuToggle);
closeMenu.addEventListener("click", menuToggle);

document.body.insertAdjacentHTML("beforeend", "<div id='menu-overlay'></div>");
document.querySelector("#menu-overlay").addEventListener("click", menuToggle);

function menuToggle() {
    menuDiv.classList.toggle("active");
    document.body.classList.toggle("hide-scrolling");
    document.body.classList.toggle("mobile-menu-active");
    document.getElementById("menu-overlay").classList.toggle("show");
}

for (var i = 0; i < dropDownsChild.length; i++) {
    dropDownsChild[i].classList.add('child');
    dropDownsChild[i].addEventListener("click", function() {
        this.classList.toggle('opened');
    });
}
for (var i = 0; i < dropDowns.length; i++) {
    if(!dropDowns[i].classList.contains("child")){
        dropDowns[i].classList.add('parent');
        dropDowns[i].addEventListener("click", function() {
            this.classList.toggle('opened');
        });
    }
}


// On scroll
$(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
        $('.scrollTop, .floating').addClass('active');
    }
    else {$('.scrollTop, .floating').removeClass('active');}
})

$(".scrollTop").click(function() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});


$(document).on("click", ".modal-btn", function () {
    var ModalAttr = $(this).attr('data-modal')
    $('#'+ModalAttr).show();
    $('body').addClass('oh');
  });
  $(document).on("click", ".modal-close, .modal .close", function () {
    $(this).closest('.modal').hide();
    $('body').removeClass('oh');
  });
  $(document).on('keydown', 'body', function(event) {
     if (event.key == "Escape") {
          $('body').removeClass('oh');
      $('.modal').hide();
     }
  });


  // IntlTelInput
var intlScript = document.createElement('script');
intlScript.setAttribute('src','js/intlTelInput.js');
intlScript.setAttribute('type','text/javascript');
intlScript.setAttribute('class','intl-js');
var intlStyle = document.createElement('link');
intlStyle.setAttribute('rel','stylesheet');
intlStyle.setAttribute('class','intl-css');
intlStyle.setAttribute('href','css/intlTelInput.css');
var intlFreeScript = document.createElement('script');
intlFreeScript.setAttribute('class','intl-js');
$('.modal-btn').on('click', function() {
  $('body').append(intlScript);
  $('body').append(intlStyle);
  $('body').append(intlFreeScript);
});
$(intlFreeScript).append('$("#mobile, #mobile2, #mobile3").intlTelInput({preferredCountries: [\'in\', \'jp\', \'us\', \'cn\', \'ru\'],})');

// Looking For intlTelInput
var intlTellSect = new IntersectionObserver(function(entries) { console.log(entries);
if(entries[0]['isIntersecting'] === true) {
  if(entries[0]['intersectionRatio'] === 1) {
          $('body').append(intlScript);
          $('body').append(intlStyle);
          $('body').append(intlFreeScript);
    }
      else if(entries[0]['intersectionRatio'] > 0.5)
        {}
      else
        { 
          $('body').append(intlScript);
          $('body').append(intlStyle);
          $('body').append(intlFreeScript);
        }
}
  else {
      // $('.intl-js').remove();
    }
}, { threshold: [0, 0.5, 1] });
intlTellSect.observe(document.querySelector('.contact-box-wrap'));