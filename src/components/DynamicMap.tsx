import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import camIconImg from "../assets/cam.png";
import {
  FeatureGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { handleCreated } from "../utils/MapUtils";
import DevicePopUp from "./DevicePopUp";
import { Icon } from "leaflet";
import ContextMenu from "./ContextMenu";
import CreateDeviceModal from "./CreateDeviceModal";
import { useState } from "react";
import { useMarkersStore } from "../store/useMarkerStore";

const camIcon = new Icon({
  iconUrl: camIconImg,
  iconSize: [24, 24],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

//const positions: [number, number][] = [[-12.6432600743722, -38.0847503605042]];

const DynamicMap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const markers = useMarkersStore((state) => state.markers);
  const removeMarker = useMarkersStore((state) => state.removeMarker);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <CreateDeviceModal isOpen={isOpen} toggle={toggleModal} />
      <MapContainer
        center={[-12.643334740528106, -38.08474676659405]}
        zoom={14}
        scrollWheelZoom={true}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ContextMenu action={toggleModal} />

        <MarkerClusterGroup>
          {markers.map(({id,position}) => (
            <Marker key={id} position={position} icon={camIcon}>
              <Popup> {<DevicePopUp id={id} actionClick={() => removeMarker(id)} />} </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>

        <FeatureGroup>
          <EditControl
            draw={{ polyline: false }}
            position="topright"
            onCreated={handleCreated}
          />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
};

export default DynamicMap;
