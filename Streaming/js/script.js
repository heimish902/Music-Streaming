function scrollHandler() {
  var windowBottom = $(window).scrollTop() + $(window).height();
  
  $('.playlist').each(function(){
    var playlist = $(this);
    var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;

    if (playlistHalf < windowBottom) {
      playlist.animate({'opacity':'1'}, 1500)
    }

    if (windowBottom == $(document).height()) {
      $('.top-btn').fadeIn();
    } else {
      $('.top-btn').fadeOut();
    }
  });
}

$(window).on('scroll', scrollHandler);

// 처음 로딩될 때 호출 
scrollHandler();

$('.top-btn').on('click',function() {
  $('html, body').animate({scrollTop: 0}, 1000)
});