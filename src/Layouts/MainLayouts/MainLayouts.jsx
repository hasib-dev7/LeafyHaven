import { Outlet } from "react-router";
import Navber from "../../Component/Navber/Navber";
import Footer from "../../Component/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const MainLayouts = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navber></Navber>
        <div className="flex-1  w-full lg:w-11/12 mx-auto px-3 md:px-8 lg:px-20 bg-base-200">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
       <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
    </>
  );
};

export default MainLayouts;
