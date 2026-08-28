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
      className={`flex ${
        theme === "light" ? "text-black" : "text-white"
      } justify-start items-center w-[90%] h-5`}
    >
      <div className="w-[70%] text-[#e4e4e4] text-[14px]">{name}</div>
      <div
        className={`flex  rounded-2xl overflow-hidden w-[30%] h-1 ${
          theme === "light" ? "bg-gray-200" : "bg-light-black"
        } `}
      >
        <div
          className={`flex rounded-2xl ${len} h-full ${theme === "light" ? "bg-gradient-to-l from-blue-400 to-blue-800" : "bg-[#e4e4e4]"} `}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
