/*let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8665069, lng: -87.6300768 },
    zoom: 8,
  });
}

window.initMap = initMap;*/




let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 41.8665069, lng: -87.6300768 },
    zoom: 8,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;