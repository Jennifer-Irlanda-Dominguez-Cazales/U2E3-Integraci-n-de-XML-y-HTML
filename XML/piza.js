$(document).ready(function() {
    alert("listo");
});
$(document).ready(function() {
    /*Usamos AJAX para poder leer el archivo XML, en JQuery podemos hacer uso del método "get",
    en este método debemos importar el archivo XML con el que vamos a trabajar*/
    $.get('XML/pizza.xml', function(xml) {
       
        /*Agregamos 2 etiquetas al archivo HTML, el primo es un simple h2,
        el segundo es una etiqueta donde estarán alojados nuestros elementos.
        Es importante declarar una etiqueta en donde nosotros queremos que aparezca el contenido */
        $('body').append('<h1>PIZZA HUB</h1>');
        $('body').append('<dl/>');
        
        /*Aquí haremos el ciclo para encontrar todas las etiquetas llamadas "personaje",
        de cada una de esas etiquetas obtendremos cierta información que guardaremos en variables
        y después esas variableas las concatenaremos a otras etiquetas que se añadirán al
        documento HTML*/
        $(xml).find('pizza_S').each(function () {

            /*Con el método "find" encontramos etiquetas hijos*/
            var pizza = $(this).text();
            
            /*Con la etiqueta "attr" encontramos atriburos de las etiquetas hijos,
            es importante recordar que en este ejemplo el atributo está en una etiqueta "nieto"
            es por eso que agregamos el método "children" (el hijo del hijo) */
            var precio = $(this).attr('precio');
            var ingredientes = $(this).attr('ingredientes');
            var imagen = $(this).attr('img');
            var tamanio=$(this).attr('tamanio');
            
            /*Creamos la estructura de como queremos que aparezca nuestro contenido
            aquí pueden sustituir las etiquetas por tablas, etiquetas simples, etc,
            de acuerdo a las necesidades*/
            var html = '<dt><p>'+pizza+'  </p></dt>';
            html += '<p>'+precio+'  </p>';
            html += '<p>'+tamanio+'  </p>';
            
            html += '<p>'+ingredientes+'  </p>';
            html += '<dt><img src = '+imagen+' /> </dt>';

            console.log(html);
            /*Esta útima parte es simplemente para agregar las etiquetas que fuimos creando
            en la etiqueta "dl" que creamos en la línea 10 de este documento*/
            $('dl').append($(html));
            
        });
        $(xml).find('paquete').each(function () {

            /*Con el método "find" encontramos etiquetas hijos*/
            var nombre_paquete = $(this).find('nombre_paquete').text();
            var nombre_pizza = $(this).find('pizza').text();
            
            /*Con la etiqueta "attr" encontramos atriburos de las etiquetas hijos,
            es importante recordar que en este ejemplo el atributo está en una etiqueta "nieto"
            es por eso que agregamos el método "children" (el hijo del hijo) */
            var precio = $(this).find('pizza').attr('precio');
            var ingredientes = $(this).find('pizza').attr('ingredientes');
            var imagen = $(this).find('pizza').attr('img');
            var tamanio=$(this).find('pizza').attr('tamanio');
            var refresco = $(this).find('refresco').text();
            
            
            /*Creamos la estructura de como queremos que aparezca nuestro contenido
            aquí pueden sustituir las etiquetas por tablas, etiquetas simples, etc,
            de acuerdo a las necesidades*/
            var html = '<dt><p>'+nombre_paquete+' </p></dt>';
            html += '<p>'+nombre_pizza+' </p>';
            html += '<p>'+precio+' </p>';
            html += '<p>'+tamanio+' </p>';
            
            html += '<p>'+ingredientes+' </p>';
            html += '<dt><img src = '+imagen+' /> </dt>';
            html += '<p>'+refresco+' </p>';
            /*Esta útima parte es simplemente para agregar las etiquetas que fuimos creando
            en la etiqueta "dl" que creamos en la línea 10 de este documento*/
            $('dl').append($(html));
            console.log(html);
            
        });
    });
});
