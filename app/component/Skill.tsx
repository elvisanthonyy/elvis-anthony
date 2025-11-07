import { useTheme } from "../context/ThemeContext";

interface ChildProps {
  progress: number;
  name: string;
}

const Skill = ({ progress, name }: ChildProps) => {
  let len;
  const { theme } = useTheme();
  if (progress === 25) {
    len = "w-[25%]";
  } else if (progress === 50) {
    len = "w-[50%]";
  } else if (progress === 75) {
    len = "w-[75%]";
  } else {
    len = "w-full";
  }
  return (
    <div
      className={`px-5 flex my-2 ${
        theme === "light" ? "text-black" : "text-white"
      } justify-start items-center w-[90%] h-5`}
    >
      <div className="w-[70%] text-md ">{name}</div>
      <div
        className={`flex  rounded-2xl overflow-hidden w-[30%] h-1 ${
          theme === "light" ? "bg-gray-200" : "bg-light-black"
        } `}
      >
        <div
          className={`flex rounded-2xl ${len} h-full bg-gradient-to-l from-blue-400 to-blue-800`}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
