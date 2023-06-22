$(function(){
    var list = ['Jimmy','Billy','Spike','Vash','John','Oscar','Edu','Miguel','Brazales'],
        r = Math.floor(Math.random() * list.length);
    $('#nombre').prop('placeholder',list[r]);
  });





  $(function(){
    var list = ['El Matasanos','El feo','El bueno','El malo','El niño','El peligroso','El liendre','Thompson','Wolfwood','Stryfe','Estampida','Spiegel','El gran pescador'],
    r = Math.floor(Math.random() * list.length);
    $('#alias').prop('placeholder',list[r]);
  });


  $(function(){
    var list = ['Virginia City','Kansas City','Disneyland','Alhambra','Nerva','July','Midtown'],     
    r = Math.floor(Math.random() * list.length);
    $('#direccion').prop('placeholder',list[r]);
  });



  $(function(){
    var list = ['¿Hay ladrones en tu ciudad?','¿También necesitas arreglar asuntos extraoficiales...?','Si necesitas un arma...','Rápido, el sol se está poniendo!','Creo que probablemente fui un vaquero en una vida pasada','Un buen vaquero sabe cómo mentir al recaudador de impuestos y al comprador de ganado','¿Esta web es enserio?'],        
    r = Math.floor(Math.random() * list.length);
    $('#informacion').prop('placeholder',list[r]);
  });