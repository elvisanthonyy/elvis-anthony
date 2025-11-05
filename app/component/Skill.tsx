interface ChildProps {
  progress: number;
  name: string;
}

const Skill = ({ progress, name }: ChildProps) => {
  return (
    <div className="px-5 flex my-2 justify-start items-center w-[90%] h-5">
      <div className="w-[70%] text-lighter-black text-md ">{name}</div>
      <div className="flex  rounded-2xl overflow-hidden w-[30%] h-2 bg-gray-200">
        {progress === 100 ? (
          <div
            className={`flex rounded-2xl w-full h-2 bg-gradient-to-l from-blue-400 to-blue-800`}
          ></div>
        ) : (
          <div
            className={`flex rounded-2xl w-[60%] h-2 bg-gradient-to-l from-blue-400 to-blue-800`}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Skill;
