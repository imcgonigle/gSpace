var map;

function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 18.7576313, lng: -95.0092089},
        zoom: 4,
        mapTypeControl: false
    });

    var zoomAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('zoom-to-area-text'));
}

function zoomToArea() {

    // Initialize the geocoder, create new geocoder instance
    var geocoder = new google.maps.Geocoder();

    var address = document.getElementById('zoom-to-area').value;

    // Make sure the address isn't blank.
    if (address == '') {
        window.alert('You must enter an area, or address.');
    } else {

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

initMap();
zoomToArea();


// function showMeetup() {
//     var bounds = new google.maps.LatLngBounds();
//     bounds.extend(position)
//     map.fitBounds(bounds);
//
//
//     function makeMarkerIcon(markerColor) {
//         var markerImage = new google.maps.Marker(
//             'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' + markerColor +
//             '|40|_|%E2%80%A2',
//             new google.maps.Size(21, 34),
//             new google.maps.Point(0, 0),
//             new google.maps.Point(10, 34),
//             new google.maps.Size(21, 34));
//         return markerImage;
//     }
//
//     var icon = makeMarkerIcon('0091ff');
//
//     var highlightedIcon = makeMarkerIcon('FFFF24');
//
//     var marker = new google.maps.Marker({
//         position: position,
//         animation: google.maps.Animation.DROP,
//         icon: icon,
//     });
//
//     marker.setMap(map);
//
//     marker.addListener('mouseover', function () {
//         this.setIcon(highlightedIcon);
//     });
//     marker.addListener('mouseout', function () {
//         this.setIcon(icon);
//     });
// }

// showMeetup();

// function zoomToArea() {
//     // Initialize the geocoder, create new geocoder instance
//     var geocoder = new google.maps.Geocoder();
//     // Get the address or place that the user entered.
//     var address = document.getElementById('zoom-to-area-text').value;
//     // Make sure the address isn't blank.
//     if (address == '') {
//         window.alert('You must enter an area, or address.');
//     } else {
//         // Geocode the address.
//         geocoder.geocode(
//             {
//                 address: address,
//                 //you can add a component restriction here like:
//                 //componentRestrictions: {locality: 'Denver'}
//             }, function (results, status) {
//                 //after we get the results, check geocoder status
//                 if (status == google.maps.GeocoderStatus.OK) {
//                     // use resulting lat, lng to re-center the map & zoom in
//                     map.setCenter(results[0].geometry.location);
//                     map.setZoom(15);
//                 } else {
//                     window.alert('We could not find that location - try entering a more' +
//                         ' specific place.');
//                 }
//             });
//     }
// }

// function displayDirections(origin) {
//     var directionsService = new google.maps.DirectionsService;
//     var destinationAddress =
//         document.getElementById('zoom-to-area-text').value;
//     directionsService.route({
//         // pass in origin, destination and travel mode
//         // The origin is the passed in marker's position.
//         origin: origin,
//         // The destination is user entered address.
//         destination: destinationAddress,
//     }, function (response, status) {
//         // when we get back a response, we will make sure the status is OK
//         if (status === google.maps.DirectionsStatus.OK) {
//             var directionsDisplay = new google.maps.DirectionsRenderer({
//                 // specify to render on our map
//                 map: map,
//                 // get directions from our route response
//                 directions: response,
//                 draggable: true,
//                 // polylineOptions: {
//                 //     strokeColor: 'green'
//                 // }
//             });
//         } else {
//             window.alert('Directions request failed due to ' + status);
//         }
//     });
// }

// document.getElementById('zoom-to-area').addEventListener('click', function () {
//     zoomToArea();
// });
//
// function zoomToArea() {
//
//     var address = document.getElementById('zoom-to-area').value;
//     console.log('address= ' + address);
//
//     // This autocomplete is for use in the geocoder entry box.
//     var zoomAutocomplete = new google.maps.places.Autocomplete(
//         document.getElementById('zoom-to-area-text'));
//
//     // Initialize the geocoder, create new geocoder instance
//     var geocoder = new google.maps.Geocoder();
//     console.log("geocoder= " + geocoder);
//
//     // Make sure the address isn't blank.
//     if (address == '') {
//         window.alert('You must enter an area, or address.');
//     } else {
//
//         // Geocode the address.
//         geocoder.geocode(
//             {
//                 address: address,
//                 //you can add a component restriction here like:
//                 //componentRestrictions: {locality: 'Denver'}
//             }, function (results, status) {
//                 //after we get the results, check geocoder status
//                 if (status == google.maps.GeocoderStatus.OK) {
//                     // use resulting lat, lng to re-center the map & zoom in
//                     map.setCenter(results[0].geometry.location);
//                     map.setZoom(15);
//                 } else {
//                     window.alert('We could not find that location - try entering a more' +
//                         ' specific place.');
//                 }
//             });
//     }
// }

// displayDirections();