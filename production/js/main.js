$(document).ready(function(i){function o(){var o=i(".wrapper").width(),r=i(".search-column").width();i("main").width(o-r-10)}function r(){var o=i(".wrapper").width(),r=i(".search-column").width(),e=i(".profile-info").width();i("#user-activity-main").width(o-r-e-80)}var e=i(window).width();o(),r(),e<1004?i("article").addClass("full-width-mobile"):i("article").removeClass("full-width-mobile"),i(window).resize(function(){e=i(this).width(),o(),r(),e<1004?i("article").addClass("full-width-mobile"):i("article").removeClass("full-width-mobile")}),i(".profile-options .options").click(function(){i(this).find(".drop-down").slideToggle(150)}),i(".diary .button").on("click",function(){i(".diary .diary-drop-down").slideToggle(230)}),i("form #id_email").attr("placeholder","Correo"),i("form #id_password1").attr("placeholder","Contraseña"),i("form #id_password2").attr("placeholder","Repetir contraseña"),i("form #id_username").attr("placeholder","Correo"),i("form #id_password").attr("placeholder","Contraseña")});