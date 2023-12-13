function ButtonGroup() {
  return (
    <div>
      <div className="mb-2">
        <label className="block text-sm font-bold text-white ">Accent :</label>
      </div>
      <div className="flex gap-2">
        <button
          className="h-8 w-8 select-none rounded-full bg-yellow-500 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        ></button>
        <button
          className="h-8 w-8 select-none rounded-full bg-orange-500 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        ></button>
        <button
          className="h-8 w-8 select-none rounded-full bg-green-500 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        ></button>
      </div>
    </div>
  );
}

export default ButtonGroup;
