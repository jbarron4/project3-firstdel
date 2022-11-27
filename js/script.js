let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8665069, lng: -87.6300768 },
    zoom: 8,
  });
}

window.initMap = initMap;