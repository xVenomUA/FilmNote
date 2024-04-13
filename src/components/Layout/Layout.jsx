import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AppBar } from "../AppBar/AppBar";
import { Loader } from "../Loader/Loader";
import { Foooter } from "../Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <AppBar />
        <Outlet />
        <Foooter />
      </Suspense>
    </div>
  );
};
