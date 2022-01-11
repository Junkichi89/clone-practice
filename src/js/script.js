$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.nav-menu').addClass('active');
      } else {
          $('.nav-menu').removeClass('active');
      }
  });
});