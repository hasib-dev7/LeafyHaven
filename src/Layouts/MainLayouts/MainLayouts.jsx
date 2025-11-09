import { Outlet } from "react-router";
import Navber from "../../Component/Navber/Navber";
import Footer from "../../Component/Footer/Footer";

const MainLayouts = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navber></Navber>
        <div className="flex-1  w-full lg:w-11/12 mx-auto px-3 md:px-8 lg:px-20 py-5 md:py-8 lg:py-12">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayouts;
