//actions.js
var onSuccess = function(position) {

    //geoloc.lat = position.coords.latitude;
    //geoloc.lon = position.coords.longitude;
    

        
    //Posición del mapa
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
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
          
    
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);