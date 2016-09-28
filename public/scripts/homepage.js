$(document).ready(function() {
  var top;
  $(window).scroll(function() {
    top = ($(window).scrollTop() * 0.4) + 'px';
    $('.diagonal .background').css({
      'background-position': '0 ' + top
    });
  });
});
