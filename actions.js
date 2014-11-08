//actions.js
var fn = {
    init : function() {
        
    navigator.geolocation.getCurrentPosition(geoloc.onSuccess, geoloc.onError); 
    
    }
};

var geoloc = {    
    lat: null,
    lon: null, 
    deviceready: function(){
        document.addEventListener('deviceready', fn.init, false); 
        //verif. y carga de las librerias.
    },
    onSucess: function(position) {
        geoloc.lat = position.coords.latitude;
        geoloc.lon = position.coords.longitude;
        
        if(geoloc.lat != null && geoloc.lon !=null){

            //Posición del mapa
            //var latlng = new google.maps.LatLng(-34.397, 150.644);
            var latlng = new google.maps.LatLng(geoloc.lat, geoloc.lon);
            var myOptions = {
                zoom: 8,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

            //Marcador
            var marker = new google.maps.Marker({
                position: latlng, 
                map: map, 
                title:"Mi posición"
            });

        } else {

            $('#map_canvas').text('Error al asignar latitud y longitud');

        }//end-if
        
             
    },
    onError: function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

};

//$(fn.init);

$(geoloc.deviceready); //$(document).ready //$(fn.init);
