import { ImLinkedin2 } from "react-icons/im";

function Mentor({ profile, name, date, description, title, linkedin }) {
  return (
    <div className="hover:bg-zinc-100 hover:dark:bg-zinc-900 transition-all duration-300 p-6 md:rounded-xl mt-20 relative pb-32">
      <div className="flex flex-row gap-4 ">
        <img
          src={profile}
          alt={`${name} profile`}
          className="w-16 h-16 rounded-full object-cover mb-4"
        />
        <div className="self-center flex flex-col">
          <h3 className="font-bold text-gray-500 font-sm text-lg  dark:text-zinc-300">
            {name}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{title}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 ">{date}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
          {description}
        </p>
        <a
          href={linkedin}
          className="absolute bottom-4 right-4 rounded-full p-5 border border-red-700"
        >
          <ImLinkedin2 className="text-red-600 text-2xl cursor-pointer" />
        </a>
      </div>
      {/* <></> */}
    </div>
  );
}

export default Mentor;
