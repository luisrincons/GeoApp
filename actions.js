//actions.js

var onSuccess = function(position) {

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

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

var fn = {
    init : function() {
        $('#version').text('2.0');
        navigator.geolocation.getCurrentPosition(onSuccess, onError); 
        alert("Done!");
    }
};

var device = function() {
    document.addEventListener('deviceready', fn.init, false); 
};

$(device);