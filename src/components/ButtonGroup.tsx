interface Props {
  setTheme: React.Dispatch<React.SetStateAction<number>>;
}

function ButtonGroup(props: Props): React.ReactNode {

  const handleClick = (e: any) => {
    let selectedTheme: number = 1;
    console.log(e);
    if (e.target.value === 'yellow')
      selectedTheme = 1;
    else if (e.target.value === 'orange')
      selectedTheme = 2;
    else if (e.target.value === 'green')
      selectedTheme = 3;
    props.setTheme(selectedTheme);
  }
  return (
    <div>
      <div className="mb-2">
        <label className="block text-sm font-bold text-white ">Accent :</label>
      </div>
      <div className="flex gap-2">
        <button
          value="yellow"
          className="h-8 w-8 select-none rounded-full bg-yellow-500 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handleClick}
        ></button>
        <button
          value="orange"
          className="h-8 w-8 select-none rounded-full bg-orange-500 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handleClick}
        ></button>
        <button
          value="green"
          className="h-8 w-8 select-none rounded-full bg-green-500 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handleClick}
        ></button>
      </div>
    </div>
  );
}

export default ButtonGroup;
