$(document).ready(function($) {

  // Acomodar el cuerpo de la página (articulos) dinámicamente al tamaño de la pantalla
  var winWidth = $(window).width();

  function mainResize() {
    // encontrar el tamaño del wrapper del documento
    var wrapWidht = $(".wrapper").width();
    // Encontrar el tamaño de la columnda donde esta el mapa y los filtros
    var searchColumnWidth = $(".search-column").width()
    // definir el ancho del cuerpo de la pagina restando el wrapper menos la columna y la margen (10px)
    $("main").width(wrapWidht - searchColumnWidth - 10)
  }
  mainResize();


  // ancho dinámico de las publicaciones en la pantalla de user profile
  function userPostResize() {
    // encontrar el tamaño del wrapper del documento
    var wrapWidht = $(".wrapper").width();
    // Encontrar el tamaño de la columnda donde esta el mapa y los filtros
    var searchColumnWidth = $(".search-column").width();
    // Encontrar el ancho de la columnda de información de perfil
    var userInfoColumn = $(".profile-info").width();
    // definir el ancho del cuerpo de la pagina restando el wrapper menos la columna y la margen (10px)
    $("#user-activity-main").width(wrapWidht - searchColumnWidth - userInfoColumn - 80);
  }
  userPostResize();


  // Cuando la pagina alcance un punto de quiebre añade una clase para que los artículos de dos columnas pasen a ser de solo una
  if (winWidth < 1004) {
    $("article").addClass("full-width-mobile");
  } else {
    $("article").removeClass("full-width-mobile");
  };


  // En esta función van todos los comportamientos que debe ejecutarse cuando la pantalla cambia de tamaño
  $(window).resize(function() {
    winWidth = $(this).width();
    mainResize();
    userPostResize();
    if (winWidth < 1004) {
      $("article").addClass("full-width-mobile");
    } else {
      $("article").removeClass("full-width-mobile");
    }
  });


  // Dropdown menu

  // Hacer que el dropdown del menu se cierre cuando se le de click a la pagina
  $('html').click(function() {
    $(".profile-options .options").find(".drop-down").hide(0);
  });

  $('.profile-options .options').click(function(event) {
    event.stopPropagation();
  });

  $(".profile-options .options").click(function() {
    $(this).find(".drop-down").slideToggle(150);
  });


  // Dropdown del calendario
  $(".diary .button").on("click", function() {
    $(".diary .diary-drop-down").slideToggle(230);
  })


  // Editar los formularios de registro
  // Agregar placeholders
  $("form #id_email").attr("placeholder", "Correo");
  $("form #id_password1").attr("placeholder", "Contraseña");
  $("form #id_password2").attr("placeholder", "Repetir contraseña");
  $("form #id_username").attr("placeholder", "Correo");
  $("form #id_password").attr("placeholder", "Contraseña");

});
