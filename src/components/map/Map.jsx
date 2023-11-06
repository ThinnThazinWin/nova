import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBKx-UGkzpvSol3xk5CiuBK7aSVs_1kgm4',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MapContainer />
}

function MapContainer() {
  const center = useMemo(() => ({ lat: 17, lng: 96 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}