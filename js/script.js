$(document).ready(function() {

  // Scroll suave y rápido con offset dinámico según navbar
  $("a[href^='#']").on("click", function(e) {
    e.preventDefault();

    let target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // Obtener altura actual del navbar
      let navbarHeight = document.querySelector('.navbar').offsetHeight;
      let topPos = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      // Scroll nativo suave
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });

      // Cerrar menú móvil si está abierto
      let navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        bsCollapse.hide();
      }
    }
  });

  // Animación de fade-in de secciones al scroll
  $('.seccion').css({opacity: 0, position: 'relative', top: '20px'});

  $(window).on('scroll load', function() {
    $('.seccion').each(function() {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
        $(this).animate({opacity: 1, top: 0}, 600);
      }
    });
  });

});