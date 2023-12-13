import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromList } from "@/redux/wishSlice";

function WishListCard(props: any): React.ReactNode {
  const selectedTheme = props.theme;
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(props.id)
    dispatch((removeFromList(props.id)));
  }

  if (selectedTheme == 1)
    return <div className={`flex max-w-xs items-center border-l-8 border-yellow-500 bg-yellow-50 p-4 text-yellow-900 shadow-lg sm:max-w-sm md:max-w-md`}>
      <div className="flex w-[80vw] sm:w-96 justify-between gap-2">
        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">
          {props.title}
        </h2>
        <div className="flex gap-4">
          <button onClick={handleDelete}>
            <TiDelete size={25} />
          </button>
        </div>
      </div>
    </div>

  else if (selectedTheme == 2)
    return <div className={`flex max-w-xs items-center border-l-8 border-red-500 bg-red-50 p-4 text-red-900 shadow-lg sm:max-w-sm md:max-w-md`}>
      <div className="flex w-[80vw] sm:w-96 justify-between gap-2">
        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">
          {props.title}
        </h2>
        <div className="flex gap-4">
          <button onClick={handleDelete}>
            <TiDelete size={25} />
          </button>
        </div>
      </div>
    </div>

  else if (selectedTheme == 3)
    return <div className={`flex max-w-xs items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg sm:max-w-sm md:max-w-md`}>
      <div className="flex w-[80vw] sm:w-96 justify-between gap-2">
        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">
          {props.title}
        </h2>
        <div className="flex gap-4">
          <button onClick={handleDelete}>
            <TiDelete size={25} />
          </button>
        </div>
      </div>
    </div>
}

export default WishListCard;
