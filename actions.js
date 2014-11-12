//actions.js
var onSuccess = function(position) {

    geoloc.lat = position.coords.latitude;
    geoloc.lon = position.coords.longitude;
    
    if(geoloc.lat != undefined && geoloc.lon != undefined){
        
        //Posición del mapa
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

    };       
    
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);