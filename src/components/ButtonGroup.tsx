function ButtonGroup() {
    return <div>
        <div className="mb-2">
            <label className="block text-white text-sm font-bold ">Accent :</label>
        </div>
        <div className="flex gap-2">
            <button
                className="align-middle h-8 w-8 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-yellow-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
                type="button">
            </button>
            <button
                className="align-middle h-8 w-8 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-orange-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
                type="button">
            </button>
            <button
                className="align-middle h-8 w-8 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs bg-green-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full"
                type="button">
            </button>
        </div>
    </div>
}

export default ButtonGroup;