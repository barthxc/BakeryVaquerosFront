$(function(){
    //PARA LLEVAR
    var images = ['../img/opcion-llevar/opcion-llevar1.jpg','../img/opcion-llevar/opcion-llevar2.jpg','../img/opcion-llevar/opcion-llevar3.jpg','../img/opcion-llevar/opcion-llevar4.jpg','../img/opcion-llevar/opcion-llevar5.jpg','../img/opcion-llevar/opcion-llevar6.jpg','../img/opcion-llevar/opcion-llevar7.jpg','../img/opcion-llevar/opcion-llevar8.jpg','../img/opcion-llevar/opcion-llevar9.jpg','../img/opcion-llevar/opcion-llevar10.jpg','../img/opcion-llevar/opcion-llevar11.jpg','../img/opcion-llevar/opcion-llevar12.jpg','../img/opcion-llevar/opcion-llevar13.jpg','../img/opcion-llevar/opcion-llevar14.jpg','../img/opcion-llevar/opcion-llevar15.jpg','../img/opcion-llevar/opcion-llevar16.jpg','../img/opcion-llevar/opcion-llevar17.jpg','../img/opcion-llevar/opcion-llevar18.jpg','../img/opcion-llevar/opcion-llevar19.jpg','../img/opcion-llevar/opcion-llevar20.jpg']; // Array de imágenes de fondo
    var r = Math.floor(Math.random() * images.length);
    var imageUrl = 'url(' + images[r] + ')';
    $('#llevar').css('background-image', imageUrl); // Establecer imagen de fondo aleatoria en el div


     //PARA RECOGER
     var images = ['../img/opcion-recoger/opcion-recoger1.jpg','../img/opcion-recoger/opcion-recoger2.jpg','../img/opcion-recoger/opcion-recoger3.jpg','../img/opcion-recoger/opcion-recoger4.jpg','../img/opcion-recoger/opcion-recoger5.jpg','../img/opcion-recoger/opcion-recoger6.jpg','../img/opcion-recoger/opcion-recoger7.jpg','../img/opcion-recoger/opcion-recoger8.jpg','../img/opcion-recoger/opcion-recoger9.jpg','../img/opcion-recoger/opcion-recoger10.jpg','../img/opcion-recoger/opcion-recoger11.jpg','../img/opcion-recoger/opcion-recoger12.jpg','../img/opcion-recoger/opcion-recoger13.jpg','../img/opcion-recoger/opcion-recoger15.jpg','../img/opcion-recoger/opcion-recoger16.jpg','../img/opcion-recoger/opcion-recoger17.jpg','../img/opcion-recoger/opcion-recoger18.jpg','../img/opcion-recoger/opcion-recoger19.jpg','../img/opcion-recoger/opcion-recoger20.jpg','../img/opcion-recoger/opcion-recoger21.jpg','../img/opcion-recoger/opcion-recoger22.jpg','../img/opcion-recoger/opcion-recoger23.jpg','../img/opcion-recoger/opcion-recoger24.jpg','../img/opcion-recoger/opcion-recoger25.jpg',]; // Array de imágenes de fondo
     var r = Math.floor(Math.random() * images.length);
     var imageUrl = 'url(' + images[r] + ')';
     $('#recoger').css('background-image', imageUrl); // Establecer imagen de fondo aleatoria en el div
 


});