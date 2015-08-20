$(document).ready(function() {


  $(window).resize(function() {
    var about_link = $('#about-link');
    var work_link = $('#work-link');
    var contact_link = $('#contact-link');
    var blog_link = $('#blog-link');
    var toggle = $('#toggle');

    var contact = $('#contact-form');
    var other_contact = $('#other-contact');

    var hr_text = $('.hr-text');
    var hr_subtext = $('hr-subtext');

    if ($(window).width() <= 768) {
      console.log('MOBILE DEVICE DETECTED');
      // mobile specific styles

      // custom menu
      about_link.addClass('col-xs-12').css('margin', '0px').css('padding-top', '37px');
      work_link.addClass('col-xs-12').css('margin', '0px');
      contact_link.addClass('col-xs-12').css('margin', '0px');
      blog_link.addClass('col-xs-12').css('margin', '0px');
      // custom contact
      contact.removeClass().addClass('col-xs-12');
      other_contact.removeClass().addClass('col-xs-12');
      // hr
      hr_text.css('font-size', '32px')
      hr_subtext.css('font-size', '12px')
    } else {
      console.log('normal size');
      // return to normal styles

      // header
      about_link.removeClass().css('margin-right', '50px');;
      work_link.removeClass().css('margin-right', '100px');
      contact_link.removeClass().css('margin-left', '100px');
      blog_link.removeClass().css('margin-left', '50px');
      // contact
      contact.removeClass().addClass('col-xs-6');
      other_contact.removeClass().addClass('col-xs-6');
      // hr
      hr_text.css('font-size', '48px')
      hr_subtext.css('font-size', '20px')
    }

    var image = $('#my_pic');
    if ($(window).width() <= 400) {
      image.css('max-width', '80%').css('margin-left', '40px');
    } else if ($(window).width() <= 768) {
      image.css('max-width', '50%').css('margin-left', '-20px');
    } else {
      image.css('max-width', '30%').css('margin-left', '-20px');
    }

  });

  // smooth scrolling when anchor is clicked
  $('a').click(function() {
    var hrefVal = $.attr(this, 'href');
    if (hrefVal === '#') {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    } else {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-150
      }, 500);
    }

    return false;
  });




});
