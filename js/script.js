function myMap() {
  var chicago= {
    center:new google.maps.LatLng(41.69225,-87.55837),
    zoom:8,
  };
  
  var map = new google.maps.Map(document.getElementById("map"),chicago);
  
  new google.maps.Marker({
    position: new google.maps.LatLng(41.86650,-87.63007),
    map,
    label: "South Deering",
	animation: google.maps.Animation.DROP
  });
  
  infoWindow.open(map, chicago);
}

window.myMap = myMap;