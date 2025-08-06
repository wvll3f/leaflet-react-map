function LeftMenu() {
  return (
    <div className="flex flex-col py-3 text-gray-800 min-w-72 shadow-[6px_0px_8px_0px_rgba(59,_130,_246,_0.2)]">
      <header className="flex justify-center h-32 items-center">
        <h1 className="font-bold text-2xl p-4 text-blue-600 ">Project Map</h1>
      </header>
      <main className="flex flex-col flex-1 px-2 pt-2">
        <button className="btn-default w-full"> + Criar projeto</button>
        <aside>
          <button className="btn-default w-full">Seus projetos</button>
          <ul>
            <li></li>
          </ul>
        </aside>
      </main>
      <footer className="flex flex-col space-y-4 w-full p-2">
        <button className="flex justify-center items-center bg-amber-600 hover:bg-amber-700 text-white font-semibold cursor-pointer w-full rounded-full p-1 tracking-widest">
          sair
        </button>
      </footer>
    </div>
  );
}

export default LeftMenu;
