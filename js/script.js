function initMap() {
	var map_parameters = {center: {lat:41.8781, lng:-87.6298}, zoom: 8};
	var map = new google.maps.Map(document.getElementById("map"), map_parameters);
	
	var chicago = {position: {lat:41.8781, lng:-87.6298}, map: map};
	var southDeering = {position: {lat: 41.86650, lng: -87.63007}, map: map};
	
	var marker1 = new google.maps.Marker(chicago);
	var marker1 = new google.maps.Marker(southDeering);
}