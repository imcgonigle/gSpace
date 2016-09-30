/**
 * Created by lisa on 9/29/16.
 */
// $('.meetupLikes').on('click', function() {
//
//     var id = {
//         id: $(this).attr('id')
//     }
//     $.ajax({
//         type: "POST",
//         url: "/like/" + id.id,
//         success: function (data) {
//
//             var likes = data
//
//             console.log(likes)
//
//             $('#'+id.id).text(likes[0])
//             $('#'+id.id).prepend('<i id="heart" class="fa fa-heart-o" aria-hidden="true"></i>')
//             $('#heart').css("color", "red")
//         }
//     })
// })


var map;

function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.7576313, lng: -95.0092089},
        zoom: 4,
        styles: styles,
        mapTypeControl: false
    });

    var timeAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('search-within-time-text'));
    // This autocomplete is for use in the geocoder entry box.
    var zoomAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('zoom-to-area-text'));
    //Bias the boundaries within the map for the zoom to area text.
    zoomAutocomplete.bindTo('bounds', map);

    document.getElementById('zoom-to-area').addEventListener('click', function () {
        zoomToArea();
    });

    document.getElementById('search-within-time').addEventListener('click', function () {
        searchWithinTime();
    });
}

function zoomToArea() {
    // Initialize the geocoder, create new geocoder instance
    var geocoder = new google.maps.Geocoder();
    // Get the address or place that the user entered.
    var address = document.getElementById('zoom-to-area-text').value;
    // Make sure the address isn't blank.
    if (address == '') {
        window.alert('You must enter an area, or address.');
    } else {

        function makeMarkerIcon(markerColor) {
            var markerImage = new google.maps.MarkerImage(
                'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
                '|40|_|%E2%80%A2',
                new google.maps.Size(21, 34),
                new google.maps.Point(0, 0),
                new google.maps.Point(10, 34),
                new google.maps.Size(21, 34));
            return markerImage;
        }
        // Geocode the address.
        geocoder.geocode(
            {
                address: address,
                //you can add a component restriction here like:
                //componentRestrictions: {locality: 'Denver'}
            }, function (results, status) {
                //after we get the results, check geocoder status
                if (status == google.maps.GeocoderStatus.OK) {
                    // use resulting lat, lng to re-center the map & zoom in
                    map.setCenter(results[0].geometry.location);
                    map.setZoom(15);
                } else {
                    window.alert('We could not find that location - try entering a more' +
                        ' specific place.');
                }
            });
    }
}

function displayDirections(origin) {
    // initialize a new directionsService instance
    var directionsService = new google.maps.DirectionsService;
    // recapture the user entered destination
    var destinationAddress =
        document.getElementById('search-within-time-text').value;
    // Get mode again from the user entered value.
    var mode = document.getElementById('mode').value;
    directionsService.route({
        // pass in origin, destination and travel mode
        // The origin is the passed in marker's position.
        origin: origin,
        // The destination is user entered address.
        destination: destinationAddress,
        travelMode: google.maps.TravelMode[mode]
    }, function (response, status) {
        // when we get back a response, we will make sure the status is OK
        if (status === google.maps.DirectionsStatus.OK) {
            var directionsDisplay = new google.maps.DirectionsRenderer({
                // specify to render on our map
                map: map,
                // get directions from our route response
                directions: response,
                draggable: true,
                polylineOptions: {
                    strokeColor: 'green'
                }
            });
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
