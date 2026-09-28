import { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, CircleMarker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function FitRoute({ points }) {
  const map = useMap();
  useEffect(() => {
    if (points.length > 1) map.fitBounds(points, { padding: [24, 24], maxZoom: 18 });
    else map.setView(points[0], 17);
  }, [map, points]);
  return null;
}

export default function MapPreview({ trail, style }) {
  const points = trail.geometry.map((point) => [point.latitude, point.longitude]);
  return <MapContainer center={points[0]} zoom={17} scrollWheelZoom style={{ ...style, width: '100%' }}><TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /><FitRoute points={points} /><Polyline positions={points} pathOptions={{ color: '#176B56', weight: 5 }} /><CircleMarker center={points[0]} radius={7} pathOptions={{ color: '#FFFFFF', weight: 3, fillColor: '#D7654C', fillOpacity: 1 }} /></MapContainer>;
}
