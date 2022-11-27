function initMap() {
  var chicago = { lat: 41.6922572, lng: -87.5583785 };
  var map = new google.maps.Map(document.getElementById("map"), {
    center: chicago,
	zoom: 8,
  });

  new google.maps.Marker({
    position: new google.maps.LatLng(41.6922572, -87.5583785),
    map,
    label: "Chicago",
	animation: google.maps.Animation.DROP
  });
  
  new google.maps.Marker({
    position: new google.maps.LatLng(41.8665069, -87.6300768),
    map,
    label: "South Deering",
	animation: google.maps.Animation.DROP
  });
  
  infowindow.open(map, chicago);

}
window.initMap = initMap;