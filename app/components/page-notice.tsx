"use client";
import handsUp from "@/app/assets/images/hands-up.png"
import Image from "next/image";

export const PageNotice = () => {
  return (
    <div className="absolute h-full w-full flex flex-col text-center justify-center bg-slate-900/50 z-[1056789]">
      <div className="hidden sm:block absolute top-10 rotate-[-20deg] right-[15%]">
        <Image className=" animate-bounce" src={handsUp} alt="Hands Up" width={100} height={100}/>
      </div>
      <h1 className="capitalize text-3xl">
        Start by installing or opening the app.
      </h1>
      <h2 className="text-blue-200 ">
        It seems like the app has not been installed or opened in a standalone window yet.
      </h2>
    </div>
  );
};
