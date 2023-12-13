import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-center sm:justify-between items-center">
      <div className="flex flex-col items-center sm:block">
        <h1 className="text-7xl text-center sm:text-left my-2">Create. </h1>
        <h1 className="text-7xl text-center sm:text-left my-2 text-blue-500">
          Update.
        </h1>
        <h1 className="text-7xl text-center sm:text-left my-2">Share.</h1>
        <button
          className="bg-blue-500 px-5 py-4 rounded mt-4"
          type="button"
        >
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
  )
}
