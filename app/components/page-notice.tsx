"use client";
export const PageNotice = () => {
  return (
    <div className="absolute h-full w-full flex flex-col text-center justify-center bg-slate-900/50 z-[1056789]">
      <h1 className=" capitalize text-2xl">
        Start by installing or opening the app
      </h1>
      <h2 className="text-blue-200 ">
        It seems like the app has not been istalled or opened in a standalone
        window yet
      </h2>
    </div>
  );
};
