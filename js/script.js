let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:41.878, lng:-87.629 },
    zoom: 8,
  });
}

window.initMap = initMap;