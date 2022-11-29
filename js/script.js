function initMap() {
  var chicago = { lat:41.8781, lng:-87.6298};
  var map = new google.maps.Map(document.getElementById("map"), {
    center: chicago,
	zoom: 8,
  });

  new google.maps.Marker({
    position: new google.maps.LatLng(41.86650,-87.63007),
    map,
    label: "South Deering",
	animation: google.maps.Animation.DROP
  });
}
window.initMap = initMap;