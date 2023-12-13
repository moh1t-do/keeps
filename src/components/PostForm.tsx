import { useDispatch } from "react-redux";
import { addToList } from '@/redux/wishSlice';
import ButtonGroup from "./ButtonGroup";
import { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState<string>('');
  const [theme, setTheme] = useState<number>(1);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let _id: number = Math.random();
    console.log('id', _id, 'title', title, 'theme', theme)
    dispatch((addToList({
      id: _id,
      title: title,
      theme: theme,
    })))
    setTitle('');
    setTheme(1);
  }
  return (
    <div className="w-full max-w-xs rounded-lg bg-[#212121] p-8 shadow-md sm:max-w-sm md:max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-sm font-bold text-white ">Title :</label>
        </div>
        <input
          type="text"
          placeholder="What's on your mind?"
          className="mb-6 w-full rounded px-4 py-2
  text-black focus:outline-none sm:text-sm sm:leading-5"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        ></input>
        <ButtonGroup setTheme={setTheme} />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="focus:shadow-outline-blue mt-6 flex items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600 focus:outline-none"
          >
            {" "}
            Post{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              id="send"
              fill="#fff"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
