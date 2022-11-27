function initMap(): void {
	
};

var chicago = {
	zoom: 8,
	center: new google.maps.LatLng(41.6922572, -87.5583785),
};

var southDeering = {
	zoom: 9,
	center: new google.maps.LatLng(41.8665069, -87.6300768),
};

var map = new google.maps.Map(document.getElementById('map1'), chicago);
var map = new google.maps.Map(document.getElementById('map2'), southDeering);


window.initMap = initMap;