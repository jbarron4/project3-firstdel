/*function initMap(): void {
  var chicago = { lat:41.69225, lng:-87.55837 };
  var map = new google.maps.Map(document.getElementById("map"), {
    center: chicago,
	zoom: 8,
  });

  new google.maps.Marker({
    position: new google.maps.LatLng(41.69225,-87.55837),
    map,
    label: "Chicago",
	animation: google.maps.Animation.DROP
  });
  
  new google.maps.Marker({
    position: new google.maps.LatLng(41.86650,-87.63007),
    map,
    label: "South Deering",
	animation: google.maps.Animation.DROP
  });
  
  infowindow.open(map, chicago);

}
window.initMap = initMap;*/

function myMap() {
var chicago= {
  center:new google.maps.LatLng(41.69225,-87.55837),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("map"),chicago);
}