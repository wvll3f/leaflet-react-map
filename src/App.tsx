import "./index.css";
import DynamicMap from "./components/DynamicMap";
// import LeftMenu from "./components/LeftMenu";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-800">
      {/* <aside className="flex h-screen">
        <LeftMenu />
      </aside> */}
      <h1 className="font-bold text-3xl mt-4">Rabisque seus projetos aqui 👇</h1>
        <div className="flex mt-4 items-center justify-center space-x-4">
          <h1 className="font-bold text-xl ">Controles:</h1>
          <p><strong>Botão esquerdo:</strong> especificações do dispositivo</p>
          <p><strong>Botão direito:</strong> abre o menu</p>
          <p><strong>Clique duplo ou scroll-Up:</strong> Zoom+</p>
          <p> <strong> scroll-Down: </strong> Zoom-</p>
        </div>
      <main className="w-full h-full flex items-center justify-center flex-1">
        <DynamicMap />
      </main>
    </div>
  );
}

export default App;
