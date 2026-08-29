import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const WhatsappButton = () => {
  const { theme } = useTheme();
  return (
    <Link
      target="_blank"
      className="md:max-w-80 hover:opacity-70 lg:w-[30%] w-[90%]"
      href="https://wa.me/message/Z7QT2V66JO54B1"
    >
      <button className="cursor-pointer w-full flex items-center justify-center  rounded-[32px] bg-green-500 h-13">
        <FaWhatsapp className={`text-2xl text-white`} />
      </button>
    </Link>
  );
};

export default WhatsappButton;
