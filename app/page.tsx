"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [pwaInstalled, setPwaInstalled] = useState<boolean>();

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log(window.matchMedia("(display-mode: standalone)"));
      document.cookie = "pwa_installed=true; path=/; samesite=strict";
      location.reload();
    } else setPwaInstalled(false);
  }, []);

  return <>{!pwaInstalled ? <PageNotice /> : <Loader />}</>;
}

const PageNotice = () => {
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

const Loader = () => {
  return (
    <div className="h-full w-full grid place-items-center bg-slate-900/50 z-[1056789]">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};
