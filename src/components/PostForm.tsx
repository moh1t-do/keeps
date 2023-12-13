import ButtonGroup from "./ButtonGroup";

function PostForm() {
    return <div className="max-w-xs sm:max-w-sm md:max-w-md w-full bg-[#212121] p-8 rounded-lg shadow-md">
        <form>
            <div className="mb-2">
                <label className="block text-white text-sm font-bold ">Title :</label>
            </div>
            <input type="text" placeholder="What's on your mind?" className="w-full px-4 py-2 rounded sm:text-sm
  sm:leading-5 text-black mb-6 focus:outline-none"></input>
            <ButtonGroup />
            <div className="flex items-center justify-between">
                <button type="submit" className="flex justify-center items-center mt-6 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"> Post <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" id="send" fill="#fff">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                </svg>
                </button>
            </div>
        </form>
    </div>
}

export default PostForm;