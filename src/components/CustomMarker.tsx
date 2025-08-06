import { Marker, Popup } from "react-leaflet";
import { useCallback, useMemo, useRef, useState } from "react";
import L from "leaflet";

const center = {
  lat: -12.6432600743722,
  lng: -38.0847503605042,
};

function CustomMarker() {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(center);
  // Tipagem correta do ref para o Marker do Leaflet
  const markerRef = useRef<L.Marker>(null);
  
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

export default CustomMarker;