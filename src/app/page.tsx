import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center sm:justify-between">
      <div className="flex flex-col items-center sm:block">
        <h1 className="my-2 text-center text-7xl sm:text-left">Create. </h1>
        <h1 className="my-2 text-center text-7xl text-blue-500 sm:text-left">
          Update.
        </h1>
        <h1 className="my-2 text-center text-7xl sm:text-left">Share.</h1>
        <button className="mt-4 rounded bg-blue-500 px-5 py-4" type="button">
          Create Now
        </button>
      </div>
      <Image
        className="hidden sm:block"
        src="./hero.svg"
        alt="new year resolution"
        width={400}
        height={400}
      />
    </div>
  );
}
