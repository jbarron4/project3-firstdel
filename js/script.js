function initMap() {
	// Location of Chicago
	const chicago = { lat: 41.6922572, lng: -87.5583785 }
	// Create new Chicago map
	const map1 = new google.maps.Map(document.getElementById("map1"), {
		zoom: 8,
		center: chicago,
	});
}

window.initMap = initMap;