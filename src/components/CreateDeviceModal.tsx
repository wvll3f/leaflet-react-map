import { useState } from "react";
import { useMapStore } from "../store/MapStore";
import { useMarkersStore } from "../store/useMarkerStore";

interface CreateDeviceModalProps {
  isOpen: boolean;
  toggle: () => void;
}

function CreateDeviceModal({ isOpen, toggle }: CreateDeviceModalProps) {
  const { latitude, longitude } = useMapStore();
  const addMarker = useMarkersStore((state) => state.addMarker);
  const [formData, setFormData] = useState({
    descricao: "dispositivo generico",
    ip: "192.168.1.1",
    mac: "00:00:00:00",
  });

  const resetFormvalues = () => {
    setFormData({
      descricao: "dispositivo generico",
      ip: "192.168.1.1",
      mac: "00:00:00:00",
    });
  };

  if (isOpen)
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center z-[1000]">
        <form className="w-2xl p-6 mx-auto bg-gray-800 relative rounded-xl">
          <span
            onClick={() => {
              resetFormvalues();
              toggle();
            }}
            className="text-white text-2xl cursor-pointer bg-gray-800 w-8 h-8 text-center rounded-full -top-2 -right-2 absolute"
          >
            x
          </span>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.descricao}
              onChange={(e) =>
                setFormData({ ...formData, descricao: e.target.value })
              }
            />
            <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Descrição
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.ip}
              onChange={(e) => setFormData({ ...formData, ip: e.target.value })}
            />
            <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Endereço IP
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.mac}
              onChange={(e) =>
                setFormData({ ...formData, mac: e.target.value })
              }
            />
            <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Endereço MAC
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={latitude}
            />
            <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Latitude
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={longitude}
            />
            <label className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Longitude
            </label>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addMarker({
                descricao: formData.descricao,
                ip: formData.ip,
                mac: formData.mac,
                position: { lat: Number(latitude), lng: Number(longitude) },
              });
              toggle();
              resetFormvalues();
            }}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    );
}

export default CreateDeviceModal;
