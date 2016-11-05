// Fonction pour la vérification de l'adresse mail (donnée par le plugin)

$(function ()
	{ $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

//Script pour scroll navbar resize

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

// Script pour scroll avec bouton brand
$(document).ready(function (){
            $("#b0").click(function (){
                $('html, body').animate({
                    scrollTop: $("#top").offset().top -50
                }, 1500);
            });
        });

// Script pour scroll avec bouton home
$(document).ready(function (){
            $("#b1_1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#about").offset().top -50
                }, 1500);
            });
        });

// Script pour scroll avec bouton home
$(document).ready(function (){
            $("#b1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#about").offset().top -50
                }, 1500);
            });
        });

// Script pour scroll avec bouton contact
$(document).ready(function (){
            $("#b2_1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top -70
                }, 1500);
            });
        });

// Script pour scroll avec bouton contact
$(document).ready(function (){
            $("#b2").click(function (){
                $('html, body').animate({
                    scrollTop: $("#contact").offset().top -50
                }, 1500);
            });
        });

// Script pour scroll avec bouton formation
$(document).ready(function (){
            $("#b3_1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#formation").offset().top -70
                }, 1500);
            });
        });

// Script pour scroll avec bouton formation
$(document).ready(function (){
            $("#b3").click(function (){
                $('html, body').animate({
                    scrollTop: $("#formation").offset().top -50
                }, 1500);
            });
        });

// Script pour scroll avec bouton competences
$(document).ready(function (){
            $("#b4_1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#competences").offset().top -70
                }, 1500);
            });
        });

// Script pour scroll avec bouton competences
$(document).ready(function (){
            $("#b4").click(function (){
                $('html, body').animate({
                    scrollTop: $("#competences").offset().top -50
                }, 1500);
            });
        });

// Script pour scroll avec bouton experience
$(document).ready(function (){
            $("#b5_1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#exp").offset().top -70
                }, 1500);
            });
        });

// Script pour scroll avec bouton experience
$(document).ready(function (){
            $("#b5").click(function (){
                $('html, body').animate({
                    scrollTop: $("#exp").offset().top -50
                }, 1500);
            });
        });


