import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingH from "./LoadingH";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";

type FormFields = {
  name: string;
  email: string;
  serviceType: string;
  message: string;
};

const HireMe = () => {
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    setLoading(true);
    axios
      .post("/api/hire/me", data)
      .then((res) => {
        setLoading(false);
        if (res.data.message === "message sent") {
          toast.success("message sent");
          reset();
        } else {
          toast.error("Message could not be sent, please try again");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    if (loading) {
      document.body.classList.add("overflow-y-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [loading]);

  return (
    <form
      className={`${
        theme === "light" ? "bg-white" : "bg-lighter-black"
      }  rounded-2xl shadow-2xl/4 lg:w-[60%]  flex flex-col w-[90%] mx-auto min-h-100 h-fit mb-20 px-4 pb-5`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className={`flex w-full mb-5 text-lg ${
          theme === "light" ? "text-lighter-black" : "text-white"
        }  font-semibold items-center  flex-col mx-auto my-3 mt-7`}
      >
        HIRE ME
      </div>
      {loading && <LoadingH />}
      <input
        {...register("name", {
          required: "name is required",
          validate: (value) => {
            const valueNoSpace = value.replaceAll(" ", "");
            if (valueNoSpace.length > 0) {
              return true;
            }
            return "enter a valid name ";
          },
        })}
        type="text"
        placeholder="Name"
        className={`my-2  ${
          theme === "light"
            ? "text-lighter-black bg-back-gray"
            : "bg-darkerGray text-back-gray"
        } md:w-[80%] lg:w-[50%] md:mx-auto  px-3 text-sm rounded-xl h-10 focus:outline-none focus:border-1 focus:border-green-500`}
      />
      {errors.name && (
        <div className="text-red-600 md:w-[50%] md:mx-auto text-sm px-2">
          {errors.name?.message}
        </div>
      )}
      <input
        {...register("email", {
          required: "email is required",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "please enter a valid email adress",
          },
        })}
        placeholder="Email"
        className={`my-2  ${
          theme === "light"
            ? "text-lighter-black bg-back-gray"
            : "bg-darkerGray text-back-gray"
        } md:w-[80%] lg:w-[50%] md:mx-auto  px-3 text-sm rounded-xl h-10 focus:outline-none focus:border-1 focus:border-green-500`}
      />
      {errors.email && (
        <div className="text-red-600 md:w-[50%] md:mx-auto text-sm px-2">
          {errors.email?.message}
        </div>
      )}
      <select
        {...register("serviceType", {
          required: "Srvice type is required",
        })}
        className={`my-2 ${
          theme === "light"
            ? "text-lighter-black bg-back-gray"
            : "bg-darkerGray text-back-gray"
        } md:w-[80%] lg:w-[50%] md:mx-auto  px-3 text-sm rounded-xl h-10 focus:outline-none focus:border-1 focus:border-green-500`}
      >
        <option value="service">Service</option>
        <option value="collaboration">Collaboration</option>
        <option value="tutoring">Tutoring</option>
      </select>
      {errors.serviceType && (
        <div className="text-red-600 md:w-[50%] md:mx-auto text-sm px-2">
          {errors.serviceType?.message}
        </div>
      )}
      <textarea
        {...register("message", {
          required: "message is required",
        })}
        placeholder="Message"
        className={`my-2  ${
          theme === "light"
            ? "text-lighter-black bg-back-gray"
            : "bg-darkerGray text-back-gray"
        } md:w-[80%] lg:w-[50%] md:mx-auto  px-3 text-sm rounded-xl h-30 focus:outline-none focus:border-1 focus:border-green-500`}
      />
      {errors.message && (
        <div className="text-red-600 md:w-[50%] md:mx-auto text-sm px-2">
          {errors.message?.message}
        </div>
      )}
      <button
        type="submit"
        className={`flex cursor-pointer md:w-[80%] lg:w-[50%] w-full mx-auto my-10 transition-all duration-500 ease-in-out justify-center items-center rounded-2xl hover:rounded-4xl h-12 ${
          theme === "light"
            ? "bg-light-black text-nav-gray"
            : "text-light-black bg-nav-gray"
        } `}
      >
        Send message
      </button>
    </form>
  );
};

export default HireMe;
