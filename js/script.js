var map;

function initMap() {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(41.8781, -87.6298)
	};

	map = new google.maps.Map(document.getElementById('map'),
		mapOptions);
}
function addMarker() {
	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(41.8781, -87.6298),
		title:'Chicago',
		map:map
	});
	
	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(41.86650, -87.63007),
		title:'South Deering',
		map:map
	});
}