//actions.js

//function onError(error) {
//    alert('code: '    + error.code    + '\n' +
//          'message: ' + error.message + '\n');
//}

var fn = {
    init : function() {
        $('#version').text('1.2');
        navigator.geolocation.getCurrentPosition(geoloc.onSuccess, geoloc.onError); 
        alert("Done!");
    }
};

var geoloc = { 
    
    //device: function(){
    //    document.addEventListener('deviceready', fn.init, false); 
    //},
    
    onSucess: function(position) {
                
        geoloc.lat = position.coords.latitude;
        geoloc.lon = position.coords.longitude;
        
//        if(geoloc.lat != undefined && geoloc.lon != undefined){

            //Posición del mapa
//            var latlng = new google.maps.LatLng(geoloc.lat, geoloc.lon);
//            var myOptions = {
//                zoom: 8,
//                center: latlng,
//                mapTypeId: google.maps.MapTypeId.ROADMAP
//            };

//            var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

            //Marcador
//            var marker = new google.maps.Marker({
//                position: latlng, 
//                map: map, 
//                title:"Mi posición"
//            });

//        } else {

//            $('#map_canvas').text('Error al asignar latitud y longitud');

//        };//end-if
        
             
    },
    
    onError: function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

};

$(fn.init);