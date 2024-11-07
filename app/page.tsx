"use client";

import { useEffect, useState } from "react";
import { Loader } from "./components/loader";
import { PageNotice } from "./components/page-notice";

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