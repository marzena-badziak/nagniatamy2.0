jQuery(document).ready(function(){


function stickyMenu() {
//selector z spacją - szuka dzieci w ramach danego rodzica
// console.log(jQuery('nav .menu'));
// var stickyNav = jQuery('menu');
//selector bez spacji - szuka konkretnego ul z klasą .menu
var menuList = jQuery('.menu');
var stickyMenuPosition = menuList.offset().top;
// console.log(stickyNav);
// console.log(menuList);
// console.log(stickyMenuPosition);

jQuery(document).scroll(function(){
  var scrollLength = jQuery(document).scrollTop();
//  console.log('scrolluję!!!');
  // console.log(scrollLength);
  if (scrollLength > stickyMenuPosition) {
    jQuery(menuList).removeClass('initial');
    // jQuery(menuList).addClass('sticky');
  }
  else if (scrollLength < stickyMenuPosition) {
    // jQuery(menuList).removeClass('sticky');
    jQuery(menuList).addClass('initial');
  }
});
//pkt 7 - uwzględnieie resize
jQuery(window).on('resize', function(){
//  console.log(jQuery(window).resize());
  // var resizeLength = jQuery(window).resize();
  // console.log(resizeLength);

  //aktualizacja poniższej zmiennej globalnej na skutek resize:

 // aktualizacja gdy menu nie jest jeszcze sticky:
 if (!menuList.hasClass('sticky')) {
  //  console.log('jestem w if');

 stickyMenuPosition = menuList.offset().top;
  }

  // aktualizacja gdy menu już jest sticky - trzeba wtedy ustalić pozycję na podst. wysokości i offsetu elementu powyżej:

  else {
    // console.log('jestem w else');
    // console.log(stickyNav.prev().offset().top);
    // console.log(stickyNav.prev());
    // console.log(stickyNav.prev().outerHeight());
    stickyMenuPosition = (stickyNav.prev().offset().top) + (stickyNav.prev().outerHeight());
  }
})
};
stickyMenu();


function changeBlur(scrollPercentage) {
	var PictureToBlur = jQuery('.imgContainer');
	if(scrollPercentage < 8) {
		PictureToBlur.css("filter", "blur(0px)");
	}
	PictureToBlur.css("filter", "blur(" + Math.floor(scrollPercentage / 10) + "px)");
	console.log(scrollPercentage);
}

function blurredPicture() {
  jQuery(document).scroll(function() {
    var windowHeight = jQuery(window).height();
    // console.log('wysokosc okna:' + windowHeight);
    var scrollValue = jQuery(document).scrollTop();
    var scrollPercentage = (scrollValue / windowHeight) * 100;
    //  console.log("procent: " + scrollPercentage)

    changeBlur(scrollPercentage);

  });
};
blurredPicture();

});
