// Initialize and add the map
function initMap() {
  const chicago = { lat: 41.8781, lng: -87.6298 };
  const southDeering = { lat: 41.86650, lng: -87.63007};
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: chicago,
  });
  
  const marker = new google.maps.Marker({
    position: chicago,
    map: map,
  });
  
  const marker = new google.maps.Marker({
    position: southDeering,
    map: map,
  });
}

window.initMap = initMap;
