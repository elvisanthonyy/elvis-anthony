import { useTheme } from "../context/ThemeContext";

const MailButton = () => {
  const { theme } = useTheme();
  return (
    <a
      target="_blank"
      className="md:max-w-80 hover:opacity-70 w-[90%]"
      href="mailto:info.elvisanthony@gmail.com?subject=Hello%20Elvis"
    >
      <button
        className={`flex cursor-pointer w-full mx-auto transition-all duration-500 ease-in-out justify-center items-center rounded-[32px] text-[14px] hover:rounded-4xl h-14 ${
          theme === "light"
            ? "bg-light-black text-nav-gray"
            : "text-light-black bg-nav-gray"
        } `}
      >
        Send Email
      </button>
    </a>
  );
};

export default MailButton;
