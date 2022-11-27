function initMap() {
	// Location of Chicago
	const chicago = { lat: 41.6922572, lng: -87.5583785 }
	// Create new Chicago map
	const map1 = new google.maps.Map(document.getElementById("map1"), {
		zoom: 8,
		center: chicago,
	});
}

function initMap() {
	// Location of South Deering
	const southDeering = { lat: 41.8665069, lng: -87.6300768 }
	// Create new South Deering map
	const map2 = new google.maps.Map(document.getElementById("map2"), {
		zoom: 8,
		center: southDeering,
	});
}

window.initMap = initMap;