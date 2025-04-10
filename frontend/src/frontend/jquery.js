import React, { useEffect } from 'react';
import $ from 'jquery';

function CoursesCarousel() {
  useEffect(() => {
    // Custom function to handle sliding by 3 cards at a time
    $('#courseCarousel .carousel-control-next').click(function() {
      var items = $('#courseCarousel .carousel-inner .carousel-item');
      var currentItem = $('#courseCarousel .carousel-inner .carousel-item.active');
      var nextItem = currentItem.next();

      if (nextItem.length === 0) {
        nextItem = items.first(); // loop to the first
      }

      // Slide to the next 3 cards
      nextItem.addClass('active').prevAll().removeClass('active');
      $('#courseCarousel .carousel-inner').css('transform', 'translateX(-33.333%)');
    });

    $('#courseCarousel .carousel-control-prev').click(function() {
      var items = $('#courseCarousel .carousel-inner .carousel-item');
      var currentItem = $('#courseCarousel .carousel-inner .carousel-item.active');
      var prevItem = currentItem.prev();

      if (prevItem.length === 0) {
        prevItem = items.last(); // loop to the last
      }

      // Slide to the previous 3 cards
      prevItem.addClass('active').nextAll().removeClass('active');
      $('#courseCarousel .carousel-inner').css('transform', 'translateX(33.333%)');
    });
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return (
    <section className="section courses" data-section="section4">
      {/* Carousel JSX goes here */}
    </section>
  );
}

export default CoursesCarousel;
