import { WebView } from 'react-native-webview';

const leafletHtml = (trail) => {
  const points = trail.geometry.map((point) => [point.latitude, point.longitude]);
  const center = [trail.coords.latitude, trail.coords.longitude];
  return `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"><style>html,body,#map{height:100%;margin:0} .leaflet-control-attribution{font-size:9px}</style></head><body><div id="map"></div><script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script><script>const points=${JSON.stringify(points)};const map=L.map('map',{scrollWheelZoom:true}).setView(${JSON.stringify(center)},17);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors'}).addTo(map);const route=L.polyline(points,{color:'#176B56',weight:5}).addTo(map);L.circleMarker(points[0],{radius:7,color:'#fff',weight:3,fillColor:'#D7654C',fillOpacity:1}).addTo(map);if(points.length>1)map.fitBounds(route.getBounds(),{padding:[24,24],maxZoom:18});</script></body></html>`;
};

export default function MapPreview({ trail, style }) {
  return <WebView source={{ html: leafletHtml(trail) }} style={style} originWhitelist={['*']} javaScriptEnabled domStorageEnabled scrollEnabled />;
}
