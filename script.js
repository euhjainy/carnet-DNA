
window.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const sectionLeft = document.querySelector('.section-left');
    const sectionRight = document.querySelector('.section-right');
  
    container.addEventListener('scroll', function() {
      const scrollPos = container.scrollLeft;
      sectionLeft.style.transform = `translateX(-${scrollPos}px)`;
      sectionRight.style.transform = `translateX(${scrollPos}px)`;
    });
  });
  
