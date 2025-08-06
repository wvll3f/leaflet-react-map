import { useEffect, useRef, useState } from "react";
import { useMapEvents } from "react-leaflet";
import { useMapStore } from "../store/MapStore";

interface ContextMenuProps {
  action: () => void;
}

const ContextMenu = ({ action }: ContextMenuProps) => {

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  const { latitude, longitude, setLatitude, setLongitude } = useMapStore();

  const MapEvents = ({
    onContextMenu,
  }: {
    onContextMenu: (e: L.LeafletMouseEvent) => void;
  }) => {
    useMapEvents({
      contextmenu: onContextMenu,
    });
    return null;
  };

  const handleContextMenu = (e: L.LeafletMouseEvent) => {
    e.originalEvent.preventDefault();

    setPosition({
      x: e.originalEvent.clientX,
      y: e.originalEvent.clientY,
    });

    setLatitude(e.latlng.lat.toString());
    setLongitude(e.latlng.lng.toString());
    setVisible(true);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <MapEvents onContextMenu={handleContextMenu} />

      {visible && (
        <div
          ref={menuRef}
          className="flex flex-col items-start bg-gray-800 text-gray-200 text-lg rounded-md"
          style={{
            position: "fixed",
            left: `${position.x}px`,
            top: `${position.y}px`,
            zIndex: 1000,
          }}
        >
          <button
            className="flex justify-start w-full cursor-pointer hover:bg-gray-700 p-2 rounded-sm"
            onClick={() => {
              navigator.clipboard.writeText(`${latitude}, ${longitude}`);
              setVisible(false);
            }}
          >
            {latitude && longitude
              ? `${Number(latitude).toFixed(5)}, ${Number(longitude).toFixed(
                  5
                )}`
              : "Coordenadas não disponíveis"}
          </button>
          <button
            className="flex justify-start w-full cursor-pointer hover:bg-gray-700 p-2 rounded-sm"
            onClick={() => {
              action();
              setVisible(false);
            }}
          >
            Adicionar Dispositivo
          </button>
        </div>
      )}
    </>
  );
};

export default ContextMenu;
