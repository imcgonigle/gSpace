var map;

function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.7576313, lng: -95.0092089},
        zoom: 4,
        mapTypeControl: false
    });
    var zoomAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('zoom-to-area-text'));
    var bounds = new google.maps.LatLngBounds();

    zoomAutocomplete.bindTo('bounds', map);

    map.fitBounds(bounds);

}

document.getElementById('zoom-to-area').addEventListener('click', function () {
    zoomToArea();
});

function zoomToArea() {

    var address = document.getElementById('zoom-to-area').value;
    console.log('address= ' + address);

    // This autocomplete is for use in the geocoder entry box.
    var zoomAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('zoom-to-area-text'));
    //Bias the boundaries within the map for the zoom to area text.
    zoomAutocomplete.bindTo('bounds', map);

    // Initialize the geocoder, create new geocoder instance
    var geocoder = new google.maps.Geocoder();
    console.log("geocoder= " + geocoder);

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