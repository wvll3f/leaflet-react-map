interface DevicePopUpProps {
  actionClick: () => void;
  id:string;
}

function DevicePopUp({ actionClick,id }: DevicePopUpProps) {
  return (
    <div className="flex flex-col rounded-lg bg-gray-800 text-gray-200">
      <h1 className="font-bold text-lg border-b-1 mt-3 p-2">Camera 1</h1>
      <span>ID: {id}</span>
      <div className="ml-2 -space-y-4 space-x-2">
        <span className="flex items-center">
          <p className="font-bold">IP: </p>
          <p className="text-gray-100">192.168.1.1</p>
        </span>
        <span className="flex items-center">
          <p className="font-bold">MAC: </p>
          <p className="text-gray-100">00:00:00:00</p>
        </span>
        <button onClick={actionClick} className="btn-default">remover</button>
      </div>
    </div>
  );
}

export default DevicePopUp;
